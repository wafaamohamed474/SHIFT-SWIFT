import { createBrowserRouter } from "react-router";
import Main from "../layouts/main";
import Home from "../pages/Home";
import Auth from "../layouts/auth";
import Login from "../pages/Login";
import Company from "../layouts/company";
import About from "../pages/About/About";
import Profile from "../pages/Profile/Profile";
import HelpCenter from "../pages/HelpCenter/HelpCenter";
import Notification from "../pages/Notification/Notification";
import Settings from "../pages/Settings/Settings";
import Reviews from "../pages/Reviews/Reviews";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "company",
        Component: Company,
        children: [
          {
            path: "about",
            Component: About,
          },
          {
            path: "profile",
            Component: Profile
          },
          {
            path: "helpcenter",
            Component: HelpCenter
          },
          {
            path: "notification",
            Component: Notification
          },
          {
            path: "settings",
            Component: Settings
          },
          {
            path: "reviews",
            Component: Reviews
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    Component: Auth,
    children: [
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);
