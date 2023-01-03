import { RegisterForm } from '../components/RegisterForm'
import { useParams } from 'react-router-dom'
import { useRegister } from '../hooks/useRegister'

export const Register = () => {
  const { roleName } = useParams()
  const { register } = useRegister(roleName)

  return <RegisterForm handleRegister={register} />
}
