import { createBrowserRouter } from "react-router";
import Main from "../layouts/main";
import Home from "../pages/Home";
import Auth from "../layouts/auth";
import Login from "../pages/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children : [
        {
            path : '',
            Component : Home
        }
    ]
  },
  {
    path: "/auth",
    Component: Auth,
    children : [
        {
            path : 'login',
            Component : Login
        }
    ]
  },
]);
