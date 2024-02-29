import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/carousel/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import Home from "./routes/home";
import Services from "./routes/services";
import Register from "./routes/register";
import SingleService from "./routes/singleService";
import ListService from "./routes/listService";
import Profile from "./routes/profile";
import Notfound from "./routes/notFound";

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
      {
        path: "services/:id",
        element: <SingleService />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "createService",
        element: <ListService />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  { path: "*", element: <Notfound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <Notifications />
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </MantineProvider>
);
