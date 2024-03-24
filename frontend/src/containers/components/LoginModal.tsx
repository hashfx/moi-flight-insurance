"use client";
import ConnectButton from "@/components/Buttons/ConnectButton";
import Modal from "@/components/Modal/Modal";
import { account, provider } from "@/constants/auth";
import { useAuth } from "@/context/AuthProvider";
import { Wallet, validateMnemonic } from "js-moi-sdk";
import React, { useState, useRef } from "react";

const LoginModal = ({ onClose }: any) => {
  const [mnemonics, setMnemonics] = useState([]);
  const { setWallet, mnemonic, setMnemonic } = useAuth();
  const inputRef = useRef(null);

  const handlePaste = (event: any) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text");
    const words = pastedText.trim().split(" ");

    // Check if pasted content has 12 words
    if (words.length !== 12) {
      alert("Please paste exactly 12 words!");
      return;
    }

    setMnemonics(words);
  };

  const handleChange = (event: any, index: number) => {
    const updatedMnemonic = [...mnemonics] as any;
    updatedMnemonic[index] = event.target.value;
    setMnemonics(updatedMnemonic);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const phrase = mnemonics.join(" ");
    setMnemonic(phrase);
    try {
      if (!validateMnemonic(phrase)) {
        console.error("Incorrect mnemonic");
        return;
      }

      const newWallet = await Wallet.fromMnemonic(phrase, account);
      newWallet.connect(provider);
      setWallet(newWallet);
      localStorage.setItem(
        "loggedIn",
        JSON.stringify({ wallet: newWallet, mnemonic: phrase })
      );
      setMnemonic("");
      setMnemonics([]);
      onClose();
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };
  return (
    <div className="relative w-full h-full bg-black bg-opacity-50">
      <Modal>
        <div className="p-5 w-[40rem] space-y-10">
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="font-medium text-lg">Enter 12 word mnemonic</h1>
            <button className="" onClick={onClose}>
              ✕
            </button>
          </div>
          {/* <div ref={inputRef}> */}
          {/* Invisible input field for paste handling */}
          {/* <input type="text" style={{ display: "none" }} />
          </div> */}
          <div className=" w-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-5"
              onPaste={handlePaste}
            >
              <div className="grid grid-cols-3 gap-5">
                {[...Array(12)].map((_, index) => (
                  <div
                    key={index}
                    className="grid items-center justify-center"
                    style={{ gridTemplateColumns: "40px 1fr" }}
                  >
                    <label htmlFor={`word-${index + 1}`} className="w-5">
                      {index + 1}.
                    </label>
                    <input
                      type="text"
                      id={`word-${index + 1}`}
                      value={mnemonics[index] || ""} // Set initial value to empty string
                      onChange={(e) => handleChange(e, index)}
                      required
                      className="bg-[#2F363E] rounded-md outline-none p-2 w-full h-10 text-gray-400"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full justify-end items-center flex">
                  <ConnectButton
                    // handle={}
                    buttonText="Connect"
                    backgroundColor="bg-Primary"
                    borderColor="border-Secondary"
                    type="submit"
                  />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;
