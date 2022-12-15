import { List } from "../../../shared/components/atoms/List/List";
import { Action } from "../../../shared/components/atoms/Action/Action";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useFitnessTrailApi } from '../../../shared/api/hooks/useFitnessTrailApi'
import { useStudentList } from "../hooks/useStudentList";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

export const StudentList = () => {
  const { isLoading, data, error } = useFitnessTrailApi("/api", [], "get");
  const { call: callDelete } = useFitnessTrailApi("", {}, "delete");
  const hasDatas = !isLoading && data.results.length > 0;
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
        <div className="studentList">
          {data.results.map(function (object, key) {
            return (
              <List
                displayList={object}
                typeList={useStudentList}
                key={key}
                action={
                  <>
                    <Action
                      action={"student/update/" + object.id}
                      icon={
                        <VisibilityIcon
                          onClick={() => callDelete(`User/${object.id}`)}
                        ></VisibilityIcon>
                      }
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
        <h2 style={{ textAlign: "center", marginTop: "60%" }}>
          Vous n’avez actuellement pas d’élèves
        </h2>
      )}
    </>
  );
};

export default StudentList;
