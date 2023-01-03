import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFitnessTrailApi } from "../../../shared/api/hooks/useFitnessTrailApi";
import { useState } from "react";

export const useGoalList = {
  name: "Nom",
  level: "Niveau",
};

export const useModuleDetail = () => {
  const { moduleId } = useParams();
  const [moduleDetail, setModuleDetail] = useState({});

  const { call: getModule, isLoading } = useFitnessTrailApi({
    endpoint: `/items/module/${moduleId}`,
    action: "get",
  });
  useEffect(() => {
    async function fetchData() {
      const moduleDetail = await getModule();
      setModuleDetail(moduleDetail);
    }
    fetchData();
  }, []);
  return { moduleDetail, isLoading };
};

export const useGoalsModule = () => {
  const { moduleId } = useParams();
  const [goal, setGoal] = useState();

  const { call: getGoals, isLoading } = useFitnessTrailApi({
    endpoint: `/items/goal?filter={ "idModule": { "_eq": "${moduleId}" }}`,
    action: "get",
  });

  async function fetchData() {
    const goalsModule = await getGoals();
    setGoal(goalsModule);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { goal, isLoading, fetchData };
};
