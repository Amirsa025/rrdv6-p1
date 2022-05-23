import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  };
const PublicRoute = () => {
    const auth = useAuth();
  return auth?<Navigate to="/dashboard" replace></Navigate>:<Outlet/>
};

export default PublicRoute;
