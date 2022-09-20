import { InputProps } from "./Input.interfaces";
import { HelpText, ValidationError, Disabled } from "./Input.enum";

// const STATE_MAPS : Record<InputStates, boolean> = {
//     [InputStates.WITH_LABEL_HELP_TEXT] : true,
//     [InputStates.WITH_VALIDATION_ERROR] : true,
//     [InputStates.DISABLED] : true
// }

const HELP_TEXT_MAPS: Record<HelpText, boolean> ={
        [HelpText.OFF] : false,
        [HelpText.ON]: true   
}

const VALIDATION_ERROR_MAPS : Record <ValidationError, boolean> = {
    [ValidationError.OFF] : false,
    [ValidationError.ON] : true
}

const DISABLED_MAPS : Record < Disabled, boolean> = {
    [Disabled.OFF] : false,
    [Disabled.ON] : true
}

export const Input = ({inputLabel, inputPlaceholder,helpText }: InputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{inputLabel}</label>
      <div className="mt-1">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={inputPlaceholder}
        >
        </input>
      </div>
      {
        !helpText? ( <p className="mt-2 text-sm text-gray-500" id="email-description">We'll only use this for spam.</p> ): null
      }

    </div>
  );
};

Input.defaultProps = {
  helpText: HelpText.OFF,
  validationError: ValidationError.OFF,
  disabled: Disabled.OFF
  };
  Input.helpText = HelpText
  Input.validationError = ValidationError
  Input.disabled = Disabled
  
  console.log("Input", Input);