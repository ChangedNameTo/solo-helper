// Set up the relative date formatter
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CommandMessageListItem(props) {
  return (
    <li key={props.message.id} className="bg-white relative flex pl-0.5 pr-2 rounded-lg">
      <div
        className={classNames(
          props.index === props.length - 1 ? "h-6" : "-bottom-6",
          "absolute left-0.5 top-0 flex w-6 justify-center"
        )}
      >
        <div className="w-px bg-gray-300" />
      </div>
      <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
          <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
      </div>
      <div className="flex-auto py-0.5 text-s leading-5 text-gray-500">
        {props.message.command}
        <p className="pl-1 inline font-bold">
          {props.message.roll}
        </p>
      </div>
      <time
        dateTime={props.message.dateTime}
        className="flex-none py-0.5 text-s leading-5 text-gray-500"
      >
        {timeAgo.format(props.message.date)}
      </time>
    </li>
  )
}