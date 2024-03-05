import React from "react";
import DynamicButton from "../Buttons/DynamicButton";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="font-bold text-3xl font-[Poppins]">Finsure</h1>
      <DynamicButton
        buttonText="Connect"
        // handle={() => {}}
        borderColor="border-Secondary"
        backgroundColor="bg-Primary"
      />
    </div>
  );
};

export default Navbar;
