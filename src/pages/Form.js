import { Button } from "../components/Button/Button"
import { Radio } from "../components/Radio"
import { Input } from "../components/Input"
import { Checkbox } from "../components/Checkbox/index"
import { SelectMenu } from "../components/SelectMenu"
import { Textarea } from "../components/Textarea"
import { useForm, Controller } from "react-hook-form"

export const Form = () => {
  const {
    control: formControl,
    getValues: getFormValues,
    setValue: setFormValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      about: "",
      firstName: "",
      lastName: "",
      email: "",
      country: {},
      checkBox: true,
      comments: "",
      candidates: "",
      offers: "",
    },
  })

  return (
    <div>
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Profile
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                    workcation.com/
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <Controller
                  name="about"
                  control={formControl}
                  render={({ field }) => {
                    let { onChange, value, name } = field
                    return (
                      <Textarea
                        title="About"
                        onChange={onChange}
                        value={value}
                        name={name}
                      />
                    )
                  }}
                />
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Photo
                </label>
                <div className="mt-1 flex items-center">
                  <span className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <button
                    type="button"
                    className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cover photo
                </label>
                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Controller
                  name="firstName"
                  control={formControl}
                  render={({ field }) => {
                    let { onChange, value, name } = field
                    return (
                      <Input
                        inputLabel="First Name"
                        inputPlaceholder="John"
                        onChange={onChange}
                        value={value}
                        name={name}
                      />
                    )
                  }}
                />
              </div>

              <div className="sm:col-span-3">
                <Controller
                  name="lastName"
                  control={formControl}
                  render={({ field }) => {
                    let { onChange, value, name } = field
                    return (
                      <Input
                        inputLabel="Last Name"
                        inputPlaceholder="Wick"
                        onChange={onChange}
                        value={value}
                        name={name}
                      />
                    )
                  }}
                />
              </div>

              <div className="sm:col-span-4">
                <Controller
                  name="email"
                  control={formControl}
                  render={({ field }) => {
                    let { onChange, value, name } = field
                    return (
                      <Input
                        inputLabel="Email Address"
                        inputPlaceholder="johndoe@website.com"
                        onChange={onChange}
                        value={value}
                        name={name}
                        inputType={Input.inputType.EMAIL}
                      />
                    )
                  }}
                />
              </div>

              <div className="sm:col-span-3">
                <Controller
                  name="country"
                  control={formControl}
                  render={({ field }) => {
                    let { onChange, value, name } = field
                    return (
                      <SelectMenu
                        variant={SelectMenu.variant.SIMPLE_CUSTOM}
                        menuLable="Country"
                        onChange={onChange}
                        value={value}
                        name={name}
                        menuItems={[
                          { id: 1, item: "United States" },
                          { id: 2, item: "Canada" },
                          { id: 3, item: "United Kingdom" },
                          { id: 4, item: "Australia" },
                        ]}
                      />
                    )
                  }}
                />
              </div>

              <div className="sm:col-span-6">
                <Input
                  inputLabel="Street Address"
                  inputPlaceholder=" Your Address Here"
                />
              </div>

              <div className="sm:col-span-2">
                <Input inputLabel="City" inputPlaceholder="City" />
              </div>

              <div className="sm:col-span-2">
                <Input inputLabel="State / Province" inputPlaceholder="State" />
              </div>

              <div className="sm:col-span-2">
                <Input
                  inputLabel="ZIP / Postal Code"
                  inputPlaceholder="Postal code"
                />
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Notifications
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                We'll always let you know about important changes, but you pick
                what else you want to hear about.
              </p>
            </div>
            <div className="mt-6">
              <fieldset>
                <legend className="sr-only">By Email</legend>
                <div
                  className="text-base font-medium text-gray-900"
                  aria-hidden="true"
                >
                  By Email
                </div>
                <div className="mt-4 space-y-4">
                  {["comments", "candidates", "offers"].map((name) => (
                    <Controller
                      key={name}
                      name={name}
                      as={
                        <FormControlLabel
                          control={<Checkbox value={name} name={name} />}
                          label={name}
                        />
                      }
                      valueName="checked"
                      type="checkbox"
                      onChange={([e]) => {
                        return e.target.checked ? e.target.value : ""
                      }}
                      control={control}
                    />
                  ))}
                  {/* <Controller
                    name="checkBox"
                    control={formControl}
                    render={({ field }) => {
                      let { onChange, value, name } = field
                      return (
                        <Checkbox
                          onChange={onChange}
                          value={value}
                          name={name}
                          listItems={[
                            {
                              heading: "Comments",
                              description:
                                "Get notified when someones posts a comment on a posting.",
                            },
                            {
                              heading: "Candidates",
                              description:
                                "Get notified when a candidate applies for a job.",
                            },
                            {
                              heading: " Offers",
                              description:
                                "Get notified when a candidate accepts or rejects an offer.",
                            },
                          ]}
                          variant={Checkbox.variant.WITH_DESC}
                        />
                      )
                    }}
                  /> */}
                </div>
              </fieldset>
              <fieldset className="mt-6">
                <legend className="contents text-base font-medium text-gray-900">
                  Push Notifications
                </legend>
                <p className="text-sm text-gray-500">
                  These are delivered via SMS to your mobile phone.
                </p>
                <div className="mt-4 space-y-4">
                  <Radio
                    radioItems={[
                      { id: 1, heading: "Everything " },
                      { id: 2, heading: " Same as email " },
                      { id: 3, heading: " No push notifications " },
                    ]}
                    variant={Radio.variant.LIST_DESC}
                  />
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <Button
              children="Cancel"
              variant={Button.variant.SECONDARY}
              size={Button.size.SMALL}
            />
            <Button
              children="Save"
              variant={Button.variant.PRIMARY}
              size={Button.size.SMALL}
            />
          </div>
        </div>
      </form>
    </div>
  )
}
