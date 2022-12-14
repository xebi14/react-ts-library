import { ChangeEvent, useState } from "react"
import { Variant } from "./Toggle.enum"
import { ToggleProps } from "./Toggle.interfaces"

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.ShortToggle]: "ShortToggle",
  [Variant.SimpleToggle]: "SimpleToggle",
  [Variant.IconToggle]: "IconToggle",
}

export const Toggle = ({ variant = Variant.ShortToggle }: ToggleProps) => {
  const [switchState, setSwitchState] = useState(false)

  const switchToggle = (e: boolean | void | undefined) => {
    console.log("Toggled")
    setSwitchState(!switchState)
  }

  switch (VARIANT_MAPS[variant]) {
    case "SimpleToggle":
      return (
        <button
          type="button"
          className={`${switchState ? "bg-indigo-600" : "bg-gray-200"} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
          role="switch"
          onClick={() => switchToggle()}
        >
          <span className="sr-only">Use setting</span>
          <span aria-hidden="true" className={`${switchState ? "translate-x-5" : "translate-x-0"} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}></span>
        </button>
      )
    case "ShortToggle":
      return (
        <button type="button" className={`group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`} role="switch" aria-checked="false" onClick={() => switchToggle()}>
          <span className="sr-only">Use setting</span>
          <span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md bg-white"></span>
          <span aria-hidden="true" className={`${switchState ? "bg-indigo-600" : "bg-gray-200"}  pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out`}></span>
          <span aria-hidden="true" className={`${switchState ? "translate-x-5" : "translate-x-0"} pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out`}></span>
        </button>
      )

    case "IconToggle":
      return (
        <button
          type="button"
          className={` ${switchState ? "bg-indigo-600" : "bg-gray-200"} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
          role="switch"
          aria-checked="false"
          onClick={() => switchToggle()}
        >
          <span className="sr-only">Use setting</span>
          <span className={`${switchState ? "translate-x-5" : "translate-x-0"} pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}>
            <span className={`${switchState ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"}  absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`} aria-hidden="true">
              <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span className={`${switchState ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"}  absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`} aria-hidden="true">
              <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
              </svg>
            </span>
          </span>
        </button>
      )
    default:
      return (
        <button
          type="button"
          className={`${switchState ? "bg-indigo-600" : "bg-gray-200"} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
          role="switch"
          onClick={() => switchToggle()}
        >
          <span className="sr-only">Use setting</span>
          <span aria-hidden="true" className={`${switchState ? "translate-x-5" : "translate-x-0"} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}></span>
        </button>
      )
  }
  // return (
  //   <div>
  //     {/* <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" --> */}
  //     <button
  //       type="button"
  //       className={`${switchState ? "bg-indigo-600" : "bg-gray-200"} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
  //       role="switch"
  //       onClick={() => switchToggle()}
  //     >
  //       <span className="sr-only">Use setting</span>
  //       {/* <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" --> */}
  //       <span aria-hidden="true" className={`${switchState ? "translate-x-5" : "translate-x-0"} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}></span>
  //     </button>

  //     {/* Structure for ShortToggle */}

  //     <button type="button" className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" role="switch" aria-checked="false">
  //       <span className="sr-only">Use setting</span>
  //       <span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md bg-white"></span>
  //       {/* <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" --> */}
  //       <span aria-hidden="true" className="bg-gray-200 pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"></span>
  //       {/* <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" --> */}
  //       <span aria-hidden="true" className="translate-x-0 pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out"></span>
  //     </button>

  //     {/* Structure for Toggle with Icon */}
  //     {/* <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" --> */}
  //     <button
  //       type="button"
  //       className="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  //       role="switch"
  //       aria-checked="false"
  //     >
  //       <span className="sr-only">Use setting</span>
  //       {/* <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" --> */}
  //       <span className="translate-x-0 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
  //         {/* <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" --> */}
  //         <span className="opacity-100 ease-in duration-200 absolute inset-0 flex h-full w-full items-center justify-center transition-opacity" aria-hidden="true">
  //           <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
  //             <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  //           </svg>
  //         </span>
  //         {/* <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" --> */}
  //         <span className="opacity-0 ease-out duration-100 absolute inset-0 flex h-full w-full items-center justify-center transition-opacity" aria-hidden="true">
  //           <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
  //             <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
  //           </svg>
  //         </span>
  //       </span>
  //     </button>
  //   </div>
  // )
}

Toggle.defaultProps = {
  variant: Variant.SimpleToggle,
}

Toggle.variant = Variant

console.log("Toggle", Toggle)
