import Image from "next/image";
import React from "react";
import { XERtoolsInfo, excelstoolsInfo } from "./constants/xerTools";
import { useRouter } from "next/navigation";

function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="text-3xl md:mt-8 px-3 text-[#576d7e] text-center italic pt-6 font-bold md:text-4xl">
        Welcome to the world of possibilities!
      </div>
      <div className=" flex flex-col w-[100%] my-6 items-center justify-center md:flex-row md:mt-10">
        <div className="md:w-3/5 w-full flex flex-col items-center justify-center">
          <div className=" w-3/4 md:w-[70%] mx-auto">
            <Image
              alt="image1"
              className="w-full"
              src="/logo.png"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div
            className="font-bold text-sm text-center md:text-3xl"
            style={{ textShadow: "rgba(0, 0, 0, 0.6) 1px 2px 7px" }}
          >
            <div>Project XER will serve as a complete</div>
            <div>
              Primavera P6 Schedule Analytics tool tailored for Planning,
              Scheduling, Project Controls Engineers, &amp; Managers
            </div>
          </div>
        </div>
        <div className="md:w-2/5 w-4/5 pb-4 md:pb-0 flex justify-center">
          <div className="w-[90%] mt-4 md:mt-0 mx-auto">
            <div className="w-1/2 mx-auto flex justify-center items-center">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                className="w-full"
                src="/tools_main.png"
                alt="tool"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 my-4">
              <div>
                <Image width="500" height="500" src="/tool1.png" alt="tool" />
              </div>
              <div>
                <Image width="500" height="500" src="/tool2.png" alt="tool" />
              </div>
              <div
                onClick={() => router.push(XERtoolsInfo[0].link)}
                className="cursor-pointer"
              >
                <Image width="500" height="500" src="/tool3.png" alt="tool" />
              </div>
              <div
                onClick={() => router.push(excelstoolsInfo[0].link)}
                className="cursor-pointer"
              >
                <Image width="500" height="500" src="/tool4.png" alt="tool" />
              </div>
              <div
                onClick={() => router.push(XERtoolsInfo[1].link)}
                className="cursor-pointer"
              >
                <Image width="500" height="500" src="/tool5.png" alt="tool" />
              </div>
              <div
                onClick={() => router.push(excelstoolsInfo[1].link)}
                className="cursor-pointer"
              >
                <Image width="500" height="500" src="/tool6.png" alt="tool" />
              </div>
              <div
                onClick={() => router.push(XERtoolsInfo[2].link)}
                className="cursor-pointer"
              >
                <Image width="500" height="500" src="/tool7.png" alt="tool" />
              </div>
              <div
                onClick={() => router.push(excelstoolsInfo[2].link)}
                className="cursor-pointer"
              >
                <Image width="500" height="500" src="/tool8.png" alt="tool" />
              </div>
              <div
                onClick={() => router.push(XERtoolsInfo[3].link)}
                className="cursor-pointer"
              >
                <Image width="500" height="500" src="/tool9.png" alt="tool" />
              </div>
              <div
                // onClick={() => router.push(XERtoolsInfo[3].link)}
                className="cursor-pointer"
              >
                {/* <Image width="500" height="500" src="/tool9.png" alt="tool" /> */}
              </div>
              <div
                onClick={() => router.push(XERtoolsInfo[4].link)}
                className="cursor-pointer"
              >
                <Image width="500" height="500" src="/tool10.png" alt="tool" />
              </div>
            </div>
            <div className="w-1/2 mx-auto flex justify-center items-center">
              <Image width="500" height="500" src="/tool_last.png" alt="tool" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
