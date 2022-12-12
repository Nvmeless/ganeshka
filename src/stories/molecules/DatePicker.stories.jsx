import React, { useState } from 'react';
import DateField from '../../components/atoms/DateField/DateField';
import DatePicker from '../../components/molecules/DatePicker/DatePicker';

export default {
    title:"Molecules/DatePicker",
    component: DatePicker,
    argType: {
      backgroundColor: {control: 'color'},
      color: {control: 'color'},
      placeholderColor: {control: 'color'},
      label: {control: 'text'},
      displayIcon: {control: 'boolean'},
      value: { control: false }
    },
}

const Template = (args) => {
  const [date, setDate] = useState(undefined);

  return (
    <>
      <p>Date : {date ? date.toString() : 'undefined'}</p>
      <DatePicker
        {...args}
        value={date}
        renderInput={(params) => <DateField {...params} />}
        onChange={setDate}
      />
    </>
  )
}

export const Default = Template.bind({});
Default.args = {
  label: 'Choose date',
}