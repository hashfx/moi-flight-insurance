"use client";
import Image from "next/image";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { MdOutlineFlight } from "react-icons/md";
import { MdWallet } from "react-icons/md";
import { useParams } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";

const Sidebar = () => {
  const router = useParams();
  console.log(router);
  const handleLogout = () => {
    console.log("logout");
  };
  return (
    <div className="h-screen flex flex-col justify-between items-start w-1/5 p-10 bg-white">
      <div className="flex flex-col space-y-20">
        <div className="flex flex-row items-start justify-start space-x-5">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={1000}
              height={1000}
              className="w-16 h-16"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-start items-start space-y-5">
          <Link
            href={"/dashboard"}
            className="text-gray-400 flex flex-row space-x-5 text-lg font-normal justify-center items-center font-[Montserrat]"
          >
            <MdDashboard />
            <h1 className="">Dashboard</h1>
          </Link>
          <Link
            href={"/dashboard/status"}
            className="text-gray-400 flex flex-row space-x-5 text-lg font-normal justify-center items-center font-[Montserrat]"
          >
            <MdOutlineFlight />
            <h1 className="">Flight Status</h1>
          </Link>
          <Link
            href={"/dashboard/claim"}
            className="text-gray-400 flex flex-row space-x-5 text-lg font-normal justify-center items-center font-[Montserrat]"
          >
            <MdWallet />
            <h1 className="">Claim Status</h1>
          </Link>
        </div>
      </div>
      <div>
        <div>
          <button
            className="flex flex-row space-x-5 text-lg font-medium text-red-500 justify-center items-center font-[Montserrat]"
            onClick={handleLogout}
          >
            <CiLogout />
            <h1 className="">Logout</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
