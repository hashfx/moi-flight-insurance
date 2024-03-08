"use client";
import React, { useState } from "react";
import DynamicButton from "../Buttons/DynamicButton";
import LoginModal from "@/containers/components/LoginModal";
import { useAuth } from "@/context/AuthProvider";
import { truncateStr } from "../Auth/truncateStr";

const Navbar = () => {
  const [showConnectModal, setShowConnectModal] = useState(false);
  const handleShowConnectModal = () => {
    setShowConnectModal(!showConnectModal);
  };
  const {wallet} = useAuth();
  return (
    <>
      {showConnectModal && (
        <div className="absolute top-0 left-0 z-50 bg-opacity-80 w-full h-full bg-black">
          <LoginModal onClose={handleShowConnectModal} />
        </div>
      )}
      <div className="fixed top-0 w-[85%] left-auto">
        <div className="flex flex-row justify-between items-center py-8">
          <h1 className="font-bold text-[40px] font-[Poppins]">Finsure</h1>
          <DynamicButton
            buttonText={wallet ? `${truncateStr(wallet.getAddress(), 15)}` : "Connect"}
            handle={handleShowConnectModal}
            borderColor="border-Secondary"
            backgroundColor="bg-Primary"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
