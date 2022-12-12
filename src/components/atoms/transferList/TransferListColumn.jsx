import { Divider, Card } from '@mui/material'
import { TransferListHeader } from './TransferListHeader'
import { TransferListContent } from './TransferListContent'

export const TransferListColumn = ({ defaultItem, title, items, handleToggleAll, numberOfChecked, handleToggle, checked }) => {
  return (
    <Card>
      <TransferListHeader handleToggleAll={handleToggleAll} numberOfChecked={numberOfChecked} items={items} title={title} />
      <Divider />
      <TransferListContent defaultItem={defaultItem} items={items} handleToggle={handleToggle} checked={checked} />
    </Card>
  )
}
