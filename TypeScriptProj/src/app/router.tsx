import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "../Pages/Dashboard";
import Projects from "../Pages/Projects";
import ProjectDetails from "../Pages/ProjectDetails";
import Users from "../Pages/Users";
import ProtectedRoute from "../routes/protectedRoute";
import Register from "../Pages/register";
import Login from "../Pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/projects",
        element: (
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        ),
      },
      {
        path: "/projects/:id",
        element: (
          <ProtectedRoute>
            <ProjectDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/users",
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
