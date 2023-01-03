import { List } from "../../../shared/components/atoms/List/List";
import { Action } from "../../../shared/components/atoms/Action/Action";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useStudentList, useStudent } from "../hooks/useStudentList";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

export const StudentList = () => {
  useStudent();
  const { data, isLoading } = useSelector((state) => state.fitnessTrailApi)
  const hasDatas = !isLoading.students && data.students.length > 0;

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
      {isLoading.students ? (
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
                typeList={useStudentList}
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
