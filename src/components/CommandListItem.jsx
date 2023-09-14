export default function CommandListItem(props) {
  return (
    <li key={props.commandText.id} >
      <button
        type="submit"
        className="rounded bg-indigo-600 px-1 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
        "
        onClick={() => pass}
      >
        {props.commandText.commandText}
      </button>
    </li>
  )
}