import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export const TransferListButtons = ({ handleAllRight, left, handleCheckedRight, leftChecked, handleCheckedLeft, rightChecked, handleAllLeft, right }) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Button
        sx={{ my: 0.5 }}
        variant="outlined"
        size="small"
        onClick={handleAllRight}
        disabled={left.length === 0}
        aria-label="move all right"
      >
        ≫
      </Button>
      <Button
        sx={{ my: 0.5 }}
        variant="outlined"
        size="small"
        onClick={handleCheckedRight}
        disabled={leftChecked.length === 0}
        aria-label="move selected right"
      >
        &gt;
      </Button>
      <Button
        sx={{ my: 0.5 }}
        variant="outlined"
        size="small"
        onClick={handleCheckedLeft}
        disabled={rightChecked.length === 0}
        aria-label="move selected left"
      >
        &lt;
      </Button>
      <Button
        sx={{ my: 0.5 }}
        variant="outlined"
        size="small"
        onClick={handleAllLeft}
        disabled={right.length === 0}
        aria-label="move all left"
      >
        ≪
      </Button>
    </Grid>
  )
}
