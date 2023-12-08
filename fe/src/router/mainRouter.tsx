import Layout from "../Layout/Layout"
import HomeScreen from "../pages/HomeScreen"
import { createBrowserRouter } from "react-router-dom"
import Register from "../pages/auth/Register"
import Verify from "../pages/auth/Verify"
import SignIn from "../pages/auth/SignIn"
import PrivateRouter from "./PrivateRouter"
import SingleDetail from "../pages/SingleDetail"

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element:<PrivateRouter><Layout/></PrivateRouter>,
        children: [{
            index: true,
            element: <HomeScreen/>
        },
        {
            index: true,
            path: `detail/:productID`,
            element: <SingleDetail/>
        }
    ]
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/verify",
        element:<Verify/>
    },
    {
        path:"/signIn",
        element:<SignIn/>
    }
])

