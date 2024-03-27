"use-client";

import React from "react";
import "./loader.css";
function Loader() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-150px)]">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
