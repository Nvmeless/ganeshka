import React, { useState } from "react";
import DateTimeField from "../../components/atoms/DateTimeField/DateTimeField";

export default {
  title: "Atoms/DateTimeField",
  component: DateTimeField,
  argType: {
    color: { control: "color" },
    label: { control: "text" },
  },
};

const Template = (args) => {
  const [dateTime, setDateTime] = useState("");
  return <DateTimeField value={dateTime} onChange={(value) => setDateTime(value)} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  color: "#000000",
  label: "Time Field",
};
