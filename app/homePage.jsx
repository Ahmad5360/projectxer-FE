import React from "react";
import withAuth from "./common/withAuth";

function HomePage() {
  return (
    <div>
      <p className="text-center font-bold text-4xl text-slate-500 italic py-6">
        Welcome to the world of possibilities!
      </p>
      <div className="flex items-center pt-8">
        <div className="w-3/5 flex flex-col items-center justify-center">
          <div className="w-[70%] mx-auto">
            <img src="/logo.png" className="w-full" />
          </div>
          <p className="font-bold text-2xl text-center">
            Project XER will serve as a complete <br /> Primavera P6 Schedule
            Analytics tool for Planning/Scheduling/Project Controls Engineers &
            Managers
          </p>
        </div>
        <div className="w-2/5 flex justify-center">
          <div className="w-[90%] mx-auto">
            <div className="w-1/2 mx-auto flex justify-center items-center">
              <img src="/tools_main.png" />
            </div>
            <div className="grid grid-cols-2 gap-3 my-4">
              <div>
                <img src="/tool1.png" />
              </div>
              <div>
                <img src="/tool2.png" />
              </div>
              <div>
                <img src="/tool3.png" />
              </div>
              <div>
                <img src="/tool4.png" />
              </div>
              <div>
                <img src="/tool5.png" />
              </div>
              <div>
                <img src="/tool6.png" />
              </div>
            </div>
            <div className="w-1/2 mx-auto flex justify-center items-center">
              <img src="/tool_last.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
