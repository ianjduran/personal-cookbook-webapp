import { Transition, Listbox } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { HiChevronDown, HiCheck } from 'react-icons/hi2'
import useSWR from 'swr'
import CategoryModel from '../models/category'

export default function CategoryPicker({data} : {
  data: any
}) {


  const [selected, setSelected] = useState(data[0])

  return (
    <div className="w-72">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate font-subtitle">{selected?.categoryName}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {data.map((category: any) => {
                return(
                  <Listbox.Option
                  key={category._id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-100 text-teal-900' : 'text-gray-900'
                    }`
                  }
                  value={category}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block font-subtitle truncate ${selected ? 'font-medium text-black' : 'font-normal text-gray-00'
                          }`}
                      >
                        {category.categoryName}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-600">
                          <HiCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
                )
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
} 