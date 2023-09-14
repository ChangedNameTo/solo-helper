function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Set up the relative date formatter
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export default function MessageListItem(props) {
  return (
    <li key={props.props.id} className="bg-white relative flex pl-1 pr-2 rounded-lg">
      <div
        className={classNames(
          props.index === props.length - 1 ? "h-6" : "-bottom-6",
          "absolute left-1 top-0 flex w-6 justify-center"
        )}
      >
        <div className="w-px bg-gray-300" />
      </div>
      <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
        {props.type === "paid" ? (
          <CheckCircleIcon
            className="h-6 w-6 text-indigo-600"
            aria-hidden="true"
          />
        ) : (
          <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
        )}
      </div>
      <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
        {props.props.text}
      </p>
      <time
        dateTime={props.props.dateTime}
        className="flex-none py-0.5 text-xs leading-5 text-gray-500"
      >
        {timeAgo.format(props.props.date)}
      </time>
    </li>
  );
}
