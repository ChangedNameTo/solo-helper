import { BellIcon } from '@heroicons/react/24/outline'

import GameFeed from './GameFeed'

export default function Example() {
  return (
    <>
      <div className="flex min-h-full flex-col">
        <header className="shrink-0 bg-gray-900">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <div className="flex items-center gap-x-8">
              <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-300">
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your profile</span>
                <img
                  className="h-8 w-8 rounded-full bg-gray-800"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </a>
            </div>
          </div>
        </header>

        {/* 3 column wrapper */}
        <div className="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
          {/* Left sidebar & main wrapper */}
          <div className="flex-1 xl:flex">
            <div className="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-b-0 xl:border-r xl:pl-6">
              <button
                type="submit"
                className="rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-700"
                onClick = {() => localStorage.clear()}
              >
                Clear LocalStorage
              </button>
            </div>

            <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
              <GameFeed />
            </div>
          </div>

          <div className="shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6">
              hi3
          </div>
        </div>
      </div>
    </>
  )
}
