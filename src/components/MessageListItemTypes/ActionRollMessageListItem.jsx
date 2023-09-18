import { timeAgo, classNames } from "../../assets/Helpers";

export default function ActionRollMessageListItem(props) {
  const diceTableClasses = () =>
    "px-2 rounded-lg bg-white shadow flex-1 mx-2 mb-2";
  const diceLabelClasses = () =>
    "font-semibold text-center border-b border-gray-600";

  const statLabel = () => {
    switch (props.message.fields.actionDice.stat) {
      case "E":
        return "Edge";
      case "H":
        return "Heart";
      case "I":
        return "Iron";
      case "S":
        return "Shadow";
      case "W":
        return "Wit";
    }
  };

  const matchButton = () => {
    if (props.message.fields.challengeDice.match) {
      return (
          <span className={classNames("bg-indigo-50 text-indigo-700 ring-indigo-600/20 inline-flex flex-shrink-0 items-center rounded-full ml-3 px-1.5 py-0.5 mb-1 text-xs font-medium ring-1 ring-inset shadow-sm")}>
            Match!
          </span>
      )
    }
  }

  return (
    <li className="bg-white relative flex-col pl-0.5 pr-2 rounded-lg">
      <div className="flex flex-row">
        <div className="flex-1 flex-col">
          <h3 className="text-base font-semibold text-gray-900 ml-2 w-full">
            {props.message.text}
          </h3>
          <div className="ml-2 w-full text-gray-600">
            Move Roll for {statLabel()} (
            {props.message.fields.actionDice.statValue})
          </div>
        </div>
        <time
          dateTime={props.message.dateTime}
          className="py-0.5 text-s text-gray-500 text-right flex-shrink"
        >
          {timeAgo.format(props.message.date, "mini")}
        </time>
      </div>
      <dl className="flex flex-row">
        <div className={classNames(diceTableClasses(), "")}>
          <dt className={classNames(diceLabelClasses())}>Action</dt>
          <dd className="text-center">
            {props.message.fields.actionDice.total}
          </dd>
        </div>

        <div className={classNames(diceTableClasses(), "")}>
          <dt className={classNames(diceLabelClasses())}>Challenge</dt>
          <div className="grid grid-cols-2">
            <dd className="text-center">
              {props.message.fields.challengeDice.results[0]}
            </dd>
            <dd className="text-center">
              {props.message.fields.challengeDice.results[1]}
            </dd>
          </div>
          {matchButton()}
        </div>

        <div className={classNames(diceTableClasses(), "")}>
          <dt className={classNames(diceLabelClasses())}>Success?</dt>
          <dd className="text-center">{props.message.fields.actionResult}</dd>
        </div>
      </dl>
    </li>
  );
}
