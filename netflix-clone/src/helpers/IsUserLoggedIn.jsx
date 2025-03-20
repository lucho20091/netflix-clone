import { Navigate, Outlet } from "react-router-dom"
import * as ROUTES from "../constants/routes"
export default function isUserLoggedIn({user}){
    if (!user){
        return <Navigate to={ROUTES.SIGN_IN} />
    }
    return <Outlet/>
}