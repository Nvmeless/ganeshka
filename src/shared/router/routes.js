import {
  createBrowserRouter
} from "react-router-dom";
import { Register } from "../../authentication/register/pages/Register";

export const router = createBrowserRouter([
  {
    path: "/register/:roleName",
    element: <Register />,
  },
]);
