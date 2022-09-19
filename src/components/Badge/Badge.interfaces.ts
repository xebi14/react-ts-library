import { ReactNode } from 'react'
import {Color, Size} from './Badge.enum'

export interface BadgeProps {
    color:Color,
    children:ReactNode,
    size:Size
}