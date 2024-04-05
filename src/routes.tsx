import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Tasks } from "./views/tasks/tasks";
import { Users } from "./views/users/users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);
