import { EnhancedTransferList } from '../../../components/TransferList/EnhancedTransferList'

export default {
    title: 'Inputs/Enhanced Transfer List',
    component: EnhancedTransferList,
    argType: {
        backgroundColor: { control: 'color' }
    },
    parameters: {
        layout: 'centered',
    },
}

const Template = () => <EnhancedTransferList />

export const Default = Template.bind({})
