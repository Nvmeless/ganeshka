import {Appbar} from '../../shared/components/molecule/Appbar/Appbar';

export default {
    title:"Atoms/Appbar",
    component: Appbar,
}
const Template = (args) => <Appbar {...args}/>
export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    loading: false,
}  
export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    loading: false,
}  