'use client'
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import { flightDetails, useAuth } from '@/context/AuthContext';
import Form from "@/components/Auth/Form";
import { useState } from "react";

export default function Home() {
  const { setClaimDetails, setPnrNumber, wallet } = useAuth();
  const [open, setOpen] = useState(false);
  const handlePlanSelection = (planDetails: flightDetails) => {
    if (!wallet) {
      alert('First login')
      return;
    } 
    setClaimDetails(planDetails);
    setOpen(true);
  };
  return (
    <>
    <main className="main-div ">
      <Navbar />
      <div className="container mx-auto flex flex-col space-y-12 p-5 ">
        <div className="flex flex-col text-6xl mx-auto font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#06162D] to-[#0C68BE] font-[Playfair] text-center">
          <div className="mt-8">Get Rid of delaying flights,</div>
          <div>get your precious time back monetarily</div>
        </div>
        <div className="h-full w-2/3 flex flex-col justify-center items-center space-y-5 bg-white rounded-lg mx-auto font-[Montserrat] p-10 border border-[#d4d4d4]">
          <div className="flex flex-row space-x-2 justify-center items-center">
            <Image
              src={"/flighticon.png"}
              width={100}
              height={100}
              className="w-5 h-5"
              alt="flight-icon"
            />
            <h1 className="font-bold">Enter PNR Number</h1>
          </div>
          <input
            type="text"
            className=" border-b border-[#404040] outline-none p-2 "
            onChange={(e) => setPnrNumber(e.target.value)}
            placeholder="A1KYRK"
          />
          <div className="flex justify-center items-center flex-col space-y-10">
            <h1>Select a Plan</h1>
            <div className="grid grid-cols-3 gap-10">
              <div className="flex flex-col justify-center items-center space-y-12 py-2 px-4 bg-[#f5f5f5] rounded-xl">
                <div className="border-b w-full flex flex-col justify-center items-center mx-auto">
                  <h1 className="font-semibold text-2xl text-[#4d4d4d]">
                    Family
                  </h1>
                  <h4 className="font-medium text-lg">₹ 200 / user</h4>
                </div>
                <div className="flex flex-col space-y-5">
                  <p className="flex flex-row items-center justify-start space-x-2">
                    <span>✅</span>
                    <span> Personal Dashboard</span>
                  </p>
                  <p className="flex flex-row items-center justify-center space-x-2">
                    <span>✅</span>
                    <span> Real Time Settlement</span>
                  </p>
                </div>
                <button className="text-white bg-blue-500  font-medium px-4 py-2 rounded-2xl" onClick={
                  () => handlePlanSelection({
                    claimableAmount: "RS3000",
                    premiumPaid: "FAMILY",
                  })
                }>
                  Claim for ₹ 3000 →
                </button>
              </div>
              <div className="flex flex-col text-white justify-center items-center space-y-12 py-5 scale-110 px-4 bg-gradient-to-tr from-black to-gray-900 rounded-xl">
                <div className="border-b w-full flex flex-col justify-center items-center mx-auto">
                  <h1 className="font-semibold text-2xl text-white">
                    Ensure Pro
                  </h1>

                  <h4 className="font-medium text-lg">
                    ₹ <s>1100</s>{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r text-2xl from-cyan-300 to-cyan-500  sparkle">
                      {/* <Sparkles color="teal" overflowPx={8} /> */}
                      800{" "}
                    </span>
                    / user
                  </h4>
                </div>
                <div className="flex flex-col space-y-5">
                  <p className="flex flex-row items-center justify-start space-x-2">
                    <span>✅</span>
                    <span> Priority Claim Settlement</span>
                  </p>
                  <p className="flex flex-row items-center justify-center space-x-2">
                    <span>✅</span>
                    <span> Priority Customer Service</span>
                  </p>
                  <p className="flex flex-row items-center justify-center space-x-2">
                    <span>✅</span>
                    <span> Every Purchase will cover 2 Flights</span>
                  </p>
                </div>
                <button className="text-white bg-blue-500  font-medium px-4 py-2 rounded-2xl" onClick={
                  () => handlePlanSelection({
                    claimableAmount: "RS8000",
                    premiumPaid: "ENSURE_PRO",
                  })
                }>
                  Claim for ₹ 8000 →
                </button>
              </div>
              <div className="flex flex-col justify-center items-center space-y-12 py-2 px-4 bg-[#f5f5f5] rounded-xl">
                <div className="border-b w-full flex flex-col justify-center items-center mx-auto">
                  <h1 className="font-semibold text-2xl text-[#4d4d4d]">
                    Business
                  </h1>
                  <h4 className="font-medium text-lg">₹ 700 / user</h4>
                </div>
                <div className="flex flex-col space-y-5 justify-start items-start">
                  <p className="flex flex-row items-center justify-start space-x-2">
                    <span>✅</span>
                    <span>Create Personal Dashboard</span>
                  </p>
                  <p className="flex flex-row items-center justify-center space-x-2">
                    <span>✅</span>
                    <span>Priority Customer Service</span>
                  </p>
                  <p className="flex flex-row items-center justify-center space-x-2">
                    <span>✅</span>
                    <span>Covers Single Flight</span>
                  </p>
                </div>
                <button className="text-white bg-blue-500  font-medium px-4 py-2 rounded-2xl" onClick={
                  () => handlePlanSelection({
                    claimableAmount: "RS5000",
                    premiumPaid: "BUSINESS",
                  })
                }>
                  Claim for ₹ 5000 →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
      <Form open={open} setOpen={(show: boolean) => setOpen(show)} />
      </>
  );
}
