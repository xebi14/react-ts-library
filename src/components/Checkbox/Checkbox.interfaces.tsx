import { CheckboxDetails } from "./CheckboxDetails.interface"
import { Variant } from "./Checkbox.enum"
import { ChangeEvent, ChangeEventHandler } from "react"

export interface CheckboxProps {
  label: string
  description: string
  value: string
  name: string
  id: string
}
