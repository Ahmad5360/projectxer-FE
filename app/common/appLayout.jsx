import React from "react";
import Navbar from "./navbar";

function AppLayout({ children }) {
  return (
    <div>
      <Navbar />

      <div className="w-[calc(100%-100px)] mx-auto">{children}</div>
    </div>
  );
}

export default AppLayout;
