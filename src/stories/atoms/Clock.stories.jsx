import React, { useState } from "react";
import Clock from "../../components/atoms/Clock/Clock";

export default {
  title: "Atoms/Clock",
  component: Clock,
  argType: {
    backgroundColor: { control: "color" },
    focusColor: { control: "color" },
    color: { control: "color" },
  },
};

const Template = (args) => {
  const [time, setTime] = useState("");
  return (
    <>
      <p>Time : {time || ""}</p>
      <Clock {...args} value={time} onChange={setTime} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "#ffffff",
  focusColor: "#ffffff",
  color: "#000000",
  clickChangePage : false
};
