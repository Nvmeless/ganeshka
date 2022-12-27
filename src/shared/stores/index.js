import { createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_FITNESS_TRAIL_API;
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${sessionStorage.getItem("token")}`;
const initialState = { isLoading: true, error: "", data: {} };

const trailApiSlice = createSlice({
  name: "trailApi",
  initialState: initialState,

  reducers: {
    FitnessTrailApi: (state, action) => {
      state.data[action.payload.type] = action.payload.data;
      state.isLoading = action.payload.isLoading;
      state.error = action.payload.error;
    },
  },
});

export const call =
  (endpoint, defaultData = [], action = "get", params = "", type) =>
  async (dispatch) => {
    axios[action](endpoint, params)
      .then(({ data }) => {
        dispatch(FitnessTrailApi({ data: data.data, isLoading: false, type }));
      })
      .catch((errors) => {
        dispatch(
          FitnessTrailApi({
            data: defaultData,
            error: errors,
            isLoading: false,
          })
        );
      });
  };

export const store = configureStore({
  reducer: {
    FitnessTrailApi: trailApiSlice.reducer,
  },
});

export const showDatas = (state) => state.FitnessTrailApi;

export const { FitnessTrailApi } = trailApiSlice.actions;
