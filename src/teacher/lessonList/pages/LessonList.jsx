import { List } from "../../../shared/components/atoms/List/List";
import { Action } from "../../../shared/components/atoms/Action/Action";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useLessonList } from "../hooks/useLessonList";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { call } from "../../../shared/api/stores/api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const LessonList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getAllLesson = async () => {
      dispatch(call("/Users", [], "get", "", "students"));
    };
    return getAllLesson;
  }, []);

  const { data, isLoading } = useSelector((state) => state.fitnessTrailApi)
  const hasDatas = !isLoading && data.students.length > 0;

  console.log({ data })

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Liste des élèves</h1>
      <div className="buttonAdd">
        <Button
          variant="outlined"
          style={{
            color: "black",

            borderColor: "black",
          }}
        >
          Ajouter des élèves
        </Button>
      </div>
      {isLoading ? (
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
          {data.students.map(function (object, key) {
            return (
              <List
                displayList={object}
                typeList={useLessonList}
                key={key}
                action={
                  <>
                    <Action
                      action={"student/update/" + object.id}
                      icon={<VisibilityIcon></VisibilityIcon>}
                    ></Action>
                    <Action
                      action={"student/delete/" + object.id}
                      icon={<DeleteIcon></DeleteIcon>}
                    ></Action>
                  </>
                }
              />
            );
          })}
        </div>
      ) : (
        <h2 style={{ textAlign: "center" }}>
          Vous n’avez actuellement pas d’élèves
        </h2>
      )}
    </>
  );
};

