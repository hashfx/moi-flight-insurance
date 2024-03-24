'use client';
import DynamicButtonWithArrow from "@/components/Buttons/DynamicButtonWithArrow";
import Modal from "@/components/Modal/Modal";
import { useAuth } from "@/context/AuthProvider";
import React from "react";

const TokenModal = () => {
  const { setOpenClaimModal, balance} = useAuth();
  return (
    <div className="relative w-full h-full bg-black bg-opacity-50 backdrop-blur">
      <Modal>
        <div className="p-5 w-[40rem] space-y-10">
          <div className="flex flex-row justify-between items-center">
            <h1 className="font-semibold text-xl">Claim Tokens</h1>
            <button onClick={() => setOpenClaimModal(false)}>✕</button>
          </div>
          <h1 className="text-2xl">Your Tokens: {balance}</h1>
          <div className="justify-end flex items-center">
            <DynamicButtonWithArrow
              buttonText="Claim"
              backgroundColor="bg-Primary"
              borderColor="border-Secondary"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TokenModal;
