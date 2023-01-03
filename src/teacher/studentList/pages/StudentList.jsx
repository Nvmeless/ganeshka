import { List } from "../../../shared/components/atoms/List/List";
import { Action } from "../../../shared/components/atoms/Action/Action";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useStudentList, useStudent } from "../hooks/useStudentList";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useFitnessTrailApi } from "../../../shared/api/hooks/useFitnessTrailApi";

export const StudentList = () => {
  const { fetchData, students } = useStudent();
  const { data, isLoading } = useSelector((state) => state.fitnessTrailApi);
  let hasDatas = false
  let isLoadingStudents = true
  if (students.length > 0) {
    hasDatas = !isLoading.students && data.students.length > 0;
    isLoadingStudents = false
  }else{
    isLoadingStudents = false
  }
  const { call } = useFitnessTrailApi({
    endpoint: "",
    action: "get",
  });
  const { call: callDelete } = useFitnessTrailApi({
    endpoint: "",
    action: "delete",
  });

  const deleteModule = async (idClassroom, idStudent) => {
    const studentclassroom = await call(
      "",
      "",
      `/items/studentclassroom?filter={"_and":[{"idClassroom":{"_eq": ${idClassroom}}},{"idStudent":{"_eq":"${idStudent}"}}]} `
    );
    await callDelete(
      "",
      "",
      `/items/studentclassroom/${studentclassroom[0].id}`
    );

    fetchData();
  };

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
      {isLoadingStudents ? (
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
                      action={() =>
                        deleteModule(
                          localStorage.getItem("classroom"),
                          object.id
                        )
                      }
                      icon={<DeleteIcon></DeleteIcon>}
                    ></Action>
                  </>
                }
              />
            );
          })}
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>
          Vous n’avez actuellement pas d’élèves
        </p>
      )}
    </>
  );
};
