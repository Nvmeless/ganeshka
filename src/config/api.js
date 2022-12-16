import axios from 'axios';
import { get } from 'lodash';
import config from '../config';

const instance = axios.create({
    withCredentials: true,
    baseURL: `${config.API_URL}`,
});

instance.interceptors.response.use({}, async (error) => {
    const { response } = error;
    const originalRequest = error.config;

    if (response.status === 403) {
        originalRequest.headers = {
            'Content-Type': 'application/json',
        };
        const res = await instance.post('/auth/refresh', { refresh_token: get(localStorage, 'refresh_token') });
        if (res.status === 201) {
            return axios(originalRequest);
        }
    }
    return Promise.reject(error);
});

export default instance;
