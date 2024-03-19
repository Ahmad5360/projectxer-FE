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
    <div className="bg-white shadow-md">
      <div className="w-[calc(100%-100px)] mx-auto flex justify-between py-4">
        <div>
          <p className="font-semibold text-3xl">
            <Link href={"/"}>LOGO</Link>
          </p>
        </div>
        <button
          className="rounded-md px-5 py-2 text-white bg-slate-500"
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
