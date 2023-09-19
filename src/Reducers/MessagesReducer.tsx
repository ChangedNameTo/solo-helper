import * as rpgDiceRoller from "@dice-roller/rpg-dice-roller";
import { Message } from "../Types/MessageTypes";
import MoveRoll from "./Commands/MoveRoll";

const commandRegex = /\/[^\s]+\s+/;

export default function messagesReducer(messages, action) {
  const roller: rpgDiceRoller.DiceRoller = new rpgDiceRoller.DiceRoller();

  switch (action.type) {
    case "added": {
      // Don't add empty messages
      if (!action.text.length) {
        return messages;
      }

      // Check for a command
      const matchedText: RegExpMatchArray = action.text.match(commandRegex);
      const isCommand: boolean = matchedText?.length > 0;

      // if true, is a command

      let newMessage;
      if (isCommand) {
        const command = matchedText[0].trim();

        switch (command) {
          case "/moveroll": {
            newMessage = MoveRoll(action, command);
            break;
          }
          default: {
            break;
          }
        }
      } else {
        newMessage = {
          id: action.date,
          text: action.text,
          date: action.date,
          type: isCommand ? "command" : "text",
          fields: undefined,
        } as Message;
      }

      return [...messages, newMessage];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
