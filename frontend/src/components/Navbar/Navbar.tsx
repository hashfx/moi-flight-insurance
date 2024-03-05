import React from "react";
import DynamicButton from "../Buttons/DynamicButton";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-[85%] left-auto">
      <div className="flex flex-row justify-between items-center py-8">
        <h1 className="font-bold text-[40px] font-[Poppins]">Finsure</h1>
        <DynamicButton
          buttonText="Connect"
          // handle={() => {}}
          borderColor="border-Secondary"
          backgroundColor="bg-Primary"
        />
      </div>
    </div>
  );
};

export default Navbar;
