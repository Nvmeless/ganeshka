import { createBrowserRouter } from "react-router-dom";
import { Register } from "../authentication/register/pages/Register";
import StudentList from "../teacher/studentList/pages/StudentList";
import ModuleList from "../teacher/moduleList/pages/ModuleList";
export const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/student/list",
    element: <StudentList />,
  },
  {
    path: "/module/list",
    element: <ModuleList />,
  },
]);
