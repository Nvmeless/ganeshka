import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { add } from "../../notifications/stores/notifications"

export const useFitnessTrailApi = ({
  endpoint,
  defaultData = [],
  action = "get",
  params,
  messages
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(defaultData);
  const [error, setError] = useState(undefined);
  const dispatch = useDispatch()
  
  axios.defaults.baseURL = process.env.REACT_APP_FITNESS_TRAIL_API;

  const call = async (callParams = params, callMessages = messages, callEndpoint = endpoint) => {
    axios[action](callEndpoint, callParams)
      .then(({ data }) => {
        setData(data);
        setError(undefined);
        setIsLoading(false);
        if (callMessages?.success) dispatch(add({ message: callMessages.success, isError: false }))
      })
      .catch((errors) => {
        setError(errors);
        setIsLoading(false);
        if (callMessages?.error) dispatch(add({ message: callMessages.error, isError: true }))
      });
  };

  useEffect(() => {
    if (action !== "get") return;
    call();
  }, []);

  return { call, isLoading, data, error };
};
