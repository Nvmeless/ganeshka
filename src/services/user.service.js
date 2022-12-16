import axios from "axios";
import config from '../config';
import {useSelector} from "react-redux";

const API_URL = config.API_URL + "users/";


const getUserAuth = async (token) => {
    const config = {
        Authorization: `Bearer ${token}`
    };
    const response = await axios.get(API_URL + "me",{
        headers: config,
    })

    return response.data;
};

const usersService = {
    getUserAuth,
};

export default usersService;
