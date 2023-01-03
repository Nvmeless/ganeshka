import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_FITNESS_TRAIL_API

const initialState = {
  isLoading: { classroom: true, students: true, modules: true },
  error: "",
  data: {},
}

const fitnessTrailApi = createSlice({
  name: "fitnessTrailApi",
  initialState,
  reducers: {
    setData: (state, { payload: { type, data, isLoading, error } }) => {
      state.data[type] = data
      state.isLoading[type] = isLoading
      state.error = error
      if (type === "classroom") localStorage.setItem("classroom", data[0].id)
    },
  },
})

export const call =
  (endpoint, defaultData = [], action = "get", params = "", type) =>
  async (dispatch) => {
    const setData = fitnessTrailApi.actions.setData
    axios[action](endpoint, params)
      .then(({ data }) => {
        dispatch(setData({ data: data.data, isLoading: false, type }));
      })
      .catch((errors) => {
        dispatch(
          setData({
            data: defaultData,
            error: errors,
            isLoading: false,
          })
        );
      });
  };

export default fitnessTrailApi.reducer
