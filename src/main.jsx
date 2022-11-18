import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Error from "./components/error/Error";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import ClientLayout from "./components/layout/layouts/ClientLayout";
import ClientHome from "./components/client/ClientHome";
import ClientMenuList from "./components/client/ClientMenuList";
import EmployeeLayout from "./components/layout/layouts/EmployeeLayout";
import CreateProduct from "./components/products/create/CreateProduct";
import EditProduct from './components/products/edit/EditProduct';
import ListProducts from "./components/products/list/ListProducts";
import Schedules from "./components/schedules/Schedules";

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
          {
            path: "/employee/product/create",
            element: <CreateProduct />,
          },
          {
            path: "/employee/product/edit",
            element: <EditProduct />,
          },
          {
            path: "/employee/product/list",
            element: <ListProducts />,
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
          {
            path: "/client/menu",
            element: <ClientMenuList />,
          },  
          {
            path: "/client/schedules",
            element: <Schedules/>
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
