import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { call } from "../../../shared/api/stores/api";


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
