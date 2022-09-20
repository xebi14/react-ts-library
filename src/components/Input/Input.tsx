import { InputProps } from "./Input.interfaces";
import { InputStates } from "./Input.enum";

export const Input = ({inputLabel, inputPlaceholder }: InputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{inputLabel}</label>
      <div className="mt-1">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={inputPlaceholder}
        >
        </input>
      </div>
    </div>
  );
};
