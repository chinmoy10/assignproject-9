import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Learning from "../pages/Learning";
import Tutorials from "../pages/Tutorials";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Lessons from "../components/Lessons";
import SingleLesson from "../pages/SingleLesson";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/learning",
        element: <Learning></Learning>,
        children: [
          {
            path: "",
            element: <Navigate to={"/learning/JP"}></Navigate>,
          },
          {
            path: "/learning/:category",
            element: <Lessons></Lessons>,
            loader: () => fetch("../lesson.json"),
          },
        ],
      },
      {
        path: "/lesson/:lesson_no",
        element: <SingleLesson></SingleLesson>,
        loader: () => fetch("../allWordsData.json"),
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>,
        loader: () => fetch("../embeddedVideo.json"),
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
  {
    path: "/login",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/login/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error Page</h1>,
  },
]);

export default router;
