import slashCommand from "slash-command";
import * as rpgDiceRoller from "@dice-roller/rpg-dice-roller";
import { useId } from "react";

const commandRegex = /\/[^\s]+\s+/;
const diceNotationRegex = /\/[\w]+\s(\d+d\d+[+-]?(\d*))\s?(\w)?/;

let nextId = 0;

export default function messagesReducer(messages, action) {
  const roller = new rpgDiceRoller.DiceRoller();

  switch (action.type) {
    case "added": {
      // Don't add empty messages
      if (!action.text.length) {
        return messages;
      }

      // Check for a command
      const matchedText = action.text.match(commandRegex);
      const isCommand = matchedText?.length > 0;

      // if true, is a command
      const newMessage = {
        id: nextId,
        text: action.text,
        date: action.date,
        type: isCommand ? "command" : "text",
        fields: {},
      };

      nextId++;

      if (isCommand) {
        const command = matchedText[0].trim();
        newMessage.command = command;

        switch (command) {
          case "/roll": {
            const diceNotation = action.text.match(diceNotationRegex)[1];
            const roll = roller.roll(diceNotation);

            newMessage.fields.actionDice = {
              notation: diceNotation,
              rollResult: roll.output,
              total:roll.total
            };

            break;
          }
          case "/moveroll": {
            const diceNotation = action.text.match(diceNotationRegex)[1];
            const statValue = action.text.match(diceNotationRegex)[2]
            const stat = action.text.match(diceNotationRegex)[3]
            const roll = roller.roll(diceNotation);
            const actionDiceTotal = roll.total

            newMessage.fields.actionDice = {
              notation: diceNotation,
              stat: stat,
              statValue: statValue,
              rollResult: roll.output,
              total: actionDiceTotal
            };

            const challengeDice = {}
            const challengeDiceOne = roller.roll("1d10").total;
            const challengeDiceTwo = roller.roll("1d10").total;

            challengeDice.results = [
              challengeDiceOne,
              challengeDiceTwo,
            ];
            challengeDice.match = challengeDiceOne === challengeDiceTwo

            newMessage.fields.challengeDice = challengeDice

            const resultOne = actionDiceTotal > challengeDiceOne
            const resultTwo = actionDiceTotal > challengeDiceTwo
            
            if (resultOne && resultTwo) {
              newMessage.fields.actionResult = "Full"
            } else if (resultOne || resultTwo) {
              newMessage.fields.actionResult = "Partial"
            } else {
              newMessage.fields.actionResult = "Failure"
            }
            break;
          }
          default: {
            break;
          }
        }
      }

      return [...messages, newMessage];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
