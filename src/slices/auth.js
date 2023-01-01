import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import AuthService from "../services/auth.service";

const token = localStorage.getItem("access_token");
const refreshToken = localStorage.getItem("refresh_token");

export const register = createAsyncThunk(
    "auth/register",
    async ({ username, email, password }, thunkAPI) => {
        try {
            const response = await AuthService.register(username, email, password);
            thunkAPI.dispatch(setMessage(response.data.message));
            return response.data;
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

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, thunkAPI) => {
        try {
            const data = await AuthService.login(email, password);
            window.localStorage.setItem("access_token", data.data.access_token);
            window.localStorage.setItem("refresh_token", data.data.refresh_token);
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
            localStorage.setItem("access_token", action.payload.token);
            localStorage.setItem("refresh_token", action.payload.refreshToken);
            return state;
        }
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
        },
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
    },
});

export const { reloadToken } = authSlice.actions;

const { reducer } = authSlice;
export default reducer;
