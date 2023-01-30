import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slice";

import AuthService from "../../services/auth.services";

const token = localStorage.getItem("access_token");
const refreshToken = localStorage.getItem("refresh_token");

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, thunkAPI) => {
        try {
            const data = await AuthService.login(email, password);
            window.localStorage.setItem("access_token", data.data.access_token);
            window.localStorage.setItem("refresh_token", data.data.refresh_token);
            window.location.reload();
            return { token: data };
        } catch (error) {
            
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const register = createAsyncThunk(
    "auth/register",
    async ({ email, password }, thunkAPI) => {
        try {
            console.log("bonjour")
            await AuthService.register(email, password);
        } catch (error) {
            
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);


export const logout = createAsyncThunk("auth/logout", async () => {
    await AuthService.logout();
});


const initialState = token
    ? { isLoggedIn: true, token, refreshToken }
    : { isLoggedIn: false, token: null, refreshToken };


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reloadToken: (state, action) => {
            state.token = action.payload.token;
            state.refreshToken = action.payload.refreshToken;
            state.isLoggedIn = true;
            localStorage.setItem("access_token", action.payload.token);
            localStorage.setItem("refresh_token", action.payload.refreshToken);
            return state;
        },
        deleteToken: (state,action ) => {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            state.isLoggedIn = false;
            state.token = null;
            state.refreshToken = null;
            return state;
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload.token.data.access_token;
            state.refreshToken = action.payload.token.data.refresh_token;
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.token = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.token = null;
        },
        [register.fulfilled]: (state, action) => {
            console.log("register done !")
        }
    },
});

export const { reloadToken, deleteToken } = authSlice.actions;

const { reducer } = authSlice;
export default reducer;