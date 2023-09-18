import { timeAgo, classNames } from "../../assets/Helpers";

export default function ActionRollMessageListItem(props) {
  const diceSymbol = (diceValue, challengeDiceResult = undefined) => {
    console.log(diceValue);
    console.log(challengeDiceResult);
    if (challengeDiceResult) {
      if (diceValue > challengeDiceResult) {
        return (
          <div className="flex-shrink m-1 px-2 pb-0.5 rounded-md bg-green-800 text-white font-semibold">
            {challengeDiceResult}
          </div>
        );
      } else {
        return (
          <div className="flex-shrink m-1 px-2 pb-0.5 rounded-md bg-red-800 text-white font-semibold">
            {challengeDiceResult}
          </div>
        );
      }
    } else {
      return (
        <div className="flex-shrink m-1 px-2 pb-0.5 rounded-md bg-black text-white font-semibold">
          {diceValue}
        </div>
      );
    }
  };

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
        <span
          className={classNames(
            "bg-indigo-50 text-indigo-700 ring-indigo-600/20 flex-shrink-0 items-center rounded-full m-1 px-2 py-1 text-xs font-medium ring-1 ring-inset shadow-sm"
          )}
        >
          Match!
        </span>
      );
    }
  };

  return (
    <li className="bg-white rounded-lg shadow-sm ring-1 ring-gray-900/5">
      <dl className="flex flex-wrap">
        <div className="flex-auto pl-1 pt-0.5">
          <dt className="font-semibold leading-1 text-gray-900">
            Move Roll for {statLabel()} (
            {props.message.fields.actionDice.statValue})
          </dt>
          <dd className="flex flex-row text-gray-800">
            {props.message.fields.actionResult}
          </dd>
        </div>
        <div className="flex-none px-1 pt-0.5">
          <time
            dateTime={props.message.dateTime}
            className="self-end text-s text-gray-500"
          >
            {timeAgo.format(props.message.date, "mini")}
          </time>
        </div>
      </dl>
      <div className="bg-gray-50 ring-gray-900/5 ring-1 shadow-sm rounded-b-lg flex flex-row">
        <div className="flex-grow"></div>
        {diceSymbol(props.message.fields.actionDice.total)}

        <span className="font-bold my-1">VS.</span>

        {diceSymbol(
          props.message.fields.actionDice.total,
          props.message.fields.challengeDice.results[0]
        )}
        {diceSymbol(
          props.message.fields.actionDice.total,
          props.message.fields.challengeDice.results[1]
        )}
        {matchButton()}
        <div className="flex-grow"></div>
      </div>
    </li>
  );
}
