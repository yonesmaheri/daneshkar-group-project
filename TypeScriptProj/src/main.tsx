import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import "./index.css";
import { AuthProvider } from "./context/authContext";
import { ProjectProvider } from "./context/projectContext";
import { TaskProvider } from "./context/taskContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ProjectProvider>
        <TaskProvider>
          <RouterProvider router={router} />
        </TaskProvider>
      </ProjectProvider>
    </AuthProvider>
  </React.StrictMode>,
);
