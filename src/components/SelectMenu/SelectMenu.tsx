import { SelectMenuProps } from "./SelectMenu.interfaces"

export const SelectMenu = ({ menuItems, menuLable }: SelectMenuProps) => {
  return (
    <div>
      <label htmlFor="location" className="block text-sm font-medium text-gray-700">
        {menuLable}
      </label>
      <select id="location" name="location" className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" defaultValue="Canada">
        {menuItems.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  )
}
