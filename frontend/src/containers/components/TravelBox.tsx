import React from "react";
import Image from "next/image";
import Input from "@/components/Input/Input";
const TravelBox = () => {
  return (
    <div className="w-1/2 p-10 bg-[#20262E] h-full flex flex-col gap-8 rounded-md">
      <div className="flex flex-col gap-2">
        <h1 className="text-[32px] font-light">
          Travel anywhere across the globe
        </h1>
        <div className="px-1">
          <p className="font-extralight">
            Insurance plan starting at just ₹199
          </p>
        </div>
      </div>
      <Input />
    </div>
  );
};

export default TravelBox;
