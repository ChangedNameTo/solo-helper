export default function SheetBond(props) {
  return(
    <li className="col-span-1 flex rounded-md shadow-sm">
      <div className="flex flex-1 items-center justify-between truncate rounded-md border border-gray-200 bg-white">
        <div className="px-4 py-1 text-sm w-full">
          <a
            href={props.bond.name}
            className="font-bold text-gray-900 hover:text-gray-600"
          >
            {props.bond.name}
          </a>
          <p className="whitespace-normal text-gray-500 flex-shrink">
            {props.bond.description}
          </p>
        </div>
      </div>
    </li>
  )
}