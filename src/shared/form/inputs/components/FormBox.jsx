import { Box } from "@mui/material"

export const FormBox = ({ children, title, onSubmit }) => {
  return (
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%' }}>
      <h1>{title}</h1>
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {children}
      </form>
    </Box>
  )
}
