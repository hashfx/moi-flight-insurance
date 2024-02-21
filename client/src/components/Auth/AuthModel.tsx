"use client";
import { useAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { Wallet, validateMnemonic, VoyageProvider } from "js-moi-sdk";
import { truncateStr } from "./truncateStr";

const provider = new VoyageProvider("babylon");
const account = "m/44'/6174'/7020'/0/0"; // 0th account path derivation
const AuthModel = () => {
  const {
    mnemonic,
    setMnemonic,
    setWallet,
    wallet,
    showConnectModal,
    setShowConnectModal,
  } = useAuth();
  const [error, setError] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleMnemonic = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMnemonic(e.target.value);
  };
  //@ts-ignore
  const isLoggedIn = JSON.parse(sessionStorage.getItem("loggedIn"));
  // useEffect(() => {
  //   setWallet(isLoggedIn);
  // });
  const handleConnect = async (phrase: string) => {
    try {
      if (!validateMnemonic(phrase)) {
        return setError("Incorrect mnemonic");
      }

      const wallet = new Wallet(provider);
      await wallet.fromMnemonic(mnemonic, account);
      setWallet(wallet);
      // Assuming loggedIn is a boolean variable indicating the login status
      sessionStorage.setItem("loggedIn", JSON.stringify(wallet));
      setError("");
      setShowConnectModal(false);
      setMnemonic("");
    } catch (error: object | any) {
      throw new Error(error);
    }
  };

  const handleCancel = () => {
    setError("");
    setShowConnectModal(false);
  };

  const handleDisconnect = () => {
    setWallet(null);
    sessionStorage.removeItem("loggedIn");
    alert("Wallet disconnected");
  };

  console.log(isLoggedIn);
  return (
    <>
      <div className="px-4">
        {wallet ? (
          <button
            className="bg-[#0085FF] p-3 rounded-lg text-white font-medium w-30"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {wallet && truncateStr(wallet.getAddress(), 15)}
            {isDropdownOpen ? (
              <div className="absolute top-20 bg-white p-3 rounded-lg shadow-lg ">
                <button
                  className="text-red-400"
                  onClick={() => handleDisconnect()}
                >
                  Disconnect
                </button>
              </div>
            ) : null}
          </button>
        ) : (
          <button
            className="bg-[#0085FF] p-2 rounded-lg text-white font-medium"
            onClick={() => setShowConnectModal(true)}
          >
            Connect
          </button>
        )}
        {showConnectModal && (
          <div className="fixed inset-0 flex flex-col items-center justify-start py-36 bg-black bg-opacity-90 space-y-40 z-50">
            <button
              type="button"
              className="font-bold text-2xl text-white"
              onClick={() => handleCancel()}
            >
              ✕
            </button>
            <form className="mt-5 flex flex-col space-y-10 sm:items-center">
              <div className="w-full">
                <label htmlFor="mnemonic" className="sr-only">
                  Authenticate
                </label>
                <input
                  type="text"
                  name="mnemonic"
                  id="mnemonic"
                  value={mnemonic}
                  onChange={handleMnemonic}
                  className="p-2 rounded-xl outline-blue-500 active:border-blue-300 border-2 w-full"
                  placeholder="abba jabba dabba abba jabba dabba"
                />
              </div>
              <button
                type="submit"
                onClick={() => handleConnect(mnemonic)}
                disabled={
                  !mnemonic || error !== "" || mnemonic.split(" ").length < 12
                }
                className=" rounded-md bg-cyan-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:ml-3 sm:mt-0  glow-on-hover"
              >
                Connect
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default AuthModel;
