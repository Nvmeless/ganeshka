import React, { useState } from 'react';
import Calendar from '../../components/atoms/Calendar/Calendar';

export default {
    title:"Atoms/Calendar",
    component: Calendar,
    argType: {
      backgroundColor: {control: 'color'},
      color: {control: 'color'},
      placeholderColor: {control: 'color'},
    },
}

const Template = (args) => {
  const [date, setDate] = useState(undefined);
  return (
    <>
      <p>Date : {date ? date.toString() : 'undefined'}</p>
      <Calendar {...args} value={date} onChange={setDate} />
    </>
  )
}

export const Default = Template.bind({});
Default.args = {
  value: new Date(),
  backgroundColor: '#ffffff',
  placeholderColor: '#808080',
  color: '#000000',
  label: 'Date Field',
  displayIcon: true,
  open: true,
}  