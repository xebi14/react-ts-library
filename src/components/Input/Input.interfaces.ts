import { ReactNode } from "react";
import { HelpText, ValidationError, Disabled } from "./Input.enum";

export interface InputProps  {
    inputLabel?: string,
    inputPlaceholder?: string,
    helpText?: HelpText,
    ValidationError?: ValidationError,
    disabled?: Disabled

   // state: InputStates
}

