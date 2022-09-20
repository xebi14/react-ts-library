import { ButtonProps } from "./Button.interfaces";
import { Variant, Size, Loader } from "./Button.enum";

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.PRIMARY]:
    "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-white",
  [Variant.SECONDARY]:
    "bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500 text-indigo-700",
};

const SIZE_MAPS: Record<Size, string> = {
  [Size.SMALL]: "px-4 py-2 text-sm",
  [Size.MEDUIM]: "px-4 py-2 text-base",
  [Size.LARGE]: "px-6 py-3 text-base",
};

const LOADER_MAPS: Record<Loader, Boolean> = {
  [Loader.HIDE]: false,
  [Loader.SHOW]: true,
};
export const Button = ({ children, variant, size, loader }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center rounded-md border border-transparent font-medium  shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2 m-3.5 ${VARIANT_MAPS[variant]} ${SIZE_MAPS[size]}`}
    >
      {loader ? (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
      ) : null}
      {!loader ? children : "  Loading"}
    </button>
  );
};

Button.defaultProps = {
  variant: Variant.PRIMARY,
  size: Size.SMALL,
  loader: Loader.HIDE,
};
Button.variant = Variant;
Button.size = Size;
Button.loader = Loader;

console.log("Button", Button);
