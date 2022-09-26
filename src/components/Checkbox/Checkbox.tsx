import { CheckboxProps } from "./Checkbox.interfaces"
import { Variant } from "./Checkbox.enum"

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.WITH_DESC]: "WithDesc",
  [Variant.INLINE_DESC]: "InlineDesc",
  [Variant.BOX_ON_RIGHT]: "BoxRight",
}

export const Checkbox = ({ listItems, variant = Variant.INLINE_DESC }: CheckboxProps) => {
  switch (VARIANT_MAPS[variant]) {
    case "WithDesc":
      return (
        <div>
          <fieldset className="space-y-5">
            <legend className="sr-only">Notifications</legend>
            {listItems.map((item) => (
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input id={item.heading} aria-describedby={`${item.heading}-description`} name={item.heading} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor={item.heading} className="font-medium text-gray-700">
                    {item.heading}
                  </label>
                  <p id={`${item.heading}-description`} className="text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </fieldset>
        </div>
      )
    case "BoxRight":
      return (
        <div>
          <fieldset className="border-t border-b border-gray-200">
            <legend className="sr-only">Notifications</legend>
            <div className="divide-y divide-gray-200">
              {listItems.map((item) => (
                <div className="relative flex items-start py-4">
                  <div className="min-w-0 flex-1 text-sm">
                    <label htmlFor={item.heading} className="font-medium text-gray-700">
                      {item.heading}
                    </label>
                    <p id={`${item.heading}-description`} className="text-gray-500">
                      {item.description}
                    </p>
                  </div>
                  <div className="ml-3 flex h-5 items-center">
                    <input id={item.heading} aria-describedby={`${item.heading}-description`} name={item.heading} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  </div>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      )
    default:
      return (
        <div>
          <fieldset className="space-y-5">
            <legend className="sr-only">Notifications</legend>

            {listItems.map((item) => (
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input id={item.heading} aria-describedby="comments-description" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor={item.heading} className="font-medium text-gray-700">
                    {item.heading}
                  </label>
                  <span id={`${item.heading}-description`} className="text-gray-500">
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
}

Checkbox.defaultProps = {
  variant: Variant.WITH_DESC,
}

Checkbox.variant = Variant

console.log("Checkbox", Checkbox)
