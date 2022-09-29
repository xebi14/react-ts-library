import { RadioProps } from "./Radio.interfaces"
import { Variant } from "./Radio.enum"

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.LIST_DESC]: "ListWithDesc",
  [Variant.LIST_INLINE_DESC]: "ListInlineDesc",
  [Variant.LIST_INLINE_TEXT]: "ListInlineText",
  [Variant.RADIO_ON_RIGHT]: "RadioRight",
}

export const Radio = ({ radioItems, variant = Variant.LIST_INLINE_TEXT }: RadioProps) => {
  switch (VARIANT_MAPS[variant]) {
    case "ListWithDesc":
      return (
        <div>
          <fieldset>
            <legend className="sr-only">Plan</legend>
            <div className="space-y-5">
              {radioItems.map((item) => (
                <div key={item.id} className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input id={item.heading} aria-describedby={`${item.heading}-description`} name="plan" type="radio" defaultChecked={item.heading === "small"} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor={item.heading} className="font-medium text-gray-700">
                      {item.heading}
                    </label>
                    <p id={`${item.id}-description`} className="text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      )
    case "ListInlineDesc":
      return (
        <div>
          <fieldset>
            <legend className="sr-only">Plan</legend>
            <div className="space-y-5">
              {radioItems.map((item) => (
                <div key={item.id} className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input id={item.heading} aria-describedby={`${item.heading}-description`} name="plan" type="radio" defaultChecked={item.heading === "small"} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor={item.heading} className="font-medium text-gray-700">
                      {item.heading}
                    </label>
                    <span id={`${item.heading}-description`} className="text-gray-500">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      )
    case "RadioRight":
      return (
        <div>
          <fieldset className="mt-2">
            <legend className="sr-only">Bank account</legend>
            <div className="divide-y divide-gray-200">
              {radioItems.map((item) => (
                <div key={item.id} className="relative flex items-start py-4">
                  <div className="min-w-0 flex-1 text-sm">
                    <label htmlFor={`account-${item.heading}`} className="font-medium text-gray-700">
                      {item.heading}
                    </label>
                    <p id={`account-${item.heading}-description`} className="text-gray-500">
                      {item.description}
                    </p>
                  </div>
                  <div className="ml-3 flex h-5 items-center">
                    <input id={`account-${item.heading}`} aria-describedby={`account-${item.heading}-description`} name="account" type="radio" defaultChecked={item.heading === "checking"} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
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
          <fieldset className="mt-4">
            <legend className="sr-only">Notification method</legend>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
              {radioItems.map((item) => (
                <div key={item.id} className="flex items-center">
                  <input id={item.heading} name="notification-method" type="radio" defaultChecked={item.heading === "email"} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <label htmlFor={item.heading} className="ml-3 block text-sm font-medium text-gray-700">
                    {item.heading}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      )
  }
}

Radio.defaultProps = {
  variant: Variant.LIST_INLINE_TEXT,
}

Radio.variant = Variant

console.log("Radio", Radio)
