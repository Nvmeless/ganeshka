import { useFitnessTrailApi } from "../../../shared/api/hooks/useFitnessTrailApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { call } from "../../../shared/stores/index";
import { useSelector } from "react-redux";
import { showDatas } from "../../../shared/stores/index";

export const useModuleList = {
  name: "Nom",
};

export const useModule = () => {
  const dispatch = useDispatch();

  const idClassroom = localStorage.getItem("classroom");

  useEffect(() => {
    async function fetchData() {
      dispatch(
        call(
          `items/module?filter={ "idClassroom": { "_in": [${idClassroom}] }}`,
          [],
          "get",
          "",
          "modules"
        )
      );
    }

    fetchData();
  }, []);
};
