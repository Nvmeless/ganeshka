import { useEffect } from 'react';
import { useLogin } from './useLogin'
import { useTokens } from './useTokens'

export const useRefreshConnectedUser = () => {
  const { refreshTokens } = useTokens()
  const { setConnectedUser } = useLogin()

  useEffect(() => {
    const refreshConnectedUser = async () => {
      const token = await refreshTokens()
      if (token === null) return
      await setConnectedUser({})
    }

    refreshConnectedUser()

    const interval = setInterval(() => {
      refreshConnectedUser()
    }, process.env.REACT_APP_REFRESH_MILLISECONDS);
    return () => clearInterval(interval);
  }, []);
  
}
