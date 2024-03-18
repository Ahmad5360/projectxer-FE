"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import withAuth from "./withAuth";

function Navbar() {
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);
  return (
    <div className="bg-white shadow-md">
      <div className="w-[calc(100%-100px)] mx-auto flex justify-between py-4">
        <div>
          <p className="font-semibold text-3xl">LOGO</p>
        </div>
        <button
          className="rounded-md px-5 py-2 text-white bg-slate-500"
          onClick={() => {
            if (token) {
              localStorage.removeItem("token");
              setToken(null);
              router.push("/auth/login");
            } else router.push("/auth/login");
          }}
        >
          {token ? "Sign Out" : "Sign in"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
