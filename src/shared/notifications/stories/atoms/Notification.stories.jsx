import { Notification } from "../../components/atoms/Notification"

export default {
    title:"notifications/notification",
    component: Notification,
    parameters: {
      layout: 'centered',
    },
}

const Template = (args) => <Notification {...args}/>

export const WithSuccess = Template.bind({});
WithSuccess.args = {
  message: 'example notification success'
}

export const WithError = Template.bind({});
WithError.args = {
  message: 'example notification error',
  isError: true
}
