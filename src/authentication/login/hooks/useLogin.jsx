import { useDispatch } from "react-redux"
import { useFitnessTrailApi } from "../../../shared/api/hooks/useFitnessTrailApi"
import { connect } from "../stores/connectedUser"
import { useTokens } from "./useTokens"

export const useLogin = () => {
  const defaultMessages = { error: "Il y a eux une erreur", success: "Connexion réussie" }
  const { call: callLogin } = useFitnessTrailApi({ endpoint: '/auth/login', action: 'post', messages: { error: defaultMessages.error } })
  const { call: getUser } = useFitnessTrailApi({ endpoint: '/users/me', action: 'get', messages: defaultMessages })
  const dispatch = useDispatch()
  const { setTokens } = useTokens()

  const login = async (params) => {
    const loginResponse = await callLogin(params)
    setTokens(loginResponse)
    setConnectedUser()
  }

  const setConnectedUser = async (messages = defaultMessages) => {
    const user = await getUser({}, messages)
    dispatch(connect(user))
  }

  return { login, setConnectedUser }
}
