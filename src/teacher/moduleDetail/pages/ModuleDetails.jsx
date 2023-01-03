import {
  useModuleDetail,
  useGoalsModule,
  useGoalList,
} from "../hooks/useModuleDetails";
import { CircularProgress } from "@mui/material";
import { List } from "../../../shared/components/atoms/List/List";
import { Action } from "../../../shared/components/atoms/Action/Action";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useFitnessTrailApi } from "../../../shared/api/hooks/useFitnessTrailApi";

export const ModuleDetails = () => {
  const { moduleDetail: moduleDetail, isLoading: isLoadingDetail } =
    useModuleDetail();
  const {
    goal: goalsModule,
    isLoading: isLoadingGoals,
    fetchData,
  } = useGoalsModule();

  const hasDatas = !isLoadingGoals && goalsModule.length > 0;
  const { call: callDelete } = useFitnessTrailApi({
    endpoint: "",
    action: "delete",
  });
  const deleteGoalsModule = async (id) => {
    await callDelete("", "", `/items/goal/${id}`);
    fetchData();
  };

  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{moduleDetail.name}</h1>
      <div className="buttonAdd">
        <Button
          variant="outlined"
          style={{
            color: "black",

            borderColor: "black",
          }}
          onClick={() =>
            navigate(`/teacher/module/${moduleDetail.id}/goal/create`)
          }
        >
          Ajouter des objectifs
        </Button>
      </div>
      {isLoadingGoals ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10vw",
          }}
        >
          <CircularProgress color="inherit" />
        </div>
      ) : hasDatas ? (
        <div className="list">
          {goalsModule.map(function (object, key) {
            return (
              <List
                displayList={object}
                typeList={useGoalList}
                key={key}
                action={
                  <>
                    <Action
                      action={() =>
                        navigate(
                          `/teacher/module/${moduleDetail.id}/goal/${object.id}/modify`
                        )
                      }
                      icon={<CreateIcon></CreateIcon>}
                    ></Action>
                    <Action
                      action={() => deleteGoalsModule(object.id)}
                      icon={<DeleteIcon></DeleteIcon>}
                    ></Action>
                  </>
                }
              />
            );
          })}
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>Ce module n'as pas de goal</p>
      )}
    </>
  );
};
