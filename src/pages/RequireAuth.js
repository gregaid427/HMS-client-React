import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const RequireAuth = ({ allowedRoles }) => {
    const users = useSelector((state) => state?.myusers);
    const {roles} = users;
    const { auth } = useAuth();
    const location = useLocation();
    

    return (
        roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;