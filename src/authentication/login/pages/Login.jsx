import { LoginForm } from "../components/LoginForm"
import { useLogin } from "../hooks/useLogin"

export const Login = () => {
  const { login } = useLogin()

  return <LoginForm login={login}/>
}
