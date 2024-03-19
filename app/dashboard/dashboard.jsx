"use client";

import React from "react";
import { DatabaseX } from "react-bootstrap-icons";
import Select from "react-dropdown-select";

function Dashboard() {
  
  return (
    <div>
      <div className="flex justify-between items-center py-6 mt-2">
        <div className="flex gap-4 items-center">
          <p className="font-semibold text-center text-2xl">Select Tool</p>
          <div className="w-28">
            <Select
              options={[
                {
                  label: "PV = EV",
                  value: "pv=ev",
                },
                {
                  label: "SOOS",
                  value: "soos",
                },
              ]}
              separator={true}
              placeholder="Select"
              style={{
                backgroundColor: "#fff",
              }}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="fileInput"
            className="rounded-md px-5 py-2 text-white bg-slate-500 cursor-pointer"
            
          >
            Upload
          </label>
          <input id="fileInput" name="file" type="file" className="hidden" />
        </div>
      </div>
      <div className="bg-white border border-solid border-gray-300">
        <div className="grid grid-cols-6 bg-[#f7e5ff48]  border-b border-solid border-gray-300">
          <div className="border-r h-full border-solid border-gray-300">
            <p className="text-center p-6 font-bold text-[#6c1e8d]">Sr No.</p>
          </div>
          <div className="border-r h-full border-solid border-gray-300">
            <p className="text-center p-6 font-bold text-[#6c1e8d]">
              File Name
            </p>
          </div>
          <div className="border-r h-full border-solid border-gray-300">
            <p className="text-center p-6 font-bold text-[#6c1e8d]">
              Created At.
            </p>
          </div>
          <div className="border-r h-full border-solid border-gray-300">
            <p className="text-center p-6 font-bold text-[#6c1e8d]">Status</p>
          </div>
          <div className="border-r h-full border-solid border-gray-300">
            <p className="text-center p-6 font-bold text-[#6c1e8d]">
              Service Type
            </p>
          </div>
          <div className="border-r h-full border-solid border-gray-300">
            <p className="text-center p-6 font-bold text-[#6c1e8d]">Actions</p>
          </div>
        </div>
        {/* <div className="grid grid-cols-6 p-6">
          <div>
            
          </div>
        </div> */}
        <div className="flex items-center justify-center">
          <p className="p-6 text-2xl text-gray-500 flex items-center gap-2">
            {" "}
            <span>
              <DatabaseX />
            </span>
            No Data Found
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
