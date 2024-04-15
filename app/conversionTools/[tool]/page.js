"use client";

import React, { useEffect, useState } from "react";
import {
  CloudArrowUp,
  DatabaseX,
  FileEarmarkArrowDown,
  FileEarmarkCheck,
  FileEarmarkText,
  Trash,
  Trash3,
  X,
} from "react-bootstrap-icons";
import Select from "react-dropdown-select";
import withAuth from "@/app/common/withAuth";
import { usePathname } from "next/navigation";
import { convertFile, deleteFiles, getFiles } from "@/app/apis";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function PvToEvPage() {
  const [conformdelete, setDelete] = useState(null);
  const [fileUploadpop, setfileUploadpop] = useState(null);
  const [toolName, settoolName] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [filesList, setFilesList] = useState([]);
  const [fileallowed, setfileallowed] = useState(null);
  const [file, setfile] = useState(null);
  const pathname = usePathname();
  const lastPart = pathname.split("/").pop();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const token = useSelector((state) => state.user?.user?.token);
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

  useEffect(() => {
    if (lastPart === "pvtoev") {
      settoolName("PV to EV Conversion");
    } else if (lastPart === "soos") {
      settoolName("Solve out of Sequence Activities");
    } else if (lastPart === "x-pobs") {
      settoolName("X-POBS");
    } else if (lastPart === "x-risktype") {
      settoolName("X-RISKTYPE");
    } else if (lastPart === "rrr") {
      settoolName("Remove Redundant Relationships");
    } else if (lastPart === "dads") {
      settoolName("Dangling Activity Detector and Solver");
    } else if (lastPart === "cpd") {
      settoolName("Critical Path Drag");
    }

    if (
      lastPart === "pvtoev" ||
      lastPart === "soos" ||
      lastPart === "x-pobs" ||
      lastPart === "x-risktype"
    )
      setfileallowed(".xer");
    else setfileallowed(".xlsx");

    setLoading(true);
    getFiles(token, lastPart)
      .then((response) => {
        setFilesList(response.data.files);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setLoading(false);
        setResponse(null);
      });
  }, []);

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("file", file);
    setProcessing(true);
    convertFile(token, formData)
      .then((response) => {
        setfileUploadpop(false);
        setfile(null);

        setFilesList([...filesList, response.data.converted]);
        setLoading(false);
        toast.success(response.data.message);
        setProcessing(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setProcessing(false);
        setfileUploadpop(false);
        setLoading(false);
        setResponse(null);
      });
  };
  const deleteFile = () => {
    setLoading2(true);
    deleteFiles(token, deleteId)
      .then((response) => {
        const data = filesList.filter((item) => item._id !== deleteId.id);
        setFilesList(data);
        setDelete(false);
        setLoading2(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setDelete(false);
        setLoading2(false);
        setResponse(null);
      });
  };


  return (
    <div>
      {conformdelete && (
        <div
          onClick={() => setDelete(false)}
          className={`
          fixed inset-0 flex justify-center items-center transition-colors
           bg-black/30 z-50
        `}
        >
          {/* modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            className={`
            bg-white rounded-xl shadow p-6 transition-all
            ${conformdelete ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          `}
          >
            <button
              onClick={() => {
                setDelete(false);
                setfile(null);
              }}
              disabled={loading2}
              className="text-lg absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-100 hover:text-gray-600"
            >
              <X size={26} />
            </button>
            <div className="text-center w-56">
              <Trash size={56} className="mx-auto text-red-500" />
              <div className="mx-auto my-4 w-56">
                <h3 className="text-lg font-black text-gray-800">
                  Confirm Delete
                </h3>
                <p className="text-sm text-gray-500">
                  Are you sure you want to delete this item?
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  className="btn btn-danger w-full hover:bg-gray-100 px-4 py-2 rounded-md"
                  onClick={() => deleteFile()}
                  disabled={loading2}
                >
                  {loading2 ? "Deleting..." : "Delete"}
                </button>
                <button
                  className="btn btn-light w-full hover:bg-gray-100 px-4 py-2 rounded-md"
                  onClick={() => setDelete(false)}
                  disabled={loading2}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {fileUploadpop && (
        <div
          onClick={() => setfileUploadpop(false)}
          className={`
          fixed inset-0 flex justify-center items-center transition-colors
           bg-black/30 z-50
        `}
        >
          {/* modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            className={`
            bg-white mx-3 md:mx-0 rounded-xl shadow p-6 transition-all w-[800px]
            ${fileUploadpop ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          `}
          >
            <button
              onClick={() => {
                setfileUploadpop(false);
                setfile(null);
              }}
              className="text-lg absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-100 hover:text-gray-600"
            >
              <X size={32} />
            </button>
            <div className={`${processing ? "pointer-events-none" : ""}`}>
              <h2 className="text-xl py-4 font-semibold">
                Upload Your File Here :
              </h2>
              <label htmlFor="fileInput" className="cursor-pointer">
                <div className="mt-2">
                  <div className="bg-slate-300 rounded-lg border border-dashed border-black flex justify-center items-center p-10">
                    <div className="text-center">
                      {file ? (
                        <div className="flex justify-center py-4">
                          <div className="flex flex-col justify-center mt-2 w-full">
                            <div className="relative flex justify-center">
                              <button
                                onClick={() => setfile(null)}
                                className="text-slate-500 top-0 right-0 absolute"
                              >
                                <X size={28} />
                              </button>
                              <button
                                // onClick={() => setfileUploadpop(false)}
                                className="text-slate-500 pt-4"
                              >
                                <FileEarmarkText size={64} />
                              </button>
                            </div>
                            <p className="text-sm">{file.name}</p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex justify-center">
                            <CloudArrowUp
                              size={64}
                              className="text-slate-500"
                            />
                          </div>
                          <div className="pb-4">
                            <p className="text-lg font-light">
                              Click here to select file
                            </p>
                          </div>
                        </>
                      )}
                      <label
                        htmlFor="fileInput"
                        className="rounded-md px-5 py-2 text-base text-white bg-slate-500 cursor-pointer hover:bg-slate-400"
                      >
                        Browse Files
                      </label>
                    </div>
                  </div>
                </div>
                <input
                  id="fileInput"
                  name="file"
                  type="file"
                  accept={fileallowed}
                  className="hidden"
                  onChange={(e) => {
                    setfile(e.target.files[0]);
                  }}
                />
              </label>
            </div>

            <div className="flex pt-4">
              <button
                onClick={() => handleSubmit()}
                disabled={!file}
                className={`rounded-md w-full md:px-5 px-4 md:py-2 py-1 text-[10px] md:text-base  text-white ${
                  file ? "bg-slate-500" : "bg-slate-400"
                } hover:bg-slate-400`}
              >
                {processing ? "Processing..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="pt-8 pb-6 md:mx-0 mx-2 flex justify-between items-center md:mt-8">
        <p className="text-xl text-[#576d7e] font-semibold md:text-3xl">
          {toolName ? toolName : ""}
        </p>
        <div className="mt-2 sm:mt-0" onClick={() => setfileUploadpop(true)}>
          <p className="rounded-md sm:px-5 px-3 py-2 text-xs sm:text-base text-white bg-slate-500 cursor-pointer hover:bg-slate-400">
            Upload
          </p>
        </div>
      </div>
      <div className="overflow-x-auto md:mx-0 mx-2 ">
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

            {!loading ? (
              <>
                {filesList && filesList.length > 0 ? (
                  <tbody>
                    {filesList &&
                      filesList.map((data, index) => (
                        <tr
                          key={index}
                          className={`${
                            index < Data.length
                              ? "border border-b border-gray-300"
                              : ""
                          }`}
                        >
                          <td className=" border-r h-full border-solid border-gray-300 text-center p-3 md:p-6 md:text-base text-sm">
                            {index + 1}
                          </td>
                          <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:p-6 md:text-base text-sm">
                            {data.fileName}
                          </td>
                          <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:p-6 md:text-base text-sm">
                            {data.createdAt.split("T")[0]}
                          </td>
                          <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:p-6 md:text-base text-sm">
                            {data.status}
                          </td>
                          <td className="border-r h-full border-solid border-gray-300 text-center p-3 md:p-6 md:text-base text-sm">
                            {data.type}
                          </td>
                          <td className="border-r h-full border-solid border-gray-300 text-center p-3">
                            <div className="flex items-center justify-center md:gap-3 gap-2">
                              <div
                                className="relative text-xs before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0  before:transition-all 
after:absolute  after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0  after:transition-all hover:before:opacity-100 hover:after:opacity-100"
                                data-tip="Download Converted File"
                              >
                                <button
                                  onClick={() =>
                                    window.open(
                                      process.env
                                        .NEXT_PUBLIC_S3_BUCKET_BASE_URL +
                                        data.converted,
                                      "_blank"
                                    )
                                  }
                                  className="has-tooltip  rounded-md px-3 py-2 text-white text-sm md:text-base bg-slate-500 flex gap-2 items-center hover:bg-slate-400"
                                >
                                  <FileEarmarkCheck />
                                  Converted
                                </button>
                              </div>

                              <div
                                className="relative text-xs before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0  before:transition-all 
after:absolute  after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0  after:transition-all hover:before:opacity-100 hover:after:opacity-100"
                                data-tip="Download Original File"
                              >
                                <button
                                  onClick={() =>
                                    window.open(
                                      process.env
                                        .NEXT_PUBLIC_S3_BUCKET_BASE_URL +
                                        data.original,
                                      "_blank"
                                    )
                                  }
                                  className="rounded-md px-3 py-2 text-white text-sm md:text-base bg-slate-500 flex gap-2 items-center hover:bg-slate-400"
                                >
                                  <FileEarmarkArrowDown />
                                  Original
                                </button>
                              </div>
                              <button
                                type="button"
                                className="rounded-md px-3 py-2 text-white text-sm md:text-base bg-red-500 flex gap-2 items-center hover:bg-red-400"
                                onClick={() => {
                                  setDelete(true);
                                  setDeleteId({
                                    id: data._id,
                                    original: data.original,
                                    converted: data.converted,
                                  });
                                }}
                              >
                                <Trash3 />
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <td colSpan="6" className="text-center py-6">
                        <p className="text-gray-500 text-xl md:text-2xl flex items-center justify-center gap-2">
                          <span>
                            <DatabaseX />
                          </span>
                          No Data Found
                        </p>
                      </td>
                    </tr>
                  </tbody>
                )}
              </>
            ) : (
              <tbody>
                <tr>
                  <td colSpan="6" className="text-center py-6">
                    <p className="text-gray-500 text-xl md:text-2xl flex items-center justify-center gap-2">
                      
                      Loading...
                    </p>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default withAuth(PvToEvPage, { requireAuth: true });
