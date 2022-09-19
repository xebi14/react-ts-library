import { BadgeProps } from "./Badge.interfaces"

export const Badge = ({bgColor, label, size}:BadgeProps) => {
    return(
        <span className={`${bgColor} ${size} inline-flex items-center rounded-full  m-3.5`}>
        {label}
      </span>
    )
}