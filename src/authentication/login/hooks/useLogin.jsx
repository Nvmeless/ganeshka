import { useDispatch } from "react-redux"
import { useFitnessTrailApi } from "../../../shared/api/hooks/useFitnessTrailApi"
import { connect } from "../stores/connectedUser"
import { useTokens } from "./useTokens"
import { call } from "../../../shared/api/stores/api"

export const useLogin = () => {
  const defaultMessages = {
    error: "Il y a eux une erreur",
    success: "Connexion réussie",
  }
  const { call: callLogin } = useFitnessTrailApi({
    endpoint: "/auth/login",
    action: "post",
    messages: { error: defaultMessages.error },
  })
  const { call: getUser } = useFitnessTrailApi({
    endpoint: "/users/me",
    action: "get",
    messages: defaultMessages,
  })
  const dispatch = useDispatch()
  const { setTokens } = useTokens()

  const login = async (params) => {
    const loginResponse = await callLogin(params)
    setTokens(loginResponse)
    await setConnectedUser()
  }

  const setConnectedUser = async (messages = defaultMessages) => {
    const user = await getUser({}, messages)
    dispatch(connect(user))
    dispatch(
      call(
        `items/classroom?filter={ "idProfessor": { "_eq": "${user.id}" }}`,
        [],
        "get",
        "",
        "classroom"
      )
    )
  }

  return { login, setConnectedUser }
}
