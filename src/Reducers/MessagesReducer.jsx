export default function messagesReducer(messages, action) {
  switch (action.type) {
    case 'added': {
      return [...messages, {id: action.id, text: action.text, date: action.date}]
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}