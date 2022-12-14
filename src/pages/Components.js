import { Button } from "../components/Button/Button"
import { Badge } from "../components/Badge"
import { Avatar } from "../components/Avatar"
import { Input } from "../components/Input"
import { Toggle } from "../components/Toggle"
import { Alert } from "../components/Alert"
import { Checkbox } from "../components/Checkbox"
import { SelectMenu } from "../components/SelectMenu"
import { Radio } from "../components/Radio"
import { Textarea } from "../components/Textarea"

function Components() {
  return (
    <div className="App">
      <Button
        children="Secondary Button"
        variant={Button.variant.SECONDARY}
        size={Button.size.SMALL}
        loader={Button.loader.SHOW}
      />
      <Button
        children="Secondary Button"
        variant={Button.variant.SECONDARY}
        size={Button.size.MEDUIM}
      />
      <Button
        children="Secondary Button"
        variant={Button.variant.SECONDARY}
        size={Button.size.LARGE}
      />
      <br></br>
      <Button
        children="Primary Button"
        variant={Button.variant.PRIMARY}
        size={Button.size.MEDUIM}
        loader={Button.loader.SHOW}
      />
      <Button
        children="Primary Button"
        variant={Button.variant.PRIMARY}
        size={Button.size.SMALL}
      />
      <br></br>

      <Badge
        children="Green Badge"
        size={Badge.size.SMALL}
        color={Badge.color.GREEN}
      />
      <Badge
        children="Green Badge"
        size={Badge.size.LARGE}
        color={Badge.color.GREEN}
      />
      <Badge
        children="Blue Badge"
        size={Badge.size.SMALL}
        color={Badge.color.BLUE}
      />
      <Badge
        children="Blue Badge"
        size={Badge.size.LARGE}
        color={Badge.color.BLUE}
      />

      <br></br>
      <br></br>
      <Avatar size={Avatar.size.SMALL} status={Avatar.status.INVISIBLE} />
      <Avatar size={Avatar.size.MEDIUM} status={Avatar.status.INVISIBLE} />
      <Avatar size={Avatar.size.LARGE} status={Avatar.status.INVISIBLE} />
      <br></br>
      <Avatar size={Avatar.size.SMALL} status={Avatar.status.OFFLINE} />
      <Avatar size={Avatar.size.MEDIUM} status={Avatar.status.OFFLINE} />
      <Avatar size={Avatar.size.LARGE} status={Avatar.status.OFFLINE} />
      <br></br>
      <Avatar size={Avatar.size.SMALL} status={Avatar.status.ONLINE} />
      <Avatar size={Avatar.size.MEDIUM} status={Avatar.status.ONLINE} />
      <Avatar size={Avatar.size.LARGE} status={Avatar.status.ONLINE} />
      <br></br>
      <div className="w-80 m-8">
        <Input
          inputLabel="Email"
          inputPlaceholder="Enter Your Email Here"
          inputType={Input.inputType.NUMBER}
        />
        <br></br>
        <Input
          inputLabel="Email"
          inputPlaceholder="Enter Your Email Here"
          helperText="This is helper Text"
        />
        <br></br>
        <Input
          inputLabel="Email"
          inputPlaceholder="Enter Your Email Here"
          error="This is Error Text"
        />
        <br></br>
        <Input
          inputLabel="Email"
          inputPlaceholder="Enter Your Email Here"
          disabled
        />
      </div>
      <br></br>
      <Toggle variant={Toggle.variant.SimpleToggle} />
      <br></br>
      <br></br>
      <Toggle variant={Toggle.variant.ShortToggle} />
      <br></br>
      <br></br>
      <Toggle variant={Toggle.variant.IconToggle} />
      <br></br>
      <br></br>
      <Alert
        listError={["first Item", "second", "3rd item"]}
        variant={Alert.variant.WITH_LIST}
      />
      <br></br>
      <Alert
        variant={Alert.variant.WITH_DESC}
        listError={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit metus vitae erat viverra, vitae mattis lorem gravida. Fusce eget vulputate arcu. Praesent vitae euismod urna. Sed eget laoreet turpis.",
        ]}
      />

      <br></br>
      <Checkbox
        listItems={[
          { heading: "Heading 1 ", description: " Detail 1" },
          { heading: " Heading 2 ", description: " Details 2" },
          { heading: " Heading 3 ", description: " Details 3" },
        ]}
      />
      <br></br>
      <Checkbox
        listItems={[
          { heading: "Heading 1 ", description: " Detail 1" },
          { heading: " Heading 2 ", description: " Details 2" },
          { heading: " Heading 3 ", description: " Details 3" },
        ]}
        variant={Checkbox.variant.BOX_ON_RIGHT}
      />
      <br></br>
      <Checkbox
        listItems={[
          { heading: "Heading 1 ", description: " Detail 1" },
          { heading: " Heading 2 ", description: " Details 2" },
          { heading: " Heading 3 ", description: " Details 3" },
        ]}
        variant={Checkbox.variant.INLINE_DESC}
      />
      <br></br>
      <br></br>
      <SelectMenu
        menuLable="Location"
        menuItems={[
          { id: 1, item: "United States" },
          { id: 2, item: "Canada" },
          { id: 3, item: "United Kingdom" },
          { id: 4, item: "Australia" },
        ]}
      />
      <br></br>
      <br></br>
      <SelectMenu
        menuLable="Assigned to"
        menuItems={[
          { id: 1, item: "Wade Cooper" },
          { id: 2, item: "Arlene Mccoy" },
          { id: 3, item: "Devon Webb" },
          { id: 4, item: "Tom Cook" },
        ]}
        variant={SelectMenu.variant.SIMPLE_CUSTOM}
      />
      <br></br>
      <br></br>
      <SelectMenu
        menuLable="Assigned to"
        menuItems={[
          { id: 1, item: "Wade Cooper" },
          { id: 2, item: "Arlene Mccoy" },
          { id: 3, item: "Devon Webb" },
          { id: 4, item: "Tom Cook" },
        ]}
        variant={SelectMenu.variant.CHECK_ON_LEFT}
      />
      <br></br>
      <br></br>
      <Radio
        radioItems={[
          { id: 1, heading: "Heading 1 ", description: " Detail 1" },
          { id: 2, heading: " Heading 2 ", description: " Details 2" },
        ]}
        variant={Radio.variant.LIST_DESC}
      />
      <br></br>
      <Radio
        radioItems={[
          { id: 1, heading: "Heading 1 ", description: " Detail 1" },
          { id: 2, heading: " Heading 2 ", description: " Details 2" },
        ]}
        variant={Radio.variant.LIST_INLINE_DESC}
      />
      <br></br>
      <Radio
        radioItems={[
          { id: 1, heading: "Heading 1 ", description: " Detail 1" },
          { id: 2, heading: " Heading 2 ", description: " Details 2" },
        ]}
        variant={Radio.variant.RADIO_ON_RIGHT}
      />
      <br></br>
      <Radio
        radioItems={[
          { id: 1, heading: "Heading 1 ", description: " Detail 1" },
          { id: 2, heading: " Heading 2 ", description: " Details 2" },
        ]}
      />
      <br></br>
      <br></br>
      <Textarea title="Add your comment here" />
    </div>
  )
}

export default Components
