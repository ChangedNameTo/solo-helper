import { classNames } from "../../assets/Helpers";

export default function SheetGauge(props) {
  const textDecoration = (gaugeValue) => {
    if (gaugeValue > 0) {
      return "+";
    } else if (gaugeValue < 0) {
      return "-";
    } else {
      return " ";
    }
  };

  const gaugeWidth = () =>
    (props.gauge.current / (props.gauge.max - props.gauge.min)) * 100 + "%";

  return (
    <li key={props.gauge.name} className="col-span-1 flex rounded-md shadow-sm">
      <button
        className={classNames(
          props.gauge.bgColor,
          "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-xl font-bold text-white"
        )}
      >
        {textDecoration(props.gauge.current)} {props.gauge.current}
      </button>
      <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
        <div className="px-4 py-1 text-sm w-full">
          <a href={""} className="font-bold text-gray-900 hover:text-gray-600">
            {props.gauge.name}
          </a>
          <div className="mt-1 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: gaugeWidth() }}
            ></div>
          </div>
          <p className="whitespace-normal text-gray-500 flex-shrink">
            {props.gauge.description}
          </p>
        </div>
      </div>
    </li>
  );
}
