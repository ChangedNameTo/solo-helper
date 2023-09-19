import * as rpgDiceRoller from "@dice-roller/rpg-dice-roller";

import { CommandMessage, Message } from "../../Types/MessageTypes";

const diceNotationRegex = /\/[\w]+\s(\d+d\d+[+-]?(\d*))\s?(\w)?/;

export default function MoveRoll(action, command) {
  const roller: rpgDiceRoller.DiceRoller = new rpgDiceRoller.DiceRoller();

  // Action Roll
  const diceNotation = action.text.match(diceNotationRegex)[1];
  const statValue = action.text.match(diceNotationRegex)[2];
  const stat = action.text.match(diceNotationRegex)[3];
  const actionRoll = roller.roll(diceNotation) as rpgDiceRoller.DiceRoll;
  const actionDiceTotal = actionRoll.total;

  // Challenge Roll
  const challengeRollOne = roller.roll("1d10") as rpgDiceRoller.DiceRoll;
  const challengeRollTwo = roller.roll("1d10") as rpgDiceRoller.DiceRoll;

  const newMessage: CommandMessage = {
    id: action.date,
    text: action.text,
    date: action.date,
    type: "command",
    fields: {
      command: command,
      actionDice: {
        notation: diceNotation,
        output: actionRoll.output,
        total: actionRoll.total,
        stat: stat,
        statValue: statValue,
      },
      challengeDice: {
        results: [challengeRollOne.total, challengeRollTwo.total],
        match: false,
      },
      actionResult: "",
    }
  };

  const resultOne = actionDiceTotal > challengeRollOne.total;
  const resultTwo = actionDiceTotal > challengeRollTwo.total;

  if (resultOne && resultTwo) {
    newMessage.fields.actionResult = "Full Success";
  } else if (resultOne || resultTwo) {
    newMessage.fields.actionResult = "Partial Success";
  } else {
    newMessage.fields.actionResult = "Failure";
  }

  return newMessage 
}
