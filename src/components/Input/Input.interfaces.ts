import { ReactNode } from "react";
 import { InputTypes } from "./Input.enum";

export interface InputProps  {
    inputLabel?: string,
    inputPlaceholder?: string,
    helperText?: string,
    error?: string,
    disabled? : boolean,
    inputType: InputTypes
    // ValidationError?: ValidationError,
    // disabled?: Disabled

   // state: InputStates
}

