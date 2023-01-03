import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { call } from "../../../shared/stores/index";
import { useFitnessTrailApi } from "../../../shared/api/hooks/useFitnessTrailApi";

export const useStudentList = {
  first_name: "Prénom",
  last_name: "Nom",
  email: "Mail",
};
export const useStudent = () => {
  const dispatch = useDispatch();

  const idClassroom = localStorage.getItem("classroom");
  const { call: getStudentClassroom } = useFitnessTrailApi({
    endpoint: `/items/studentclassroom?filter={ "idClassroom": { "_eq": "${idClassroom}" }}`,
    action: "get",
  });
  useEffect(() => {
    async function fetchData() {
      const allStudentClassroom = await getStudentClassroom();
      const totalStudent = allStudentClassroom.length;
      let string = "[";
      allStudentClassroom.map(function (currentStudent, index) {
        string += `"${currentStudent.idStudent}"`;
        if (index != totalStudent - 1) {
          string += ",";
        }
      });
      string += "]";
      if (totalStudent > 0) {
        dispatch(
          call(
            `/users?filter={ "id": { "_in": ${string}}}`,
            [],
            "get",
            "",
            "students"
          )
        );
      }
    }
    fetchData();
  }, []);
};
