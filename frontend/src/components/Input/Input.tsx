import React from "react";
import Image from "next/image";
const Input = () => {
  return (
    <div className="w-full flex flex-row space-x-5">
      <input
        type="text"
        placeholder="Enter the PNR Number here..."
        className="p-2 rounded-md w-full bg-[#2F363E] placeholder-[#8C8C8C6E]"
      />
      <button className="bg-[#132C51] px-6 py-1 border border-[#285FB3] rounded-md">
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
