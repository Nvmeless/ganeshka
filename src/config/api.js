import axios from 'axios';
import config from '../config';
import {useDispatch} from "react-redux";
import { reloadToken } from '../slices/auth';


const instance = axios.create({
    withCredentials: true,
    baseURL: `${config.API_URL}`,
});


instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const dispatch = useDispatch();

        const originalRequest = error.config;

        // Vérifie si le token est valide et s'il a expiré
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            // Récupérer le refresh token du localStorage
            const refreshToken = localStorage.getItem('refresh_token');

            // Envoyer une requête pour obtenir un nouveau token avec le refresh token
            return instance.post('/auth/refresh', {
                refresh_token: refreshToken,
                mode: "json"
                }).then((response) => {
                    // Mettre à jour le token dans le state global et le localStorage
                    dispatch(reloadToken({
                        token: response.data.access_token,
                        refreshToken: response.data.refresh_token
                    }));

                    // Mettre à jour le token dans la requête originale et la réessayer
                    originalRequest.headers['Authorization'] = `Bearer ${response.data.token}`;
                    return instance(originalRequest);
                });
        }

        return Promise.reject(error);
    }
);

export default instance;
