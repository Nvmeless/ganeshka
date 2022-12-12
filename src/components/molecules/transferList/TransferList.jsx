import { useCheckList } from '../../../hooks/useCheckList'
import { Grid } from '@mui/material'
import { TransferListButtons } from '../../atoms/transferList/TransfertListButtons'
import { TransferListColumn } from '../../atoms/transferList/TransferListColumn'

export const TransferList = (props) => {
  const { checked, setChecked, left, setLeft, right, setRight, buttons, item, leftColumn, rightColumn } = props
  const checkList = useCheckList(setChecked, setLeft, setRight, checked, right, left)

  const leftChecked = checkList.leftChecked
  const rightChecked = checkList.rightChecked
  const handleAllLeft = props.handleAllLeft ?? checkList.handleAllLeft
  const handleAllRight = props.handleAllRight ?? checkList.handleAllRight
  const handleCheckedLeft = props.handleCheckedLeft ?? checkList.handleCheckedLeft
  const handleCheckedRight = props.handleCheckedRight ?? checkList.handleCheckedRight
  const handleToggleAll = props.handleToggleAll ?? checkList.handleToggleAll
  const numberOfChecked = props.numberOfChecked ?? checkList.numberOfChecked
  const handleToggle = props.handleToggle ?? checkList.handleToggle
  const leftColumnTitle = props.leftColumnTitle ?? 'Choices'
  const rightColumnTitle = props.rightColumnTitle ?? 'Chosen'

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>
        {leftColumn
          ? leftColumn
          : <TransferListColumn
            defaultItem={item}
            title={leftColumnTitle}
            items={left}
            handleToggleAll={handleToggleAll}
            numberOfChecked={numberOfChecked}
            handleToggle={handleToggle}
            checked={checked}
          />
        }
      </Grid>
      <Grid item>
        {buttons
          ? buttons
          : <TransferListButtons
            handleAllLeft={handleAllLeft}
            handleAllRight={handleAllRight}
            handleCheckedLeft={handleCheckedLeft}
            handleCheckedRight={handleCheckedRight}
            left={left}
            right={right}
            leftChecked={leftChecked}
            rightChecked={rightChecked}
          />
        }
      </Grid>
      <Grid item>
        {rightColumn
          ? rightColumn
          : <TransferListColumn
            title={rightColumnTitle}
            items={right}
            handleToggleAll={handleToggleAll}
            numberOfChecked={numberOfChecked}
            handleToggle={handleToggle}
            checked={checked}
          />
        }
      </Grid>
    </Grid>
  )
}
