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
import { MantineProvider } from "@mantine/core";
import Home from "./routes/home";
import Services from "./routes/services";
import Register from "./routes/register";
import SingleService from "./routes/singleService";
import ReviewCompnentTest from "./routes/reviewCompnentTest";
import ListService from "./routes/listService";

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
        path: "createService",
        element: <ListService />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "reviews/:id",
    element: <ReviewCompnentTest />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </MantineProvider>
);
