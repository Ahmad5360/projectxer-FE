"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Loader from "./loader";

// import jwtDecode from "jwt-decode";

// import { options as sidebarOptions } from "../constant/sidebarOptions";
const withAuth = (WrappedComponent, options = {}) => {
  const AuthComponent = (props) => {
    const router = useRouter();
    const token = localStorage.getItem("token");
    
    const pathname = usePathname();

   
    useEffect(() => {
    //   const isTokenExpired = (token) => {
    //     if (!token) return true;
    //     const decodedToken = jwtDecode(token);
    //     const currentTime = Date.now() / 1000;
    //     return decodedToken.exp < currentTime;
    //   };

    //   const redirectToRoleDashboard = () => {
    //     if (
    //       accessRole.toLowerCase() === "admin" ||
    //       accessRole.toLowerCase() === "manager" ||
    //       accessRole.toLowerCase() === "agent"
    //     )
    //       router.replace("/admin");
    //     else router.replace("/");
    //   };

      if (options.requireAuth) {
        if (!token) {
        //   dispatch(logout());
          router.push("/");
        } 
        
      } 
    }, [token, pathname]);

    return (options.requireAuth && !token) ||
      (!options.requireAuth && token) ? (
        router.push("/dashboard")
    ) : (
      <WrappedComponent {...props} />
    );
  };

  return AuthComponent;
};

export default withAuth;
