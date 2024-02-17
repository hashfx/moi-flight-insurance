import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import Detail from "./Detail";
import StatusCard from "./StatusCard";

const Details = () => {
  return (
    <div className="h-full w-full border border-gray-300 rounded-xl px-5 py-10 flex flex-col space-y-10">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-xl">Insurance Details</h1>
        <button className="text-2xl text-gray-700">
          <AiOutlineDownload />
        </button>
      </div>
      <div className="grid grid-cols-3 rounded-xl border border-gray-400 p-5 gap-10">
        <div className="grid grid-rows-3 gap-10">
          <Detail title="Insurance Number :" value="0x1aBcD3eF" />
          <Detail title="PNR Number :" value="XYZ789" />
          <Detail title="Flight Number :" value="AA123" />
        </div>
        <div className="grid grid-rows-3 gap-10">
          <Detail title="Passenger Name :" value="John Doe" />
          <Detail title="Boarding From :" value="Los Angeles (LAX)" />
          <Detail title="Boarding To :" value="New York (JFK)" />
        </div>
        <div className="grid grid-rows-3 gap-10">
          <Detail title="Date of Flight :" value="2024-03-15" />
          <Detail title="Premium Paid :" value="₹ 800" />
          <Detail title="Claimable Amount :" value="₹ 8000" />
        </div>
      </div>
      <div className="flex flex-row space-x-5">
        <p>Flight Status :</p> <StatusCard />
      </div>
    </div>
  );
};

export default Details;
