import { useDispatch } from "react-redux"
import { useFitnessTrailApi } from "../../../shared/api/hooks/useFitnessTrailApi"
import connectedUser from "../../shared/stores/connectedUser"

export const useLogin = () => {
  const messages = { error: "Il y a eu une erreur.", success: "connexion réussie" }
  const dispatch = useDispatch()
  const { call: callLogin, data } = useFitnessTrailApi({ endpoint: '/auth/login', action: 'post', messages })

  const login = async (params) => {
    await callLogin(params)

    const { access_token, refresh_token } = data
    sessionStorage.setItem("access_token", access_token);
    sessionStorage.setItem("refresh_token", refresh_token);

    dispatch(connectedUser(params))
  }

  return { login }
}
