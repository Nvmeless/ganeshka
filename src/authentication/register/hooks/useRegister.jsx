import { useFitnessTrailApi } from "../../../shared/api/hooks/useFitnessTrailApi"
import { useLogin } from "../../login/hooks/useLogin"
import { useRoleIds } from "./useRoleIds"

export const useRegister = (role) => {
  const { call: createUser } = useFitnessTrailApi({ endpoint: '/users', action: 'post' })
  const { call: createClassroom } = useFitnessTrailApi({ endpoint: '/items/classroom', action: 'post' })
  const { login } = useLogin()
  const roleIds = useRoleIds()

  const register = async (form) => {
    const { password, email, firstName, lastName } = form
    const params = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      theme: 'auto',
      status: 'active',
      role: roleIds[role],
      email_notifications: true
    }
    const user = await createUser(params)
    if (role === 'professor') await createClassroom({ idProfessor: user.id })
    await login({ email, password })
  }

  return { register }
}
