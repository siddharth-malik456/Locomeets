import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/carousel/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Home from "./routes/home";
import Services from "./routes/services";
import "./index.css";
import Register from "./routes/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </MantineProvider>
);
