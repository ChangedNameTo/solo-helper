import TextMessageListItem from "./MessageListItemTypes/TextMessageListItem";
import CommandMessageListItem from "./MessageListItemTypes/CommandMessageListItem";

export default function MessageListItem(props) {
  return (
    <>
      {props.message.type === 'command' ? (
        <CommandMessageListItem
          message={props.message}
          index={props.index}
          length={props.length}
        />
      ) : (
        <TextMessageListItem
          message={props.message}
          index={props.index}
          length={props.length}
        />)}
    </>
  );
}
