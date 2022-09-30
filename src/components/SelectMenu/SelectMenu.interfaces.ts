import { Variant } from "./SelectMenu.enum"
import { SelectMenuItems } from "./SelectMenuItems.interfaces"

export interface SelectMenuProps {
  menuLable: string
  menuItems: SelectMenuItems[]
  variant?: Variant
  value: string
  onChange: (value: string) => void
}
