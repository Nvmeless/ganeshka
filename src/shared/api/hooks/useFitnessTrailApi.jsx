import axios from "axios";
import { useState, useEffect } from "react";

export const useFitnessTrailApi = (
  endpoint,
  defaultData = [],
  action = "get",
  params
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(defaultData);
  const [error, setError] = useState("");
  axios.defaults.baseURL = process.env.REACT_APP_FITNESS_TRAIL_API;
  let config = {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  };
  const call = (callParams = params, callEndpoint = endpoint) => {
    axios[action](callEndpoint, callParams, config)
      .then(({ data }) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((errors) => {
        setError(errors);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (action !== "get") return;
    call();
  }, []);

  return { call, isLoading, data, error };
};
