import React from "react";
import Connect from "../Buttons/Connect";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="font-bold text-3xl font-[Poppins]">Finsure</h1>
      <Connect />
    </div>
  );
};

export default Navbar;
