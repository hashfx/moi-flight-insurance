'use client';
import React from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
const Input = () => {
  const {pnrNumber, setPnrNumber} = useAuth();
  const navigate = useRouter();
  const handlePnr = () => {
    navigate.push("/plans");
  }
  return (
    <div className="w-full flex flex-row space-x-5">
      <input
        type="text"
        value={pnrNumber}
        onChange={(e) => setPnrNumber(e.target.value)}
        placeholder="Enter the PNR Number here..."
        className="p-2 rounded-md w-full bg-[#2F363E] placeholder-[#8C8C8C6E] outline-none"
      />
      <button onClick={handlePnr} className="bg-[#132C51] px-6 py-1 border border-[#285FB3] rounded-md disabled:bg-[#132C51]/70 disabled:cursor-not-allowed " disabled={pnrNumber.trim() == "" || !pnrNumber}>
        <Image
          src={"/arrow.svg"}
          className="w-5 h-full"
          alt=""
          width={100}
          height={100}
        />
      </button>
    </div>
  );
};

export default Input;
