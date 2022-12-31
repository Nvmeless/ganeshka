import config from '../config';
import api from '../config/api';

const API_URL = config.API_URL + "users/";


const getUserAuth = async (token) => {
    const config = {
        Authorization: `Bearer ${token}`
    };
    const response = await api.get(API_URL + "me",{
        headers: config,
    })

    return response.data;
};

const usersService = {
    getUserAuth,
};

export default usersService;
