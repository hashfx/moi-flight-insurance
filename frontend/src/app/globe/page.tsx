"use client";
import React from "react";
import dynamic from "next/dynamic";
import GlobeContainer from "@/components/Globe/GlobeContainer";

const Page = () => {
  return (
    <div className="overflow-y-hidden">
      <GlobeContainer />
    </div>
  );
};

export default Page;
