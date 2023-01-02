import { useFitnessTrailApi } from "../../../shared/api/hooks/useFitnessTrailApi"
import { useLogin } from "../../login/hooks/useLogin"

export const useRegister = (role) => {
  const { call: createUser } = useFitnessTrailApi({ endpoint: '/users', action: 'post' })
  const { login } = useLogin()

  const register = async (form) => {
    const { password, email, firstName, lastName } = form
    const params = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      theme: 'auto',
      status: 'active',
      role,
      email_notifications: true
    }
    await createUser(params)
    await login({ email, password })
  }

  return { register }
}
