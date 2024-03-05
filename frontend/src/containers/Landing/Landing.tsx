import React from "react";
import Footer from "../Footer/Footer";
import TravelBox from "../components/TravelBox";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="w-full h-full mt-16 flex flex-col gap-20 z-50">
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
