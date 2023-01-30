import api from '../config/api';

const API_URL = process.env.REACT_APP_URL_BACK + "/auth/";

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

const register = (email, password) => {
    return api
        .post(process.env.REACT_APP_URL_BACK + "/users", {
            email,
            password,
        })
        .then((response) => {
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
};

const authService = {
    login,
    logout,
    register
};

export default authService;