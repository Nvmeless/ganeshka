import React from 'react';
import DateField from '../../components/atoms/DateField/DateField';

export default {
    title:"Atoms/DateField",
    component: DateField,
    argType: {
      value: {control: 'date'},
      backgroundColor: {control: 'color'},
      color: {control: 'color'},
      placeholderColor: {control: 'color'},
      label: {control: 'text'},
      displayIcon: {control: 'boolean'},
    },
}

const Template = (args) => <DateField {...args}/>

export const WithIcon = Template.bind({});
WithIcon.args = {
  value: new Date(),
  backgroundColor: '#ffffff',
  placeholderColor: '#808080',
  color: '#000000',
  label: 'Date Field',
  displayIcon: true,
}  
export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  value: new Date(),
  backgroundColor: '#ffffff',
  placeholderColor: '#808080',
  color: '#000000',
  label: 'Date Field',
  displayIcon: false,
}