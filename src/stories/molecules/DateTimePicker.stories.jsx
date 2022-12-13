import React, { useState } from "react";
import DateTimeField from "../../components/atoms/DateTimeField/DateTimeField";

import { DateTimePicker } from "../../components/molecules/DateTimePicker/DateTimePicker";

export default {
  title: "Molecules/DateTimePicker",
  component: DateTimePicker,
  argType: {
    backgroundColor: { control: "color" },
    focusColor : {control :"color"},
    color: { control: "color" },
  },
};

const Template = (args) => {
  const [dateTime, setDateTime] = useState("");

  return (
    <>
      <p>Date : {dateTime || ""}</p>
      <DateTimePicker
        {...args}
        value={dateTime}
        renderInput={(params) => <DateTimeField {...params} />}
        onChange={setDateTime}
      />
    </>
  )
}


export const Default = Template.bind({});
Default.args = {
  backgroundColor: '#ffffff',
  color: '#000000',
  focusColor : "#ffffff",
  label: "Date Time Picker",
  loading: false,
};

