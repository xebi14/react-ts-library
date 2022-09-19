import { AvatarProps } from "./Avatar.interfaces"
import {Size, Status} from './Avatar.enum';

const SIZE_MAPS: Record <Size, string> = {
  [Size.SMALL]: 'h-6 w-6',
  [Size.MEDIUM]: 'h-8 w-8',
  [Size.LARGE]: 'h-10 w-10'
}

const STATUS_MAPS: Record <Status, string> ={
  [Status.INVISIBLE]: 'bg-gray-300',
  [Status.OFFLINE]: 'bg-red-400',
  [Status.ONLINE]: 'bg-green-400'
}


export const Avatar = ({size, status}: AvatarProps) => {
    return(
        <span className="relative inline-block m-3.5">
        <img
          className={`${SIZE_MAPS[size]} rounded-full`}
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <span className={`absolute top-0 right-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white ${STATUS_MAPS[status]}`} />
      </span>
    )
}

Avatar.defaultProps = {
  size: Size.SMALL,
  status: Status.OFFLINE
};
Avatar.size = Size;
Avatar.status = Status;

console.log("Avatar", Avatar);