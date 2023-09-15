import CommandListItem from "./CommandListItem"

const commands = [
  {id:1, commandText:'/roll'},
  {id:2, commandText:'/fortune'}
]

export default function CommandList() {
  return (
    <div className="grow">
      <div className="font-bold">
        Command List
      </div>
      <ul role="list" className="p-1 space-y-2 border">
        {commands.map((command, commandIdx) => (
          <CommandListItem
            key={commandIdx}
            commandText={command}
          />
        ))}
      </ul>
    </div>
  )
}