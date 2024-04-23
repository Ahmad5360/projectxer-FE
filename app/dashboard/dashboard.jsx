"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { XERtoolsInfo, excelstoolsInfo } from "../constants/xerTools";
import Link from "next/link";

function Dashboard() {
  const router = useRouter();

  return (
    <div className="pb-10">
      <div className="py-14">
        <p className="text-2xl px-3 text-[#576d7e] text-center py-1 font-semibold md:text-3xl">
          Explore Our Comprehensive Suite of Conversion Tools
        </p>
        <p className="px-3 text-[#576d7e] text-center  md:text-lg">
          Effortlessly Convert Files Across Multiple Formats for Streamlined
          Productivity
        </p>
      </div>
      <div>
        <div className="w-[calc(100%-24px)] mx-auto text-xl text-[#576d7e] font-medium md:text-2xl">
          <p>Using XER Files</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
          {XERtoolsInfo.map((info, index) => (
            <div
              className="p-6 rounded-lg bg-white hover:shadow-lg shadow-md cursor-pointer w-[95%] mx-auto "
              key={index}
            >
              <div>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src={info.image}
                  alt={"image" + index + 1}
                  className="object-fill w-full"
                  onClick={() => router.push(info.link)}
                />
              </div>
              <div className="py-2">
                <p
                  className="font-semibold text-xl hover:text-blue-600"
                  onClick={() => router.push(info.link)}
                >
                  {info.title}
                </p>
                <Link href={info.para} target="_blank">
                  <p className="text-sm hover:text-blue-600">
                    {"Click here for details ->"}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-14">
        <div className="w-[calc(100%-24px)] mx-auto text-xl text-[#576d7e] font-medium md:text-2xl">
          <p>Using Excel Files</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
          {excelstoolsInfo.map((info, index) => (
            <div
              className="p-6 rounded-lg bg-white hover:shadow-lg shadow-md cursor-pointer w-[95%] mx-auto "
              key={index}
            >
              <div>
                <Image
                  width="500"
                  height="500"
                  src={info.image}
                  alt={"image" + index + 1}
                  className="object-fill"
                  onClick={() => router.push(info.link)}
                />
              </div>
              <div className="py-2">
                <p
                  className="font-semibold text-xl hover:text-blue-600"
                  onClick={() => router.push(info.link)}
                >
                  {info.title}
                </p>
                <Link href={info.para} target="_blank">
                  <p className="text-sm hover:text-blue-600">
                    {"Click here for details ->"}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
