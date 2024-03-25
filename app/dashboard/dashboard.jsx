"use client";

import { useRouter } from "next/navigation";
import React from "react";

function Dashboard() {
  const route = useRouter();

  const toolsInfo = [
    {
      image: "/tool3.png",
      title: "Convert PV = EV",
      link: "conversionTools/pvtoev",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates porro delectus qui cum nihil, dolorem sit dicta deserunt! Esse doloribus vitae consectetur dicta ut illum eaque amet iure ex alias.",
    },
    {
      image: "/tool4.png",
      title: "Remove Redundant Relationships",
      link: "conversionTools/rrr",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates porro delectus qui cum nihil, dolorem sit dicta deserunt! Esse doloribus vitae consectetur dicta ut illum eaque amet iure ex alias.",
    },
    {
      image: "/tool5.png",
      title: "Solve out of Sequence Activities",
      link: "conversionTools/soos",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates porro delectus qui cum nihil, dolorem sit dicta deserunt! Esse doloribus vitae consectetur dicta ut illum eaque amet iure ex alias.",
    },
    {
      image: "/tool6.png",
      title: "Dangling Activity Detector and Solver",
      link: "conversionTools/dads",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates porro delectus qui cum nihil, dolorem sit dicta deserunt! Esse doloribus vitae consectetur dicta ut illum eaque amet iure ex alias.",
    },
  ];
  return (
    <div>
      <div className="py-14">
        <p className="text-3xl px-3 text-[#576d7e] text-center py-1 font-semibold md:text-3xl">
          Explore Our Comprehensive Suite of Conversion Tools
        </p>
        <p className="text-md px-3 text-[#576d7e] text-center  md:text-lg">
          Effortlessly Convert Files Across Multiple Formats for Streamlined
          Productivity
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-4">
        {toolsInfo.map((info, index) => (
          <div
            className="p-6 rounded-md bg-white hover:shadow-lg shadow-md cursor-pointer w-[95%] mx-auto "
            onClick={() => route.push(info.link)}
            key={index}
          >
            <div>
              <img src={info.image} className="object-fill" />
            </div>
            <div className="py-2">
              <p className="font-semibold text-xl hover:text-blue-600">
                {info.title}
              </p>
              <p className="text-sm">{info.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
