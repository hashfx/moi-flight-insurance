"use client";
import React, { useState } from "react";
import { MdFlightTakeoff } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

const Statusbar = () => {
  const [active, setActive] = useState("all");
  const statusHandler = (status: any) => {
    setActive(status);
  };

  return (
    <div className="h-1/2 w-1/4 flex flex-col justify-center space-y-5 items-start bg-white p-10 border border-gray-300 rounded-lg">
      <h1 className="font-semibold text-xl ">Flights</h1>
      <div className="w-full flex flex-col space-y-2">
        <button
          className={`flex justify-between items-center flex-row w-full p-2 rounded-xl ${
            active === "all" ? "bg-[#1A91FF] text-blue-600" : ""
          } bg-opacity-15`}
          onClick={() => statusHandler("all")}
        >
          <div className="flex flex-row items-center justify-center space-x-5">
            <MdFlightTakeoff />
            <p>All</p>
          </div>
          <p>100</p>
        </button>
        <button
          className={`flex justify-between items-center flex-row w-full p-2 rounded-xl ${
            active === "starred" ? "bg-[#1A91FF] text-blue-600" : ""
          } bg-opacity-15`}
          onClick={() => statusHandler("starred")}
        >
          <div className="flex flex-row items-center justify-center space-x-5">
            <CiStar />
            <p>Starred</p>
          </div>
          <p>2</p>
        </button>
        <button
          className={`flex justify-between items-center flex-row w-full p-2 rounded-xl ${
            active === "upcoming" ? "bg-[#1A91FF] text-blue-600" : ""
          } bg-opacity-15`}
          onClick={() => statusHandler("upcoming")}
        >
          <div className="flex flex-row items-center justify-center space-x-5">
            <HiOutlinePaperAirplane />
            <p>Upcoming</p>
          </div>
          <p>5</p>
        </button>
      </div>
    </div>
  );
};

export default Statusbar;
