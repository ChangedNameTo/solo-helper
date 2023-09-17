import { StarIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

import { classNames } from "../../assets/Helpers";

export default function SheetVow(props) {
  const tierColor = () => {
    switch(props.vow.tier){
      case 'troublesome':
        return 'green'
      case 'dangerous':
        return 'yellow'
      case 'formidable':
        return 'orange'
      case 'extreme':
        return 'red'
      case 'epic':
        return 'black'
    }
  }

  const tierColorString = () => {
    const color = tierColor()
    return `bg-${color}-50 text-${color}-700 ring-${color}-600/20`
  }

  const gaugeWidth = () =>
    (props.vow.current / (props.vow.max - props.vow.min)) * 100 + "%";

  return (
    <li className="col-span-1 flex rounded-md shadow-sm">
      <div className="flex flex-1 items-center justify-between truncate rounded-md border border-gray-200 bg-white">
        <div className="px-4 py-1 text-sm w-full">
          <a
            href={props.vow.href}
            className="font-bold text-gray-900 hover:text-gray-600"
          >
            {props.vow.name}
          </a>
          <span className={classNames(tierColorString(),"inline-flex flex-shrink-0 items-center rounded-full ml-3 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset")}>
            {props.vow.tier}
          </span>
          <div className="mt-1 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: gaugeWidth() }}
            ></div>
          </div>
          <p className="whitespace-normal text-gray-500 flex-shrink">
            {props.vow.description}
          </p>
        </div>
      </div>
    </li>
  );
}
