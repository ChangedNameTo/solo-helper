import { timeAgo,classNames } from "../../assets/Helpers";

export default function ActionRollMessageListItem(props) {
  return (
    <li className="bg-white relative flex pl-0.5 pr-2 rounded-lg">
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
        {props.message.text}
        <p className="pl-1 inline font-bold">
          {props.message.fields.actionDice.rollResult}
        </p>
      </div>
      <div>
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Last 30 days
        </h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
            >
              <dt className="truncate text-sm font-medium text-gray-500">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                {item.stat}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <time
        dateTime={props.message.dateTime}
        className="flex-none py-0.5 text-s leading-5 text-gray-500"
      >
        {timeAgo.format(props.message.date)}
      </time>
    </li>
  );
}
