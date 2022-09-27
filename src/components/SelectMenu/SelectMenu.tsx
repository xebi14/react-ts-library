import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"
import { SelectMenuProps } from "./SelectMenu.interfaces"
import { Variant } from "./SelectMenu.enum"

const VARIANT_MAP: Record<Variant, String> = {
  [Variant.CHECK_ON_LEFT]: "CheckOnLeft",
  [Variant.SIMPLE_CUSTOM]: "SimpleCustom",
  [Variant.SIMPLE_NATIVE]: "SimpleNative",
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

export const SelectMenu = ({ menuItems, menuLable, variant = Variant.SIMPLE_NATIVE }: SelectMenuProps) => {
  const [selected, setSelected] = useState(menuItems[0])

  switch (VARIANT_MAP[variant]) {
    case "SimpleCustom":
      return (
        <div>
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                    <span className="block truncate">{selected.item}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Listbox.Button>

                  <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {menuItems.map((item) => (
                        <Listbox.Option key={item.id} className={({ active }) => classNames(active ? "text-white bg-indigo-600" : "text-gray-900", "relative cursor-default select-none py-2 pl-3 pr-9")} value={item}>
                          {({ selected, active }) => (
                            <>
                              <span className={classNames(selected ? "font-semibold" : "font-normal", "block truncate")}>{item.item}</span>

                              {selected ? (
                                <span className={classNames(active ? "text-white" : "text-indigo-600", "absolute inset-y-0 right-0 flex items-center pr-4")}>
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
      )

    case "CheckOnLeft":
      return <div></div>

    default:
      return (
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            {menuLable}
          </label>
          <select id="location" name="location" className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" defaultValue="Canada">
            {menuItems.map((item) => (
              <option>{item.item}</option>
            ))}
          </select>
        </div>
      )
  }
}

SelectMenu.defaultProps = {
  variant: Variant.SIMPLE_NATIVE,
}

SelectMenu.variant = Variant

console.log("Select Menu", SelectMenu)
