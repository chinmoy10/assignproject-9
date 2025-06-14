import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Learning from "../pages/Learning";
import Tutorials from "../pages/Tutorials";
import Profile from "../pages/Profile";
import Lessons from "../components/Lessons";
import SingleLesson from "../pages/SingleLesson";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./privateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import ErrorPage from "../pages/ErrorPage";

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
        element: (
          <PrivateRoute>
            <SingleLesson></SingleLesson>
          </PrivateRoute>
        ),
        loader: () => fetch("../allWordsData.json"),
      },
      {
        path: "/tutorials",
        element: (
          <PrivateRoute>
            <Tutorials></Tutorials>
          </PrivateRoute>
        ),
        loader: () => fetch("../embeddedVideo.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
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
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
