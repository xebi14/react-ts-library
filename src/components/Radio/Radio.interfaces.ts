import { RadioDetails } from "./RadioDetail.interfaces"
import { Variant } from "./Radio.enum"
export interface RadioProps {
  radioItems: RadioDetails[]
  variant?: Variant
}
