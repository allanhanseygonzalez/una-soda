import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Error from "./components/error/Error";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import EmployeeLayout from "./components/layout/layouts/EmployeeLayout";
import ClientLayout from "./components/layout/layouts/ClientLayout";
import ClientHome from "./components/client/ClientHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/employee",
        element: <EmployeeLayout />,
        children: [
          {
            path: "/employee/dashboard",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "/client",
        element: <ClientLayout />,
        children: [
          {
            path: "/client/home",
            element: <ClientHome />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
