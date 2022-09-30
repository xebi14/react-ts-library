import { TextareaProps } from "./Textarea.interfaces"
import { Variant } from "./Textarea.enum"

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.SIMPLE]: "Simple",
  [Variant.SIMLE_ACTION]: "SimpleAction",
  [Variant.AVATAR_ACTION]: "AvatarAction",
}

export const Textarea = ({ variant, title, name, value, onChange, placeholderText }: TextareaProps) => {
  switch (VARIANT_MAPS[variant]) {
    case "SimpleAction":
      return <div></div>
    case "AvatarAction":
      return <div></div>

    default:
      return (
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            {title}
          </label>
          <div className="mt-1">
            <textarea rows={4} name={name} onChange={onChange} value={value} id="comment" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" defaultValue={""} />
          </div>
        </div>
      )
  }
}
