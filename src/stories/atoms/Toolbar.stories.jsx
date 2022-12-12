import React from "react";
import { ToolBar } from "../../components/atoms/ToolBar/ToolBar";

export default {
  title: "Atoms/ToolBar",
  component: ToolBar,
  argType: {},
};

const Template = (args) => <ToolBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "regular",
  disableGutters: false,
  component: "nav",
  children: "Primary",
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: "dense",
  disableGutters: false,
  component: "div",
  children: "Secondary",
};
