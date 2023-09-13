import { useEffect, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import CommandInputBox from './CommandInputBox'

// Set up the relative date formatter
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function GameFeed() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("messages")
    const initialValue = JSON.parse(saved)
    return initialValue || []
  });

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages))
  }, [messages])

  const newMessage = (messageText) => {
    const draftMessage = {
      id: messages.length + 1,
      type: 'text',
      payload: messageText,
      date: Date.now(),
    }
    setMessages([...messages, draftMessage])
  }

  return (
    <>
      <ul role="list" className="space-y-6">
        {messages.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id} className="relative flex gap-x-4">
            <div
              className={classNames(
                activityItemIdx === messages.length - 1 ? 'h-6' : '-bottom-6',
                'absolute left-0 top-0 flex w-6 justify-center'
              )}
            >
              <div className="w-px bg-gray-200" />
            </div>
            <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
              {activityItem.type === 'paid' ? (
                <CheckCircleIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
              ) : (
                <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
              )}
            </div>
            <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
              {activityItem.payload}
            </p>
            <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs leading-5 text-gray-500">
              {timeAgo.format(activityItem.date)}
            </time>
          </li>
        ))}
      </ul>

      {/* New comment form */}
      <div className="mt-6 flex gap-x-3">
        <CommandInputBox
          onClick={(i) => newMessage(i)}
        />
      </div>
    </>
  )
}
