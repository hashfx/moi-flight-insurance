import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <div className="w-full font-[Outfit] h-full my-40 flex flex-col space-y-10 z-50">
      <h1 className=" font-medium text-5xl flex flex-col">
        <span>Get Rid of delaying flights,</span>{" "}
        <span>get your precious time back monetarily</span>
      </h1>
      <div className="w-1/2 p-10 bg-[#20262E] h-full flex flex-col space-y-8 rounded-md">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-light">
            Travel anywhere across the globe
          </h1>
          <p className="font-extralight text-md">
            Insurance plan starting at just ₹199
          </p>
        </div>
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
      </div>
    </div>
  );
};

export default Landing;
