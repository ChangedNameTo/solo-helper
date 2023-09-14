import { BellIcon } from "@heroicons/react/24/outline";

import GameFeed from "./GameFeed";
import ExaminerColumn from "./ExaminerColumn";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col h-screen grow">
        <div className="shrink-0 bg-gray-900">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <div className="flex items-center gap-x-8">
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
        </div>

        {/* 3 column wrapper */}
        <div className="flex flex-row grow">
          <div className="basis-1/3">
            <button
              type="submit"
              className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => localStorage.clear()}
            >
              Clear LocalStorage
            </button>
          </div>
          <div className="basis-1/3">
            <GameFeed />
          </div>
          <div className="basis-1/3">
            <ExaminerColumn />
          </div>
        </div>
      </div>
    </>
  );
}
