import { CheckboxDetails } from "./CheckboxDetails.interface"
import { Variant } from "./Checkbox.enum"

export interface CheckboxProps {
  listItems: CheckboxDetails[]
  variant?: Variant
}
