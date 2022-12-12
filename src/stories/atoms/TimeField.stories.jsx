import React, { useState } from "react";
import TimeField from "../../components/atoms/TimeField/TimeField";

export default {
  title: "Atoms/TimeField",
  component: TimeField,
  argType: {
    color: { control: "color" },
    label: { control: "text" },
  },
};

const Template = (args) => {
  const [time, setTime] = useState("");
  return <TimeField value={time} onChange={(value) => setTime(value)} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  color: "#000000",
  label: "Time Field",
  disabled : false
};
