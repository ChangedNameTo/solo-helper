import slashCommand from "slash-command"
import * as rpgDiceRoller from '@dice-roller/rpg-dice-roller'

export default function messagesReducer(messages, action) {
  const roller = new rpgDiceRoller.DiceRoller();

  switch (action.type) {
    case 'added': {
      // Handle the role logic
      const enteredText = slashCommand(action.text)

      // Create the new message
      const newMessage = {
        id: action.id,
        command: enteredText.slashcommand,
        arguments: enteredText.body,
        text: enteredText.original,
        date: action.date,
      }

      if (enteredText.slashcommand) {
        try {
          const roll = roller.roll(enteredText.body)
          
          newMessage.roll = roll.output
        } catch (error) {
          console.error(error)
        }
        
        newMessage.type = 'command'
      } else {
        newMessage.type = 'text'
      }

      return [...messages, newMessage]
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}