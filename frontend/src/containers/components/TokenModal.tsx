"use client";
import DynamicButton from "@/components/Buttons/DynamicButton";
import DynamicButtonWithArrow from "@/components/Buttons/DynamicButtonWithArrow";
import Modal from "@/components/Modal/Modal";
import React, { useState, useRef } from "react";

const TokenModal = ({ onClose }: any) => {
  return (
    <div className="relative w-full h-full bg-black bg-opacity-50">
      <Modal>
        <div className="p-5 w-[40rem] space-y-10">
          <div className="flex flex-row justify-between items-center">
            <h1 className="font-semibold text-xl">Claim Tokens</h1>
            <button>✕</button>
          </div>
          <h1 className="text-2xl">Tokens: 1000</h1>
          <div className="justify-end flex items-center">
            <DynamicButtonWithArrow
              buttonText="Claim"
              backgroundColor="bg-Primary"
              borderColor="border-Secondary"
              //   handle={}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TokenModal;
