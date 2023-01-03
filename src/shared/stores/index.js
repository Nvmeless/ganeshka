import { createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_FITNESS_TRAIL_API;

const initialState = {
  isLoading: { classroom: true, students: true, modules: true },
  error: "",
  data: {},
};

const trailApiSlice = createSlice({
  name: "trailApi",
  initialState: initialState,

  reducers: {
    FitnessTrailApi: (state, action) => {
      state.data[action.payload.type] = action.payload.data;
      state.isLoading[action.payload.type] = action.payload.isLoading;
      state.error = action.payload.error;
      if (action.payload.type == "classroom") {
        localStorage.setItem("classroom", action.payload.data[0].id);
      }
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
