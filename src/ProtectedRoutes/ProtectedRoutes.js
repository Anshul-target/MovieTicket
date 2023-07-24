import { Navigate, Outlet } from "react-router-dom"
import { isAuth } from "../login/login"
export const ProtectedRoutes = () => {
    isAuth ? <Outlet /> : <Navigate to="/" />
}
