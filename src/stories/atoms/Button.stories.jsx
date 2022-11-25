import React from "react";
import { Button } from "../../components/atoms/Button/Button"

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    disabled: {
      name: "Button disabled ?",
      control: "boolean",
      defaultValue: false
    },
    outlined: {
      name: "Button outlined ?",
      control: "boolean",
      defaultValue: false,
    },
    textual: {
      name: "Button textual only ?",
      control: "boolean",
      defaultValue: false
    },
    textColor: {
      name: "Text color",
      control: 'color'
    },
    backgroundColor: {
      name: "Background color",
      control: 'color',
      if: {
        arg: "outlined",
        truthy: false
      }
    },
    value: {
      name: "Value inside button",
      control: "text"
    }
  },
}

const Template = (args) => <Button {...args}/>

export const Classic = Template.bind({})
Classic.args = {}
