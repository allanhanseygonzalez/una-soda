import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Error from "./components/error/Error";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProduct from "./components/products/create/CreateProduct";
import ListProducts from "./components/products/list/ListProducts";
import ClientPage from "./components/client/ClientPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/product/create",
            element: <CreateProduct/>
          },
          {
            path: "/product/list",
            element: <ListProducts/>
          },
          {
            path: "/client",
            element: <ClientPage/>
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
