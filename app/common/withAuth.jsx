"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import Loader from "./loader";
import { jwtDecode } from "jwt-decode";

const withAuth = (WrappedComponent, options = {}) => {
  const AuthComponent = (props) => {
    const router = useRouter();
    const token = useSelector((state) => state.user?.user?.token);
    const dispatch = useDispatch();

    useEffect(() => {
      const isTokenExpired = (token) => {
        if (!token) return true;
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp < currentTime;
      };

      if (options.requireAuth) {
        if (!token || isTokenExpired(token)) {
          dispatch(logout());
          router.push("/");
        }
      }
    }, [token]);

    return options.requireAuth && !token ? (
      <Loader />
    ) : (
      <WrappedComponent {...props} />
    );
  };

  return AuthComponent;
};

export default withAuth;
