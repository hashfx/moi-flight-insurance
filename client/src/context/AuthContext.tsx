'use client';
import React, { createContext, useContext, useState } from "react";

export type flightDetails = {
  claimableAmount: string;
  premiumPaid: string;
}

interface ResponseData {
  claimableAmount: string;
  premiumPaid: string;
  dateOfFlight: string;
  boardingTo: string;
  flightNumber: string;
  boardingFrom: string;
  passengerName: string;
  insuranceNumber: string;
  pnrNumber: string;
  status: string;
  updatedOn: string;
}

interface AuthContextType {
  mnemonic: string;
  setMnemonic: (mnemonic: string) => void;
  wallet: any;
  setWallet: any;
  pnrNumber: string;
  setPnrNumber: (pnrNumber: string) => void;
  claimDetails: flightDetails;
  setClaimDetails: (claimDetails: flightDetails) => void;
  responseData: ResponseData;
  setResponseData: (responseData: ResponseData) => void;
}

interface childProp {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: childProp) => {
  const [mnemonic, setMnemonic] = useState("");
  const [wallet, setWallet] = useState();
  const [pnrNumber, setPnrNumber] = useState("");
  const [claimDetails, setClaimDetails] = useState({} as flightDetails);
  const [responseData, setResponseData] = useState({} as ResponseData);
  return (
    <AuthContext.Provider value={{ mnemonic, setMnemonic, setWallet, wallet, pnrNumber,setPnrNumber, claimDetails, setClaimDetails, responseData,setResponseData}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
