import { useFitnessTrailApi } from "../../../shared/api/hooks/useFitnessTrailApi"

export const useRegister = (role) => {
  const error = 'there was an error'
  const messages = { error, success: 'register success' }
  const { call: createUser, error: createUserError } = useFitnessTrailApi({ endpoint: '/users', action: 'post', messages: { error } })
  const { call: login } = useFitnessTrailApi({ endpoint: '/auth/login', action: 'post', messages })

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
    if (createUserError) return

    await login({ email, password })
  }

  return { register }
}
