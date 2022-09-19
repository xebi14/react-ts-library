import { BadgeProps } from "./Badge.interfaces"
import {Color, Size } from "./Badge.enum"

const COLOR_MAPS: Record <Color, string> = {
  [Color.GRAY]: 'bg-gray-100 text-gray-800',
  [Color.BLUE]: 'bg-blue-100 text-blue-800',
  [Color.PINK]: 'bg-pink-100 text-pink-800',
  [Color.GREEN]: 'bg-green-100 text-green-800'
}

const SIZE_MAPS: Record <Size, string> = {
  [Size.SMALL]: 'px-3 py-0.5 text-sm ',
  [Size.LARGE]: 'px-6 py-3 text-base'
}


export const Badge = ({color, children, size}:BadgeProps) => {
    return(
        <span className={`${COLOR_MAPS[color]} ${SIZE_MAPS[size]} font-medium inline-flex items-center rounded-full  m-3.5`}>
        {children}
      </span>
    )
}


Badge.defaultProps = {
  color: Color.BLUE,
  size: Size.SMALL,
};
Badge.color = Color;
Badge.size = Size;

console.log("Badge", Badge);