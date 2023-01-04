import axiosInstance from "./api";
import { reloadToken, deleteToken } from "../features/Auth/auth.slice"; 


const setup = (store) => {
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = window.localStorage.getItem("access_token");
            if (token) {
                config.headers["Authorization"] = 'Bearer ' + token;

            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    const { dispatch } = store;
    axiosInstance.interceptors.response.use(
        (res) => {
            return res;
        },
        async (err) => {

            const originalConfig = err.config;
            const refreshToken = window.localStorage.getItem("refresh_token");
            if (originalConfig.url !== "/auth/refresh" && err.response && refreshToken) {

                // Access Token was expired
                if (err.response.status === 401 && !originalConfig._retry) {
                    originalConfig._retry = true;


                    await axiosInstance.post('/auth/refresh', {
                        "refresh_token": refreshToken,
                        "mode": "json"
                    }).then((response) => {

                            dispatch(reloadToken({
                                token: response.data.data.access_token,
                                refreshToken: response.data.data.refresh_token
                            }));

                        }
                    ).catch((error) => {
                        dispatch(deleteToken());
                    });

                    return axiosInstance(originalConfig);
                }
            }

            return Promise.reject(err);
        }
    );
};

export default setup;