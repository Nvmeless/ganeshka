import {
  createBrowserRouter
} from "react-router-dom";
import { Login } from "../../authentication/login/pages/Login"
import { Register } from "../../authentication/register/pages/Register";

export const router = createBrowserRouter([
  {
    path: "/register/:roleName",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
