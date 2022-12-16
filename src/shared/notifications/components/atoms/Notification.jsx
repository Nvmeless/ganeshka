import { Alert, Snackbar } from "@mui/material"

export const Notification = ({ isError, message, close }) => {
  const severity = isError ? 'error' : 'success'

  const handleClose = (event, reason) => {
    if (reason === 'clickaway')  return;

    close();
  };

  return (
    <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}
