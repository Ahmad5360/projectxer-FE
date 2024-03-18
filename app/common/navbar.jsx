import React from "react";

function Navbar() {
  return (
    <div className="bg-white">
      <div className="w-[calc(100%-100px)] mx-auto flex justify-between py-4">
        <div>
          <p className="font-semibold text-3xl">LOGO</p>
        </div>
        <button className="rounded-md px-5 py-2 text-white bg-slate-500">
            Sign Out
        </button>
      </div>
    </div>
  );
}

export default Navbar;
