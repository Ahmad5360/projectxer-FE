import React from "react";
import withAuth from "./common/withAuth";

function HomePage() {
  return (
    <div>
      <p className="text-center font-bold text-4xl text-slate-500 italic py-6">
        Welcome to the world of possibilities!
      </p>
      <div className="flex">
        <div className="w-3/5 flex items-center justify-center">
          <p className="text-lg">Image 1 </p>
        </div>
        <div className="w-2/5 flex items-center justify-center">
          <p className="text-lg">Image 2 </p>
          {/* <div className="w-2/4">
            <div className="relative flex flex-col">
              <div className="mx-auto w-4/5">

              <div className="bg-slate-600 z-50 text-center text-white font-semibold mx-auto px-6 py-4 w-4/5 rounded-md absolute top-1">
                <p className="uppercase text-xl">Our Tools</p>
              </div>
              </div>
              <div className="border border-solid h-16 border-black bg-gray-200 relative mt-8  w-full"></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
