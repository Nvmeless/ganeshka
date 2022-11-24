import { BasicTransferList } from '../../../components/TransferList/BasicTransferList'

export default {
    title: 'Inputs/Basic Transfer List',
    component: BasicTransferList,
    argType: {
        backgroundColor: { control: 'color' }
    },
    parameters: {
        layout: 'centered',
    },
}

const Template = () => <BasicTransferList />

export const Default = Template.bind({})
