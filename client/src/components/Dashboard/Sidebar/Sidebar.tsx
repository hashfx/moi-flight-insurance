import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col justify-between items-start w-1/3">
      <div className="">
        <Image
          src={"/logo.png"}
          width={1000}
          height={1000}
          className="w-16 h-16"
          alt="logo"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
