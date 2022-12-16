import {Appbar} from '../../shared/components/molecules/Appbar/Appbar';

export default {
    title:"Atoms/Appbar",
    component: Appbar,
}
const Template = (args) => <Appbar {...args}/>
export const Professor = Template.bind({});
Professor.args = {
    role: "professor"
}

export const Student = Template.bind({});
Student.args = {
    role: "student"
}