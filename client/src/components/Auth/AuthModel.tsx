"use client";
import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import { Wallet, validateMnemonic, VoyageProvider } from "js-moi-sdk";
import { truncateStr } from "./truncateStr";

const provider = new VoyageProvider("babylon");
const account = "m/44'/6174'/7020'/0/0"; // 0th account path derivation
const AuthModel = () => {
  const { mnemonic, setMnemonic, setWallet, wallet } = useAuth();
  const [error, setError] = useState("");
  const [showConnectModal, setShowConnectModal] = useState(false);

  const handleMnemonic = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMnemonic(e.target.value);
  };

  const handleConnect = async (phrase: string) => {
    try {
      if (!validateMnemonic(phrase)) {
        return setError("Incorrect mnemonic");
      }

      const wallet = new Wallet(provider);
      await wallet.fromMnemonic(mnemonic, account);
      setWallet(wallet);

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
    alert("Wallet disconnected");
  };
  return (
    <>
      {wallet ? (
        <button
          className="bg-[#0085FF] p-2 rounded-lg text-white font-medium"
          onClick={() => handleDisconnect()}
        >
          Disconnect {wallet && truncateStr(wallet.getAddress(), 11)}
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
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 space-y-20 z-50">
          <button
            type="button"
            className="font-bold text-2xl text-white"
            onClick={() => handleCancel()}
          >
            ✕
          </button>
          <form className="mt-5 flex flex-col space-y-5 sm:items-center">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="mnemonic" className="sr-only">
                Authenticate
              </label>
              <input
                type="text"
                name="mnemonic"
                id="mnemonic"
                value={mnemonic}
                onChange={handleMnemonic}
                className="p-2 rounded-xl"
                placeholder="abba jabba dabba abba jabba dabba"
              />
            </div>
            <button
              type="submit"
              onClick={() => handleConnect(mnemonic)}
              disabled={
                !mnemonic || error !== "" || mnemonic.split(" ").length < 12
              }
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:ml-3 sm:mt-0 sm:w-auto"
            >
              Connect
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AuthModel;
