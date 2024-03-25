import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="">
      <div className="bg-slate-500 text-center p-4 text-white">
        <Link href={"/about"}>
          <p className="text-white font-semibold ">About Us</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
