import * as React from "react";

const checkBoxClasses = (value) => {
  return (

  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
    {value}
  </td>;
  )
};

export default function StatFormTableRow({ stat }) {
  return (
    <tr key={stat.name}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
        {stat.name} ({stat.initials})
      </td>
      <td className="px-3 py-4 text-sm text-gray-500">{stat.description}</td>
      {checkBoxClasses(stat.value)}
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {stat.value}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {stat.value}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {stat.value}
      </td>
    </tr>
  );
}
