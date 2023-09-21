import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { UsersIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

export default function VowsForm(props) {
  const [name, setName] = React.useState(props.character?.name);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
    };
  };

  return (
    <Transition appear show={props.isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-bold leading-6 text-gray-900"
                >
                  Vows
                </Dialog.Title>

                <form>
                  <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Vows
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        When you Swear an Iron Vow, you give it a rank and
                        record it on your character sheet.
                      </p>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        You should start your first session with two vows: A
                        long term goal (your background vow) and an immediate
                        situation which must be dealt with (your inciting
                        incident). These vows have a progress track that will
                        move as you Reach a Milestone.
                      </p>
                      <div className="mt-10 space-y-10">
                        <div className="col-span-full">
                          <label
                            htmlFor="phone-number"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Phone Number
                          </label>
                          <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 flex items-center">
                              <label htmlFor="country" className="sr-only">
                                Country
                              </label>
                              <select
                                id="country"
                                name="country"
                                autoComplete="country"
                                className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                              >
                                <option>Epic</option>
                                <option>Formidable</option>
                                <option>EU</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              name="phone-number"
                              id="phone-number"
                              className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="+1 (555) 987-6543"
                            />
                          </div>
                        </div>
                        <div className="col-span-full">
                          <label
                            htmlFor="phone-number"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Phone Number
                          </label>
                          <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 flex items-center">
                              <label htmlFor="country" className="sr-only">
                                Country
                              </label>
                              <select
                                id="country"
                                name="country"
                                autoComplete="country"
                                className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                              >
                                <option>US</option>
                                <option>CA</option>
                                <option>EU</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              name="phone-number"
                              id="phone-number"
                              className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="+1 (555) 987-6543"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="button"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
