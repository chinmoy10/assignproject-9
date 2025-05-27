import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Learning from "../pages/Learning";
import Tutorials from "../pages/Tutorials";
import About from "../pages/About";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/learning",
                element: <Learning></Learning>
            },
            {
                path: "/tutorials",
                element: <Tutorials></Tutorials>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
        ]
    }
])

export default router;