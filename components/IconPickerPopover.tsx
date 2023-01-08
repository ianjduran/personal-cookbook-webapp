// Icon Picker Function as Component

import { Fragment, useState } from "react"
import icons from "../lib/Icons"
import { Transition, Popover } from "@headlessui/react"


export default function IconPicker({ onChange }: { onChange: Function }) {

    const [SelectedIcon, setSelectedIcon] = useState(Object.keys(icons)[0]) // State to Select Icon'
    // const SelectedIcon = value ?? Object.keys(icons)[0]
    const IconButton = icons[SelectedIcon] // Component with the value of the selected Icon
    return (
        <Popover>
            {/* Button To open Color Picker */}
            <Popover.Button className="h-fit w-fit block-inline transition-[filter] ease-out hover:brightness-95 dark:hover:brightness-125">
                <IconButton className='w-12 h-12 px-1 py-1 bg-gray-100 rounded-md dark:bg-gray-800' />
            </Popover.Button>
            <Popover.Panel>
                {({ close }) => (
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <div className="shadow transition-all ease-out transform -translate-y-[calc(100%-60px)] absolute bg-gray-200 dark:bg-gray-800 rounded-md overflow-clip h-12 overflow-y-auto max-w-sm">
                            <div className="flex flex-wrap gap-2 m-1">
                                {Object.keys(icons).map((icon: string, i) => { // Creating a component for each Icon found in the icons object
                                    const Icon = icons[icon]
                                    return (
                                        <div className="transition-all ease-out rounded-md text-slate-700 hover:shadow-md hover:border-slate-100 hover:bg-slate-100 hover:text-slate-800 " onClick={() => {
                                            onChange(icon); // Sets the new selected Icon
                                            setSelectedIcon(icon)
                                            close()
                                        }} key={i}><Icon className='w-8 h-8 m-1' /></div>
                                    )
                                })}
                            </div>
                        </div>
                    </Transition>
                )}
            </Popover.Panel>
        </Popover>
    )
}
