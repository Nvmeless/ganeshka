import { useState } from "react"
import { TextField } from "./TextField"

export const PasswordsInputs = ({ form }) => {
  const { errors, register } = form
  const [password, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')

  const isPasswordEqualToRepeatedPassord = () => {
    const hasSamePasswords = password !== repeatedPassword
    if (hasSamePasswords) return 'Les mots de passe ne correspondent pas'
  }

  return <>
    <TextField
      form={{ errors, register }}
      type="password"
      id="password"
      label="Mot de passe"
      rules={{
        required: 'Veuillez entrer votre mot de passe',
        minLength: { value: 8, message: 'veuillez entrer un mot de passe d\'au moins 8 charactères' }
      }}
      onChange={(e) => setPassword(e.target.value) }
    />
    <TextField
      form={{ errors, register }}
      type="password"
      id="repeatedPassword"
      label="Répétez votre mot de passe"
      onChange={(e) => setRepeatedPassword(e.target.value)}
      rules={{ validate: isPasswordEqualToRepeatedPassord }}
    />
  </>
}
