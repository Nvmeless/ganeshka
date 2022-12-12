import React from "react";

import { TimePicker } from "../../components/atoms/TimePicker/TimePicker";

export default {
  title: "Atoms/TimePicker",
  component: TimePicker,
  argType: {
    backgroundColor: { control: "color" },
    controlsColor: { control: "color" },
  },
};

const Template = (args) => <TimePicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  loading: false,
};

export const isLoading = Template.bind({});
isLoading.args = {
  loading: true,
};
