import { ChangeEvent, ReactNode } from "react"
import { InputTypes } from "./Input.enum"

export interface InputProps {
  inputLabel?: string
  inputPlaceholder?: string
  helperText?: string
  error?: string
  disabled?: boolean
  inputType: InputTypes
  value: string
  name: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  // ValidationError?: ValidationError,
  // disabled?: Disabled

  // state: InputStates
}
