import { ChangeEvent, useState } from "react";
import { ToggleProps } from "./Toggle.interfaces";



export const Toggle = ({toggleSwitch} : ToggleProps) => {
    const [switchState, setSwitchState] =  useState(false);

    const switchToggle = (e: boolean | void | undefined) =>{
        console.log("Toggled");
        setSwitchState(!switchState);
    }

  return (
    <div>
        {/* <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" --> */}
      <button
        type="button"
        className={`${switchState? "bg-indigo-600":"bg-gray-200"} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        role="switch"
        onClick={() => switchToggle(toggleSwitch)}
      >
        <span className="sr-only">Use setting</span>
        {/* <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" --> */}
        <span aria-hidden="true" className={`${ switchState ? "translate-x-5" : "translate-x-0"} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}></span>
      </button>
    </div>
  )
}
