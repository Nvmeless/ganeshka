import { useFitnessTrailApi } from '../../../shared/api/hooks/useFitnessTrailApi'
import { RegisterForm } from '../components/RegisterForm'

export const Register = () => {
  const { call: handleRegister } = useFitnessTrailApi('/api', {}, "post")

  return <RegisterForm handleRegister={handleRegister} />
}
