import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import "./index.css";
import Login from "./routes/login";
import Home from "./routes/home";
import Register from "./routes/register";
import FreelanceProfile from "./routes/freelanceProfile";
import Services from "./routes/services";
import UserProfile from "./routes/userProfile";
import FreelancerDashboard from "./routes/freelancerDashboard";
import UserBookings from "./routes/userBookings";
import CreateService from "./routes/createService";

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
        path: "freelanceProfile/:uuid",
        element: <FreelanceProfile />,
      },
      {
        path: "services/:service_id",
        // change later
        // path: "services",
        element: <Services />,
      },
      {
        path: "userprofile/:uuid",
        element: <UserProfile />,
      },
      {
        path: "freelanceDashboard/:uuid",
        element: <FreelancerDashboard />,
      },
      {
        path: "userBookings/:uuid",
        element: <UserBookings />,
      },
      {
        path: "services/create",
        element: <CreateService />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
