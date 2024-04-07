import { Navigate, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { TaskList } from "./views/tasks/task-list";
import { UserDetails } from "./views/users/user-details";
import { Users } from "./views/users/users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        index: true,
        element: <Navigate to="/tasks" />,
      },
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
