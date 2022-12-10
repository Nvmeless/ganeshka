import React from "react";
import { AppBar } from "../../components/molecule/AppBar/AppBar";
import { getTheme } from "../../themes/default.js";

export default {
  title: "Molecule/AppBar",
  component: AppBar,
  argType: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <AppBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: getTheme().primary,
  position: "",
  enableColorOnDark: true,
  children: "Primary",
};
export const Secondary = Template.bind({});
Secondary.args = {
  color: getTheme().secondary,
  position: "static",
  enableColorOnDark: false,
  children: "Secondary",
};
