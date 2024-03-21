"use client";

import React from "react";
import {
  DatabaseX,
  FileEarmark,
  FileEarmarkArrowDown,
  FileEarmarkCheck,
  Trash3,
} from "react-bootstrap-icons";
import Select from "react-dropdown-select";

function Dashboard() {
  return (
    <div>
      <div className="flex mx-2 md:mx-0 justify-between items-center py-6 mt-2">
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
            className="rounded-md px-5 py-2 text-white bg-slate-500 cursor-pointer hover:bg-slate-400"
          >
            Upload
          </label>
          <input id="fileInput" name="file" type="file" className="hidden" />
        </div>
      </div>
      <div className="overflow-x-auto md:mx-0 mx-2">
        <div className="overflow-x-auto">
          <table className="md:table-fixed w-full bg-white border border-solid border-gray-300">
            <thead className="bg-[#f7e5ff48]  border-b border-solid border-gray-300">
              <tr>
                <th className="border-r h-full border-solid border-gray-300 p-3 md:p-6">
                  Sr. no
                </th>
                <th className="border-r h-full border-solid border-gray-300 p-3 md:p-6">
                  File Name
                </th>
                <th className="border-r h-full border-solid border-gray-300 p-3 md:p-6">
                  Created At.
                </th>
                <th className="border-r h-full border-solid border-gray-300 p-3 md:p-6">
                  Status
                </th>
                <th className="border-r h-full border-solid border-gray-300 p-3 md:p-6">
                  Service Type
                </th>
                <th className="border-r h-full border-solid border-gray-300 p-3 md:p-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:p-6">
                  1
                </td>
                <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:p-6">
                  SP01.xer
                </td>
                <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:p-6">
                  19-01-2024
                </td>
                <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:p-6">
                  Completed
                </td>
                <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:p-6">
                  PV = EV
                </td>
                <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:p-6">
                  {/* <div className="w-11/12 mx-auto flex items-center justify-center gap-3">
                <button className="rounded-md px-3 py-2 text-white bg-slate-500 flex gap-2 items-center hover:bg-slate-400">
                  <FileEarmarkCheck />
                  Converted File
                </button>
                <button className="rounded-md px-3 py-2 text-white bg-slate-500 flex gap-2 items-center hover:bg-slate-400">
                  <FileEarmarkArrowDown />
                  Download Original
                </button>
                <button className="rounded-md px-3 py-2 text-white bg-red-500 flex gap-2 items-center hover:bg-red-400">
                  <Trash3 />
                  Delete
                </button>
              </div> */}
                  1961
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="bg-white border border-solid border-gray-300 mx-2 md:mx-0">
        <div className="flex bg-[#f7e5ff48]  border-b border-solid border-gray-300">
          <div className="w-3/5 grid grid-cols-5 ">
            <div className="border-r h-full border-solid border-gray-300">
              <p className="text-center p-6 font-bold ">Sr No.</p>
            </div>
            <div className="border-r h-full border-solid border-gray-300">
              <p className="text-center p-6 font-bold ">File Name</p>
            </div>
            <div className="border-r h-full border-solid border-gray-300">
              <p className="text-center p-6 font-bold ">Created At.</p>
            </div>
            <div className="border-r h-full border-solid border-gray-300">
              <p className="text-center p-6 font-bold ">Status</p>
            </div>
            <div className="border-r h-full border-solid border-gray-300">
              <p className="text-center p-6 font-bold ">Service Type</p>
            </div>
          </div>
          <div className="w-2/5">
            <p className="text-center p-6 font-bold ">Actions</p>
          </div>
        </div>
        <div className="flex overflow-x-auto border-b border-solid border-gray-300">
          <div className="w-3/5 grid grid-cols-5 ">
            <div className="border-r h-full border-solid border-gray-300">
              <p className="text-center p-6 ">1</p>
            </div>
            <div className="border-r h-full border-solid border-gray-300">
              <p className="text-center p-6">SP01.xer</p>
            </div>
            <div className="border-r h-full border-solid border-gray-300">
              <p className="text-center p-6 ">19-01-2024</p>
            </div>
            <div className="border-r h-full border-solid border-gray-300">
              <p className="text-center p-6 uppercase">Completed</p>
            </div>
            <div className="border-r h-full border-solid border-gray-300">
              <p className="text-center p-6 ">PV = EV</p>
            </div>
          </div>
          <div className="w-2/5 flex items-center">
            <div className="w-11/12 mx-auto flex items-center justify-center gap-3">
              <button className="rounded-md px-3 py-2 text-white bg-slate-500 flex gap-2 items-center hover:bg-slate-400">
                <FileEarmarkCheck />
                Converted File
              </button>
              <button className="rounded-md px-3 py-2 text-white bg-slate-500 flex gap-2 items-center hover:bg-slate-400">
                <FileEarmarkArrowDown />
                Download Original
              </button>
              <button className="rounded-md px-3 py-2 text-white bg-red-500 flex gap-2 items-center hover:bg-red-400">
                <Trash3 />
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <p className="p-6 text-2xl text-gray-500 flex items-center gap-2">
            {" "}
            <span>
              <DatabaseX />
            </span>
            No Data Found
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Dashboard;
