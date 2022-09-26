import { CheckboxProps } from "./Checkbox.interfaces"
import { CheckboxDetails } from "./CheckboxDetails.interface"

export const Checkbox = ({ listItems }: CheckboxProps) => {
  return (
    <div>
      <fieldset className="space-y-5">
        <legend className="sr-only">Notifications</legend>

        {listItems.map((item) => (
          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="comments" className="font-medium text-gray-700">
                {item.heading}
              </label>
              <span id="comments-description" className="text-gray-500">
                <span className="sr-only">{listItems[0].heading} </span>
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </fieldset>
    </div>
  )
}
