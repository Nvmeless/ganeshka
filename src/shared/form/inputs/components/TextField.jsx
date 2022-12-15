import MuiTextField from '@mui/material/TextField'
import { useInputError } from '../hooks/useInputError'

export const TextField = ({ form, id, style, rules, onChange, ...props }) => {
  const { errors, register } = form
  const { hasError, errorMessage } = useInputError(errors)

  return <MuiTextField
    {...props}
    {...register(id, rules)}
    error={hasError(id)}
    helperText={errorMessage(id)}
    style={{ margin: 10, width: 360,...style }}
    onChange={onChange}
  />
}
