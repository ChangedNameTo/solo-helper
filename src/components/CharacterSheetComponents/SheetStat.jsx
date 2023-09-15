import { classNames } from "../../assets/Helpers";

export default function SheetStat(props) {
  return (
    <li className="col-span-1 flex rounded-md shadow-sm">
      <button
        className={classNames(
          props.stat.bgColor,
          "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-xl font-bold text-white"
        )}
      >
        {props.stat.value}
      </button>
      <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
        <div className="px-4 py-1 text-sm">
          <a
            href={props.stat.href}
            className="font-bold text-gray-900 hover:text-gray-600"
          >
            {props.stat.name}
            <div className="pl-2 inline text-gray-400 font-semibold">
              ({props.stat.initials})
            </div>
          </a>
          <p className="whitespace-normal text-gray-500 flex-shrink">
            {props.stat.description}
          </p>
        </div>
      </div>
    </li>
  );
}
