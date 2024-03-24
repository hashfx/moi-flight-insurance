import React from "react";
import Footer from "../Footer/Footer";
import TravelBox from "../components/TravelBox";
import Image from "next/image";
import GlobeContainer from "@/components/Globe/GlobeContainer";

const Landing = () => {
  return (
    <div className="w-full h-full mt-16 flex flex-col gap-20 relative">
      <div className="fixed w-full -right-[36rem] scale-110 rotate-12 -bottom-8 z-0">
        <GlobeContainer />
      </div>
      <h1 className=" font-medium text-5xl flex flex-col">
        <span>Get Rid of delaying flights,</span>{" "}
        <span>get your precious time back monetarily</span>
      </h1>
      <TravelBox />
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
