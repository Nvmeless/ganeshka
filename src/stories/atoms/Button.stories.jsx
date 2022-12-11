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
    link: {
      name: "Button type link ?",
      control: "boolean",
      defaultValue: false,
      if: {
        arg: "upload",
        truthy: false
      }
    },
    linkObject: {
      name: "Link button to ...",
      control: "text",
      if: {
        arg: "link",
        truthy: true
      }
    },
    contained: {
      name: "Button contained ?",
      control: "boolean",
      defaultValue: false
    },
    textual: {
      name: "Button textual only ?",
      control: "boolean",
      defaultValue: false
    },
    size: {
      name: "Button size",
      control: "select",
      options: {
        "Small": "btn-sm",
        "Medium" : "",
        "Large" : "btn-lg"
      },
      defaultValue: ""
    },
    upload: {
      name: "Upload button ?",
      control: "boolean",
      defaultValue: false
    },
    uploadType: {
      name: "Upload file type",
      control: "select",
      options: [
        "*",
        "image/*"
      ],
      defaultValue: "*",
      if: {
        arg: "upload",
        truthy: true
      }
    },
    loading: {
      name: "Loading button ?",
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
    },

    handleClick: {
      action: "clicked"
    }
  },
}

const Template = (args) => <Button {...args}/>

export const Classic = Template.bind({})
Classic.args = {}
