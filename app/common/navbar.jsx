"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import withAuth from "./withAuth";
import Link from "next/link";

function Navbar() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const router = useRouter();

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    setToken(localToken);
  }, [token]);

  

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setToken(null);
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
          onClick={token ? handleSignOut : () => router.push("/auth/login")}
        >
          {token ? "Sign Out" : "Sign in"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
