import { ReactNode } from "react";
import {Variant, Size, Loader} from './Button.enum'


export interface ButtonProps  {
    // btnSize?: string,
    // variant?: string,
    variant: Variant;
    children?: ReactNode;
    size: Size;
    loader: Loader
}

