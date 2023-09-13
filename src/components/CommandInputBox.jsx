import React, {useState} from 'react';

export default function CommandInputBox(props) {
  const [commandText, setCommandText] = useState('blah');

  const submitCommand = (e) => {
    e.preventDefault()
    props.onClick(commandText)
    setCommandText('')
  }  

  return (
    <form className="relative flex-auto" onSubmit={(e) => submitCommand(e)}>
      <div className="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
        <label htmlFor="comment" className="sr-only">
          What happens next?
        </label>
        <textarea
          rows={2}
          name="Enter"
          id="enter"
          className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="What happens next?"
          defaultValue={''}
          onChange={(e) => setCommandText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') submitCommand(e)
          }}
          value={commandText}
        />
      </div>
        
      <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
        <div className="flex items-center space-x-5">
        </div>
        <button
          type="submit"
          className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Enter
        </button>
      </div>
    </form>
  )
}