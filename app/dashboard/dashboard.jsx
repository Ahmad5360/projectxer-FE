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
  const Data = [
    {
      id: 1,
      fileName: "SP01222222222222.xer",
      date: "19-01-2024",
      status: "Completed",
      serviceType: "PV = EV",
    },
    {
      id: 2,
      fileName: "SP02222222222222.xer",
      date: "20-01-2024",
      status: "Pending",
      serviceType: "Type A",
    },
    {
      id: 3,
      fileName: "SP03222222222222.xer",
      date: "21-01-2024",
      status: "In Progress",
      serviceType: "Type B",
    },
    {
      id: 4,
      fileName: "SP04222222222222.xer",
      date: "22-01-2024",
      status: "Completed",
      serviceType: "Type C",
    },
    {
      id: 5,
      fileName: "SP05222222222222.xer",
      date: "23-01-2024",
      status: "Pending",
      serviceType: "Type D",
    },
    {
      id: 6,
      fileName: "SP06222222222222.xer",
      date: "24-01-2024",
      status: "In Progress",
      serviceType: "Type E",
    },
    {
      id: 7,
      fileName: "SP07222222222222.xer",
      date: "25-01-2024",
      status: "Completed",
      serviceType: "Type F",
    },
    {
      id: 8,
      fileName: "SP08222222222222.xer",
      date: "26-01-2024",
      status: "Pending",
      serviceType: "Type G",
    },
    {
      id: 9,
      fileName: "SP09222222222222.xer",
      date: "27-01-2024",
      status: "In Progress",
      serviceType: "Type H",
    },
    {
      id: 10,
      fileName: "SP10222222222222.xer",
      date: "28-01-2024",
      status: "Completed",
      serviceType: "Type I",
    },
    {
      id: 11,
      fileName: "SP11222222222222.xer",
      date: "29-01-2024",
      status: "Pending",
      serviceType: "Type J",
    },
    {
      id: 12,
      fileName: "SP12222222222222.xer",
      date: "30-01-2024",
      status: "In Progress",
      serviceType: "Type K",
    },
  ];

  return (
    <div>
      <div className="flex mx-2 md:mx-0 justify-between sm:items-center py-6 mt-2">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <p className="font-semibold text-center text-2xl">Select Tool</p>
          <div className="w-28 -ml-4 sm:ml-0">
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
        <div className="mt-2 sm:mt-0">
          <label
            htmlFor="fileInput"
            className="rounded-md sm:px-5 px-3 py-2 text-xs sm:text-base text-white bg-slate-500 cursor-pointer hover:bg-slate-400"
          >
            Upload
          </label>
          <input id="fileInput" name="file" type="file" className="hidden" />
        </div>
      </div>
      <div className="overflow-x-auto md:mx-0 mx-2">
        <div className="overflow-x-auto w-full">
          <table className="w-full bg-white border border-solid border-gray-300 mb-4 ">
            <thead className="bg-[#f7e5ff48]  border-b border-solid border-gray-300">
              <tr>
                <th className="border-r h-full border-solid border-gray-300 p-3 md:p-6 md:text-base text-sm">
                  Sr. no
                </th>
                <th className="border-r h-full border-solid border-gray-300 p-3 md:p-6 md:text-base text-sm">
                  File Name
                </th>
                <th className="border-r h-full border-solid border-gray-300 p-3 md:p-6 md:text-base text-sm">
                  Created At.
                </th>
                <th className="border-r h-full border-solid border-gray-300 p-3 md:p-6 md:text-base text-sm">
                  Status
                </th>
                <th className="border-r h-full border-solid border-gray-300 p-3 md:p-6 md:text-base text-sm">
                  Service Type
                </th>
                <th className="border-r h-full border-solid border-gray-300 p-3 md:p-6 md:text-base text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Data &&
                Data.map((data, index) => (
                  <tr
                    key={index}
                    className={`${
                      index < Data.length
                        ? "border border-b border-gray-300"
                        : ""
                    }`}
                  >
                    <td className=" border-r h-full border-solid border-gray-300 text-center p-3 md:p-6 md:text-base text-sm">
                      {data.id}
                    </td>
                    <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:p-6 md:text-base text-sm">
                      {data.fileName}
                    </td>
                    <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:p-6 md:text-base text-sm">
                      {data.date}
                    </td>
                    <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:p-6 md:text-base text-sm">
                      {data.status}
                    </td>
                    <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:p-6 md:text-base text-sm">
                      {data.serviceType}
                    </td>
                    <td className="border-r h-full border-solid border-gray-300 text-center p-3">
                      <div className="flex items-center justify-center md:gap-3 gap-2">
                        <div
                          className="relative text-xs before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0  before:transition-all 
                      after:absolute  after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0  after:transition-all hover:before:opacity-100 hover:after:opacity-100"
                          data-tip="Download Converted File"
                        >
                          <button className="has-tooltip  rounded-md px-3 py-2 text-white text-sm md:text-base bg-slate-500 flex gap-2 items-center hover:bg-slate-400">
                            <FileEarmarkCheck />
                            Converted
                          </button>
                        </div>

                        <div
                          className="relative text-xs before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0  before:transition-all 
                      after:absolute  after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0  after:transition-all hover:before:opacity-100 hover:after:opacity-100"
                          data-tip="Download Original File"
                        >
                          <button className="rounded-md px-3 py-2 text-white text-sm md:text-base bg-slate-500 flex gap-2 items-center hover:bg-slate-400">
                            <FileEarmarkArrowDown />
                            Original
                          </button>
                        </div>
                        <button className="rounded-md px-3 py-2 text-white text-sm md:text-base bg-red-500 flex gap-2 items-center hover:bg-red-400">
                          <Trash3 />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
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
