import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Learning from "../pages/Learning";
import Tutorials from "../pages/Tutorials";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Lessons from "../components/Lessons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "",
            element: <Navigate to={"/category/JP"}></Navigate>,
          },
          {
            path: "/category/:category",
            element: <Lessons></Lessons>,
            loader: () => fetch("../lesson.json"),
          },
        ],
      },
      {
        path: "/learning",
        element: <Learning></Learning>,
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
