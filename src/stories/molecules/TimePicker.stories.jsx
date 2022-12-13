import React, { useState } from "react";
import TimeField from "../../components/atoms/TimeField/TimeField";

import { TimePicker } from "../../components/molecules/TimePicker/TimePicker";

export default {
  title: "Molecules/TimePicker",
  component: TimePicker,
  argType: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

const Template = (args) => {
  const [time, setTime] = useState("");

  return (
    <>
      <p>Time : {time || ""}</p>
      <TimePicker
        {...args}
        value={time}
        renderInput={(params) => <TimeField {...params} />}
        onChange={setTime}
      />
    </>
  )
}


export const Default = Template.bind({});
Default.args = {
  backgroundColor: '#ffffff',
  label: "Time Picker",
};

