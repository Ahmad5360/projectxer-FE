import React from "react";
import withAuth from "./common/withAuth";

function HomePage() {
  return (
    <div>
      <div className="text-3xl px-3 text-[#576d7e] text-center italic pt-6 font-bold md:text-4xl">
        Welcome to the world of possibilities!
      </div>
      <div className=" flex flex-col w-[100%] mt-6 items-center justify-center md:flex-row md:mt-10">
        <div className="md:w-3/5 w-full flex flex-col items-center justify-center">
          <div className=" w-3/4 md:w-[70%] mx-auto">
            <img alt="image1" src="/logo.png" className="w-full" />
          </div>
          <div
            class="font-bold text-sm text-center md:text-3xl"
            style={{ textShadow: "rgba(0, 0, 0, 0.6) 1px 2px 7px;" }}
          >
            <div>Project XER will serve as a complete</div>
            <div>
              Primavera P6 Schedule Analytics tool for
              Planning/Scheduling/Project Controls Engineers &amp; Managers
            </div>
          </div>
        </div>
        <div className="md:w-2/5 w-4/5 pb-4 md:pb-0 flex justify-center">
          <div className="w-[90%] mt-4 md:mt-0 mx-auto">
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
              <div>
                <img src="/tool7.png" />
              </div>
              <div>
                <img src="/tool8.png" />
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
