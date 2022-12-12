import React, { useState } from 'react';
import DateField from '../../components/atoms/DateField/DateField';
import DateRangePicker from '../../components/molecules/DateRangePicker/DateRangePicker';

export default {
    title:"Molecules/DateRangePicker",
    component: DateRangePicker,
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
  const [dates, setDates] = useState([undefined, undefined]);

  return (
    <>
      <p>Date : {dates ? dates.toString() : 'undefined'}</p>
      <DateRangePicker
        {...args}
        value={dates}
        renderInput={(start, end) => (
          <>
            <DateField label="Start" {...start} />
            <span>to</span>
            <DateField label="End" {...end} />
          </>
        )}
        onChange={setDates}
      />
    </>
  )
}

export const Default = Template.bind({});
Default.args = {
  label: 'Choose date',
}