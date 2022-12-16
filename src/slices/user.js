import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";


import usersService from "../services/user.service";
import {login, logout, register} from "./auth";

const token = localStorage.getItem("access_token");

export const getUserAuth = createAsyncThunk(
    "users/me",
    async ({ token }, thunkAPI) => {
        try {
            const response = await usersService.getUserAuth(token);
            thunkAPI.dispatch(setMessage(response.data.message));
            window.sessionStorage.setItem("user", JSON.stringify(response.data.data));

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


const initialState = window.sessionStorage.getItem("user") != null ? JSON.parse(window.sessionStorage.getItem("user")) : null;

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: {
        [getUserAuth.fulfilled]: (state, action) => {
            state = null;
        },
        [getUserAuth.rejected]: (state, action) => {
            state = null;
        },
        [getUserAuth.fulfilled]: (state, action) => {
            state = action.payload.user;
        },
        [getUserAuth.rejected]: (state, action) => {
            state = null;
        },
        [getUserAuth.fulfilled]: (state, action) => {
            state = null;
        },
    },
});

const { reducer } = usersSlice ;
export default reducer;
