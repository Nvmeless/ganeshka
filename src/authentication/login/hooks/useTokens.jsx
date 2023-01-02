import axios from "axios"
import { useFitnessTrailApi } from "../../../shared/api/hooks/useFitnessTrailApi"

export const useTokens = () => {
  const { call: refresh } = useFitnessTrailApi({ endpoint: '/auth/refresh', action: 'post' })

  const setTokens = ({ access_token, refresh_token }) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    localStorage.setItem("refresh_token", refresh_token);
  }

  const refreshTokens = async () => {
    const refresh_token = localStorage.getItem("refresh_token")
    const tokens = await refresh({ refresh_token, mode: "json" })
    setTokens(tokens)
  }

  return { setTokens, refreshTokens }
}
