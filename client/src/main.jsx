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
import Profile from "./routes/profile";
import FreelancerDashboard from "./routes/freelancerDashboard";
import Booking from "./components/Booking";
import BookingRoute from "./routes/bookingRoute";
import AllServices from "./components/AllServices";

import UserInfo from "./routes/UserInfo";

import Notfound from "./routes/notFound";
import ListService from "./routes/listService";
import ContactUs from "./routes/contactUs";

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
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "services/one/:id",
        element: <SingleService />,
      },
      {
        path: "services",
        element: <Services />,
        children: [
          {
            path: ":category",
            element: <AllServices />,
          },
        ],
      },

      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "userinfo",
            element: <UserInfo />,
          },
          {
            path: "freelancerDashboard",
            element: <FreelancerDashboard />,
          },
          {
            path: "bookings",
            element: <BookingRoute />,
          },
        ],
      },

      {
        path: "createService",
        element: <ListService />,
      },

      { path: "booking", element: <BookingRoute /> },
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
