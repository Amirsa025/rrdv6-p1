import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return {
		  auth:true,
		  role:user.role
	  };
    } else {
      return {
		  auth:false,
		  role:null
	  };
    }
  };

const PrivteRoute = (props) => {
  const {auth, role} = useAuth()
      let isRequired=props ;
      isRequired="USER"
      if (isRequired) {
        return auth ? (
         isRequired=== role ? (
            <Outlet />
          ) : (
            <Navigate to="/denied" />
          )
        ) : (
          <Navigate to="/login" />
        )
      } else {
        return auth ? <Outlet /> : <Navigate to="/login" />
      }
};

export default PrivteRoute;
