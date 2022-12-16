import { createBrowserRouter } from "react-router-dom";
import { Account } from "../account/pages/Account";
import { Register } from "../authentication/register/pages/Register";
import { ListLessons } from "../list/pages/ListLessons";
import { ListModules } from "../list/pages/ListModules";
import { ListStudents } from "../list/pages/ListStudents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Account />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/students",
    element: <ListStudents />,
  },
  {
    path: "/lessons",
    element: <ListLessons />,
  },
  {
    path: "/modules",
    element: <ListModules />,
  },
]);
