"use client";
import React, { useState } from "react";
import DynamicButton from "../Buttons/DynamicButton";
import LoginModal from "@/containers/components/LoginModal";
import { useAuth } from "@/context/AuthProvider";
import { truncateStr } from "../Auth/truncateStr";
import Link from "next/link";
import ConnectButton from "../Buttons/ConnectButton";

const Navbar = () => {
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { wallet, setWallet } = useAuth();
  const handleShowConnectModal = () => {
    wallet ? setClicked(!clicked) : setShowConnectModal(!showConnectModal);
  };
  const handleDisconnect = () =>{
    if (wallet) {
      localStorage.removeItem("loggedIn");
      setWallet(null);
      setShowConnectModal(false);
      return;
    }
  }
  return (
    <>
      {showConnectModal && !wallet && (
        <div className="absolute top-0 left-0 z-50 bg-opacity-80 w-full h-full bg-black">
          <LoginModal onClose={handleShowConnectModal} />
        </div>
      )}
      <div className="fixed top-0 w-[85%] left-auto" onMouseOut={() => setClicked(false)}>
        <div className="flex flex-row justify-between items-center py-8">
          <Link href={"/"}>
            <h1 className="font-bold text-[40px] font-[Poppins]">Finsure</h1>
          </Link>
            {!clicked && (
              <DynamicButton
                buttonText={
                  wallet ? `${truncateStr(wallet.getAddress(), 15)}` : "Connect"
                }
                handle={handleShowConnectModal}
                borderColor="border-Secondary"
                backgroundColor="bg-Primary"
              />
            )}
          {wallet && clicked && (
            <ConnectButton
              buttonText="Disconnect"
              handle={handleDisconnect}
              borderColor="border-Rejection-stroke"
              backgroundColor="bg-Rejection-background"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
