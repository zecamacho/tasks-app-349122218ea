import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { TaskList } from "./views/tasks/task-list";
import { Users } from "./views/users/users";
import { UserDetails } from "./views/users/user-details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/tasks",
        element: <TaskList />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <UserDetails />,
      },
    ],
  },
]);
