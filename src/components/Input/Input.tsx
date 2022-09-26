import { InputProps } from "./Input.interfaces"
import { InputTypes } from "./Input.enum"

// const STATE_MAPS : Record<InputStates, boolean> = {
//     [InputStates.WITH_LABEL_HELP_TEXT] : true,
//     [InputStates.WITH_VALIDATION_ERROR] : true,
//     [InputStates.DISABLED] : true
// }

// const HELP_TEXT_MAPS: Record<HelpText, boolean> = {
//   [HelpText.OFF]: false,
//   [HelpText.ON]: true,
// }

// const VALIDATION_ERROR_MAPS: Record<ValidationError, boolean> = {
//   [ValidationError.OFF]: false,
//   [ValidationError.ON]: true,
// }

// const DISABLED_MAPS: Record<Disabled, boolean> = {
//   [Disabled.OFF]: false,
//   [Disabled.ON]: true,
// }

const InputType_Map: Record<InputTypes, string> = {
  [InputTypes.EMAIL]: "email",
  [InputTypes.NUMBER]: "number",
  [InputTypes.STRING]: "text",
  [InputTypes.PASSWORD]: "password",
}

export const Input = ({ inputLabel, inputPlaceholder, helperText, error, disabled, inputType }: InputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{inputLabel}</label>
      <div className="mt-1">
        <input
          type={InputType_Map[inputType as keyof typeof InputType_Map]}
          name="email"
          id="email"
          className={`h-10 block w-full rounded-md ${error ? "border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500" : "border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"} sm:text-sm`}
          placeholder={inputPlaceholder}
          disabled={disabled}
        ></input>
      </div>
      {helperText ? (
        <p className="mt-2 text-sm text-gray-500" id="email-description">
          {helperText}
        </p>
      ) : null}

      {error ? (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error}
        </p>
      ) : null}
    </div>
  )
}

Input.defaultProps = {
  inputType: InputTypes.STRING,
}
Input.inputType = InputTypes

console.log("Input", Input)
