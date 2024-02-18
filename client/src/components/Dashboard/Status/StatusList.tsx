import React from "react";
import SearchBar from "../Search/SearchBar";
import Image from "next/image";
import { FaInfoCircle } from "react-icons/fa";
import StatusCard from "../Details/StatusCard";

const data = [
  {
    id: 1,
    name: "Flight 1",
    date: "12/12/2021",
    type: "Domestic",
    status: "Scheduled",
  },
  {
    id: 2,
    name: "Flight 2",
    date: "12/12/2021",
    type: "Domestic",
    status: "Scheduled",
  },
  {
    id: 3,
    name: "Flight 3",
    date: "12/12/2021",
    type: "Domestic",
    status: "Scheduled",
  },
  {
    id: 4,
    name: "Flight 4",
    date: "12/12/2021",
    type: "Domestic",
    status: "Scheduled",
  },
  {
    id: 5,
    name: "Flight 5",
    date: "12/12/2021",
    type: "Domestic",
    status: "Scheduled",
  },
  {
    id: 6,
    name: "Flight 6",
    date: "12/12/2021",
    type: "Domestic",
    status: "Scheduled",
  },
  {
    id: 7,
    name: "Flight 7",
    date: "12/12/2021",
    type: "Domestic",
    status: "Scheduled",
  },
  {
    id: 8,
    name: "Flight 8",
    date: "12/12/2021",
    type: "Domestic",
    status: "Scheduled",
  },
  {
    id: 9,
    name: "Flight 9",
    date: "12/12/2021",
    type: "Domestic",
    status: "Scheduled",
  },
  {
    id: 10,
    name: "Flight 10",
    date: "12/12/2021",
    type: "Domestic",
    status: "Scheduled",
  },
  {
    id: 11,
    name: "Flight 11",
    date: "12/12/2021",
    type: "Domestic",
    status: "Scheduled",
  },
  {
    id: 12,
    name: "Flight 12",
    date: "12/12/2021",
    type: "Domestic",
    status: "Scheduled",
  },
];

const StatusList = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full bg-white ml-10 rounded-lg border p-2">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="w-1/2 px-3 rounded-full py-1 flex items-center gap-3 outline-none bg-white text-black border m-2">
          <div>
            <Image
              src={"/search-icon.svg"}
              height={20}
              width={20}
              alt="search-icon"
            />
          </div>
          <div className="text-sm">
            <input
              type="text"
              placeholder="Search Flight"
              className="p-2 outline-none placeholder-[#A1A2AF]"
            />
          </div>
        </div>
        <button className="p-2 rounded-xl">
          <FaInfoCircle />
        </button>
      </div>
      <div className="list grid grid-cols-5 w-full place-items-center">
        <div>ID</div>
        <div>Name</div>
        <div>Date</div>
        <div>Type</div>
        <div>Status</div>
      </div>
      <div className="overflow-scroll w-full">
        {data &&
          data.map((value, id) => {
            return (
              <>
                <div
                  key={id}
                  className="grid grid-cols-5 place-items-center border-b-2 p-4 text-gray-500 font-semibold font-['Nunito Sans']"
                >
                  <div>{value.id}</div>
                  <div>{value.name}</div>
                  <div>{value.date}</div>
                  <div>{value.type}</div>
                  <div>
                    <StatusCard />
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default StatusList;
