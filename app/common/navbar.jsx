"use client";

import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import withAuth from "./withAuth";
import Link from "next/link";
import { AuthContext } from "../auth/authProvider/AuthContext";

function Navbar() {
  const router = useRouter();
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    logout();
    router.push("/auth/login");
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="md:w-[calc(100%-100px)] md:mx-auto mx-2 flex justify-between md:py-3 py-2 items-center">
        <div className="md:w-32 w-16">
          <Link href={"/"}>
            <img src={"/logo.png"} className="object-cover w-full h-full" />
          </Link>
        </div>
        <button
          className="rounded-md md:px-5 px-4 md:py-2 py-1 text-[10px] md:text-base  text-white bg-slate-500 hover:bg-slate-400"
          onClick={
            isLoggedIn ? handleSignOut : () => router.push("/auth/login")
          }
        >
          {isLoggedIn ? "Sign Out" : "Sign in"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
