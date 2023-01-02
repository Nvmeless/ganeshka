import config from '../config';
import api from '../config/api';

const API_URL = config.API_URL + "auth/";

const login = (email, password) => {
    return api
        .post(API_URL + "login", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const authService = {
    login,
    logout,
};

export default authService;
