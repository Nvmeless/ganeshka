import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';

export const TransferListContent = ({ items, handleToggle, checked, defaultItem }) => {
  return (
    <List
      sx={{
        width: 200,
        height: 230,
        bgcolor: 'background.paper',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      dense
      component="div"
      role="list"
    >
      {items.map((value) => {
        const labelId = `transfer-list-all-item-${value}-label`

        if (defaultItem) return defaultItem

        return (
          <ListItem
            key={value}
            role="listitem"
            button
            onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{
                  'aria-labelledby': labelId,
                }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value} />
          </ListItem>
        )
      })}
      <ListItem />
    </List>
  )
}
