import { RegisterForm } from '../components/RegisterForm'
import { useRoleIds } from '../hooks/useRoleIds'
import { useParams } from 'react-router-dom'
import { useRegister } from '../hooks/useRegister'

export const Register = () => {
  const roleIds = useRoleIds()
  const { roleName } = useParams()
  const role = roleIds[roleName]
  const { register } = useRegister(role)

  return <RegisterForm handleRegister={register} />
}
