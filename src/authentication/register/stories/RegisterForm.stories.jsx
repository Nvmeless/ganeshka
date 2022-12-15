import { RegisterForm } from "../components/RegisterForm"

export default {
    title:"authentication/register/RegisterForm",
    component: RegisterForm,
    parameters: {
      layout: 'centered',
    },
}

const Template = (args) => <RegisterForm {...args}/>

export const Default = Template.bind({});
Default.args = {}

const SubmittedFormTemplate = (args) => <RegisterForm {...args}/>
SubmittedFormTemplate.args = {}
