import React from "react";
import SearchBar from "../Search/SearchBar";
import { stageInfo } from "./stagesInfo";
import Image from "next/image";
import Primary from "@/components/Buttons/Primary";
import Secondary from "@/components/Buttons/Secondary";
import PrimaryDisabled from "@/components/Buttons/PrimaryDisabled";
import SecondaryDisabled from "@/components/Buttons/SecondaryDisabled";
import FlightOnTime from "./FlightOnTime";
const Status = () => {
  return (
    <div className=" my-6 flex flex-col justify-start gap-6">
      {/* Main Box */}
      <div className="w-full">
        {/* Gradient Box */}
        <div
          className="w-full h-56 flex justify-center items-center"
          style={{
            borderRadius: "7px",
            background:
              "radial-gradient(47.08% 82.18% at 50.14% 115.16%, rgba(131, 131, 131, 0.40) 0%, rgba(238, 255, 48, 0.40) 0.01%, rgba(244, 255, 121, 0.00) 100%), radial-gradient(204.41% 111.8% at 100% 0%, rgba(225, 172, 172, 0.40) 0%, rgba(255, 170, 170, 0.00) 100%), radial-gradient(299.79% 113.04% at -4.08% -12.23%, rgba(173, 253, 198, 0.40) 0%, rgba(118, 255, 160, 0.00) 88.38%)",
          }}
        >
          {/* Claim Amount */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-gray-500">
              You are eligible for claiming insurance
            </div>
            <div className="text-5xl font-semibold">₹8000</div>
            <div className="text-gray-500">claim amount</div>
          </div>
        </div>
        {/* Stages */}
        <div className="flex flex-col px-5 my-5 mb-8">
          <div className="text-md font-normal text-gray-500">Stages</div>
          <div className="px-5 flex flex-col">
            {stageInfo.map((singleStage, index) => {
              const { name, token } = singleStage;
              return (
                <div
                  className="flex items-center gap-2 border-b border-gray-300 py-2"
                  key={index}
                >
                  <div className="p-1 bg-white rounded-md">
                    <Image src={"/moi.png"} height={48} width={48} alt="icon" />
                  </div>
                  <div className="flex flex-col gap-1 py-3">
                    <div className="text-md font-semibold">{name}</div>
                    <div className="text-sm font-normal">{token} MOI</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Buttons */}
        <div className="flex gap-5 w-full">
          <div className="w-full">
            <Primary text="Deposit" />
          </div>
          <div className="w-full">
            <Secondary text="Buy Another Insurance" />
          </div>
        </div>
        <div className="flex gap-5 w-full mt-5">
          <div className="w-full">
            <PrimaryDisabled text="Deposit" />
          </div>
          <div className="w-full">
            <SecondaryDisabled text="Buy Another Insurance" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
