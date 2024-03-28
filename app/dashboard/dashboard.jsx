"use client";

import { useRouter } from "next/navigation";
import React from "react";

function Dashboard() {
  const router = useRouter();

  const excelstoolsInfo = [
    {
      image: "/tool4.png",
      title: "Remove Redundant Relationships",
      link: "conversionTools/rrr",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates porro delectus qui cum nihil, dolorem sit dicta deserunt! Esse doloribus vitae consectetur dicta ut illum eaque amet iure ex alias.",
    },

    {
      image: "/tool6.png",
      title: "Dangling Activity Detector and Solver",
      link: "conversionTools/dads",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates porro delectus qui cum nihil, dolorem sit dicta deserunt! Esse doloribus vitae consectetur dicta ut illum eaque amet iure ex alias.",
    },
    {
      image: "/tool8.png",
      title: "Critical Path Drag",
      link: "conversionTools/cpd",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates porro delectus qui cum nihil, dolorem sit dicta deserunt! Esse doloribus vitae consectetur dicta ut illum eaque amet iure ex alias.",
    },
  ];
  const XERtoolsInfo = [
    {
      image: "/tool3.png",
      title: "Convert PV = EV",
      link: "conversionTools/pvtoev",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates porro delectus qui cum nihil, dolorem sit dicta deserunt! Esse doloribus vitae consectetur dicta ut illum eaque amet iure ex alias.",
    },

    {
      image: "/tool5.png",
      title: "Solve out of Sequence Activities",
      link: "conversionTools/soos",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates porro delectus qui cum nihil, dolorem sit dicta deserunt! Esse doloribus vitae consectetur dicta ut illum eaque amet iure ex alias.",
    },
    {
      image: "/tool7.png",
      title: "X-POBS",
      link: "conversionTools/x-pobs",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates porro delectus qui cum nihil, dolorem sit dicta deserunt! Esse doloribus vitae consectetur dicta ut illum eaque amet iure ex alias.",
    },
    {
      image: "/tool9.png",
      title: "X-RISKTYPE",
      link: "conversionTools/x-risktype",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates porro delectus qui cum nihil, dolorem sit dicta deserunt! Esse doloribus vitae consectetur dicta ut illum eaque amet iure ex alias.",
    },
  ];

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
              onClick={() => router.push(info.link)}
              key={index}
            >
              <div>
                <img
                  src={info.image}
                  alt={"image" + index + 1}
                  className="object-fill"
                />
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
      <div className="my-14">
        <div className="w-[calc(100%-24px)] mx-auto text-xl text-[#576d7e] font-medium md:text-2xl">
          <p>Using Excel Files</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
          {excelstoolsInfo.map((info, index) => (
            <div
              className="p-6 rounded-lg bg-white hover:shadow-lg shadow-md cursor-pointer w-[95%] mx-auto "
              onClick={() => router.push(info.link)}
              key={index}
            >
              <div>
                <img
                  src={info.image}
                  alt={"image" + index + 1}
                  className="object-fill"
                />
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
    </div>
  );
}

export default Dashboard;
