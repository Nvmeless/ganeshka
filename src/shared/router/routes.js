import { createBrowserRouter } from "react-router-dom";
import { Login } from "../../authentication/login/pages/Login";
import { Register } from "../../authentication/register/pages/Register";
import { StudentList } from "../../teacher/studentList/pages/StudentList";
import { ModuleList } from "../../teacher/moduleList/pages/ModuleList";
import { Account } from "../../account/pages/Account";

export const router = createBrowserRouter([
  {
    path: "/register/:roleName",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "teacher/student/list",
    element: <StudentList />,
  },
  {
    path: "teacher/modules/list",
    element: <ModuleList />,
  },
  {
    path: "/",
    element: <Account />,
  },
]);
