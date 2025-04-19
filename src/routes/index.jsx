import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainHome from "../pages/MainHome/Home";
import Login from "../pages/Login";
import About from "../pages/About/About";
import Profile from "../pages/Profile/Profile";
import HelpCenter from "../pages/HelpCenter/HelpCenter";
import Settings from "../pages/Settings/Settings";
import Reviews from "../pages/Reviews/Reviews";
import CompanyLayout from "../layouts/companyLayout";
import UserLayout from "../layouts/userLayout";
import MyJops from "../pages/MyJops/MyJops";
import RegisterUser from "../pages/RegisterUser";
import RegisterCompany from "../pages/RegisterCompany";
import PublicLayout from "../layouts/publicLayout";
import PrivateLayout from "../layouts/privateLayout";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";
import PostJob from "../pages/PostJob/PostJob";

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
            path: "settings",
            Component: Settings,
          },
          {
            path: "reviews",
            Component: Reviews,
          },
          {
            path: "myjobs",
            Component: MyJops,
          },
        ],
      },
      {
        path: "company",
        Component: CompanyLayout,
        children: [
          {
            path: "postjob",
            Component: PostJob,
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
