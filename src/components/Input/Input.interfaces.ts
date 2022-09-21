import { ReactNode } from "react";
// import { HelpText, ValidationError, Disabled } from "./Input.enum";

export interface InputProps  {
    inputLabel?: string,
    inputPlaceholder?: string,
    helperText?: string,
    error?: string,
    disabled? : boolean
    // ValidationError?: ValidationError,
    // disabled?: Disabled

   // state: InputStates
}

