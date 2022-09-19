import { AvatarProps } from "./Avatar.interfaces"

export const Avatar = ({size, status}: AvatarProps) => {
    return(
        <span className="relative inline-block m-3.5">
        <img
          className={`${size} rounded-full`}
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <span className="absolute top-0 right-0 block h-1.5 w-1.5 rounded-full bg-gray-300 ring-2 ring-white" />
      </span>
    )
}