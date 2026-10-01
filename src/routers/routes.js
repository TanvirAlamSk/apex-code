import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";

export const routes=createBrowserRouter([
    {
        path:"/",
        Component:Main,
        children:[
            {
                index:true, Component:Home
            }
        ]
    },
    {
        path:"/login",
        Component:Login
    },
    {
        path:"/signup",
        Component:Signup
    }
])