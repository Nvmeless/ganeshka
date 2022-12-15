import { Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useInputRules } from '../../../shared/form/inputs/hooks/useInputRules'
import { PasswordsInputs } from '../../../shared/form/inputs/components/PasswordsInputs'
import { TextField } from '../../../shared/form/inputs/components/TextField'

export const RegisterForm = ({ handleRegister }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { emailRules } = useInputRules()

  return (
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%' }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit((form) => handleRegister(form))} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField form={{ errors, register }} id='firstName' label='Prénom' rules={{ required: 'Veuillez entrer votre prénom' }} />
        <TextField form={{ errors, register }} id="lastName" label="Nom" rules={{ required: 'Veuillez entrer votre nom de famille' }} />
        <TextField form={{ errors, register }} id="email" label="Email" rules={emailRules} />
        <PasswordsInputs form={{ errors, register }} />
        <Button type="submit" variant="contained" style={{ margin: 20 }}>Créer son compte</Button>
      </form>
    </Box>
  )
}
