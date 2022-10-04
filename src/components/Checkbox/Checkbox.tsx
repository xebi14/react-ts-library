import { CheckboxProps } from "./Checkbox.interfaces"
import { Variant } from "./Checkbox.enum"
import { useState } from "react"

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.WITH_DESC]: "WithDesc",
  [Variant.INLINE_DESC]: "InlineDesc",
  [Variant.BOX_ON_RIGHT]: "BoxRight",
}

export const Checkbox = ({ label, description, value, name, id }: CheckboxProps) => {
  return (
    <div className="relative flex items-start">
      <div className="flex h-5 items-center">
        <input id={id} name={name} value={value} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="comments" className="font-medium text-gray-700">
          {label}
        </label>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  )
}