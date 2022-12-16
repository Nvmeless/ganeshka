import { Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useInputRules } from '../../../shared/form/inputs/hooks/useInputRules'
import { TextField } from '../../../shared/form/inputs/components/TextField'

export const LoginForm = ({ login }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { emailRules } = useInputRules()

  return (
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit((form) => login(form))} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField form={{ errors, register }} id="email" label="Email" rules={emailRules} />
        <TextField type="password" form={{ errors, register }} id="password" label="Mot de passe" />
        <Button type="submit" variant="contained" style={{ margin: 20 }}>Se connecter</Button>
      </form>
    </Box>
  )
}
