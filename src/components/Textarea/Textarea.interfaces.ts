import { ChangeEvent } from "react"
import { Variant } from "./Textarea.enum"
export interface TextareaProps {
  variant: Variant
  title?: string
  placeholderText?: string
  value: string
  name: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}
