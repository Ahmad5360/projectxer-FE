"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import Image from "next/image";

function Navbar() {
  const router = useRouter();
  const token = useSelector((state) => state.user?.user?.token);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logout());

    router.push("/auth/login");
  };

  

  return (
    <div className="bg-white shadow-md fixed w-full top-0">
      <div className="md:w-[calc(100%-100px)] md:mx-auto mx-2 flex justify-between py-2 items-center">
        <div className="md:w-32 w-16">
          <Link href={"/"}>
            <Image
              width="500"
              height="500"
              src={"/logo.png"}
              alt="logo"
              className="object-cover w-full h-full"
            />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          {token && (
            <button
              className="rounded-md md:px-5 px-4 md:py-2 py-1 text-[10px] md:text-sm  text-white bg-slate-500 hover:bg-slate-400"
              onClick={() => router.push("/dashboard")}
            >
              Dashboard
            </button>
          )}
          <button
            className="rounded-md md:px-5 px-4 md:py-2 py-1 text-[10px] md:text-sm  text-white bg-slate-500 hover:bg-slate-400"
            onClick={token ? handleSignOut : () => router.push("/auth/login")}
          >
            {token ? "Sign Out" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
