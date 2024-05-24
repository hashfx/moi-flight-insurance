import React from "react";
import SearchBar from "@/components/Dashboard/Search/SearchBar";
import AuthModel from "@/components/Auth/AuthModel";
import Details from "@/components/Dashboard/Details/Details";
import { IoBugOutline } from "react-icons/io5";
import Link from "next/link";
import FlighInsurance from "@/components/DashboardRedesign/InsuranceDetail";

const page = () => {
	return (
		<div className="w-screen h-screen p-5 select-none space-y-10 justify-between flex flex-col">
			{/* <div className="flex flex-row justify-between items-center">
        <SearchBar />
        <AuthModel />
      </div>
      <div className="container bg-opacity-35">
        <Details />
      </div>
      <div className="flex flex-row justify-between items-center">
        <Link
          href={"/report"}
          className="flex flex-row justify-center items-center space-x-2"
        >
          <IoBugOutline /> <span>Report an Issue</span>
        </Link>
        <button className="bg-[#c5c5c5] p-3 rounded-lg text-gray-800">
          Claim Insurance
        </button>
      </div> */}
			<FlighInsurance />
		</div>
	);
};

export default page;
