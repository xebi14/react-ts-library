import { AlertProps } from "./Alert.interfaces"
import { Variant } from "./Alert.enum"
import { XCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/20/solid"

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.WITH_LIST]: "WithList",
  [Variant.WITH_DESC]: "WithDesc",
}

export const Alert = ({ listError, variant = Variant.WITH_LIST }: AlertProps) => {
  switch (VARIANT_MAPS[variant]) {
    case "WithList":
      return (
        <div>
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">There were {listError.length} errors with your submission</h3>
                <div className="mt-2 text-sm text-red-700">
                  <ul role="list" className="list-disc space-y-1 pl-5">
                    {listError.map((listItem) => (
                      <li>{listItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    case "WithDesc":
      return (
        <div>
          <div className="rounded-md bg-yellow-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  {listError.map((listItem) => (
                    <p>{listItem}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    default:
      return (
        <div>
          <div className="rounded-md bg-yellow-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  {listError.map((listItem) => (
                    <p>{listItem}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
  // return (
  //   <div>
  //     {/* Alert with list */}
  //     <div className="rounded-md bg-red-50 p-4">
  //       <div className="flex">
  //         <div className="flex-shrink-0">
  //           <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
  //         </div>
  //         <div className="ml-3">
  //           <h3 className="text-sm font-medium text-red-800">There were {listError.length} errors with your submission</h3>
  //           <div className="mt-2 text-sm text-red-700">
  //             <ul role="list" className="list-disc space-y-1 pl-5">
  //               {listError.map((listItem) => (
  //                 <li>{listItem}</li>
  //               ))}
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     {/* Alert with Desc */}
  //     <div className="rounded-md bg-yellow-50 p-4">
  //       <div className="flex">
  //         <div className="flex-shrink-0">
  //           <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
  //         </div>
  //         <div className="ml-3">
  //           <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
  //           <div className="mt-2 text-sm text-yellow-700">
  //             {listError.map((listItem) => (
  //               <p>{listItem}</p>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
}

Alert.defaultProps = {
  variant: Variant.WITH_DESC,
}

Alert.variant = Variant

console.log("Alert", Alert)
