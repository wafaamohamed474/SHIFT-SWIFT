import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainHome from "../pages/MainHome/Home";
import Login from "../pages/Login";
import About from "../pages/About/About";
import Profile from "../pages/Profile/Profile";
import HelpCenter from "../pages/HelpCenter/HelpCenter";
import Notification from "../pages/Notification/Notification";
import Settings from "../pages/Settings/Settings";
import Reviews from "../pages/Reviews/Reviews";
import CompanyLayout from "../layouts/companyLayout";
import UserLayout from "../layouts/userLayout";
import MyJops from "../pages/MyJops/MyJops";
import UserNotifications from "../pages/UserNotifications/UserNotifications";
import RegisterUser from "../pages/RegisterUser";
import RegisterCompany from "../pages/RegisterCompany";
import PublicLayout from "../layouts/publicLayout";
import PrivateLayout from "../layouts/privateLayout";

export const routes = createBrowserRouter([
  {
    path: "/home",
    Component: PrivateLayout,
    children: [
      {
        path: "",
        Component: MainHome,
      },

      {
        path: "user",
        Component: UserLayout,
        children: [
          {
            path: "about",
            Component: About,
          },
          {
            path: "profile",
            Component: Profile,
          },
          {
            path: "helpcenter",
            Component: HelpCenter,
          },
          {
            path: "notifications",
            Component: Notification,
          },
          {
            path: "settings",
            Component: Settings,
          },
          {
            path: "reviews",
            Component: Reviews,
          },
        ],
      },
      {
        path: "company",
        Component: CompanyLayout,
        children: [
          {
            path: "myjobs",
            Component: MyJops,
          },
          {
            path: "notifications",
            Component: UserNotifications,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    Component: PublicLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register-user",
        Component: RegisterUser,
      },
      {
        path: "register-company",
        Component: RegisterCompany,
      },
    ],
  },
]);
