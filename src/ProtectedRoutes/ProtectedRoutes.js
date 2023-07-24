import { Navigate, Outlet } from "react-router-dom"
import { isAuth } from "../login/login"
export const ProtectedRoutes = () => {
    console.log(isAuth)
    isAuth ? <Outlet /> : <Navigate to="/" />
}
