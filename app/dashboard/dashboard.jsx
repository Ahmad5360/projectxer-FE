"use client";

import { useRouter } from "next/navigation";
import React from "react";

function Dashboard() {
  const route = useRouter();
  return (
    <div>
      <div>
        <p className="text-3xl px-3 text-[#576d7e] text-center py-10 font-bold md:text-3xl">
          Here are your converstions you can perform
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mb-4">
        <div
          className="p-6 rounded-md bg-white shadow-md cursor-pointer"
          onClick={() => route.push("/pvtoev")}
        >
          <div>
            <img src="/tool3.png" className="object-fill" />
          </div>
          <div className="py-2">
            <p className="font-semibold text-xl hover:text-blue-600">
              Convert PV = EV{" "}
            </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates porro delectus qui cum nihil, dolorem sit dicta
              deserunt! Esse doloribus vitae consectetur dicta ut illum eaque
              amet iure ex alias.
            </p>
          </div>
        </div>
        <div className="p-6 rounded-md bg-white shadow-md cursor-pointer">
          <div>
            <img src="/tool4.png" className="object-fill" />
          </div>
          <div className="py-2">
            <p className="font-semibold text-xl">
              Remove Redundant Relationships{" "}
            </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates porro delectus qui cum nihil, dolorem sit dicta
              deserunt! Esse doloribus vitae consectetur dicta ut illum eaque
              amet iure ex alias.
            </p>
          </div>
        </div>
        <div className="p-6 rounded-md bg-white shadow-md cursor-pointer">
          <div>
            <img src="/tool3.png" className="object-fill" />
          </div>
          <div className="py-2">
            <p className="font-semibold text-xl">Convert PV = EV </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates porro delectus qui cum nihil, dolorem sit dicta
              deserunt! Esse doloribus vitae consectetur dicta ut illum eaque
              amet iure ex alias.
            </p>
          </div>
        </div>
        <div className="p-6 rounded-md bg-white shadow-md cursor-pointer">
          <div>
            <img src="/tool3.png" className="object-fill" />
          </div>
          <div className="py-2">
            <p className="font-semibold text-xl">Convert PV = EV </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates porro delectus qui cum nihil, dolorem sit dicta
              deserunt! Esse doloribus vitae consectetur dicta ut illum eaque
              amet iure ex alias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
