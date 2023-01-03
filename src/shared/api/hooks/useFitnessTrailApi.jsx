import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../notifications/stores/notifications";

export const useFitnessTrailApi = ({ endpoint, action, params, messages }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState(undefined);
  const dispatch = useDispatch();

  axios.defaults.baseURL = process.env.REACT_APP_FITNESS_TRAIL_API;

  const call = async (
    callParams = params,
    callMessages = messages,
    callEndpoint = endpoint
  ) => {
    setError(undefined);
    setIsLoading(true);
    if (axios.defaults.headers.common["Authorization"] === "Bearer null")
      delete axios.defaults.headers.common["Authorization"];
    const response = await axios[action](callEndpoint, callParams).catch(
      (errors) => {
        setError(errors);
        if (callMessages?.error)
          dispatch(add({ message: callMessages.error, isError: true }));
      }
    );

    setIsLoading(false);
    if (error !== undefined) return;
    const data = response.data.data;
    setData(data);
    if (callMessages?.success) {
      dispatch(add({ message: callMessages.success, isError: false }));
    }
    return data;
  };

  return { call, isLoading, data, error };
};
