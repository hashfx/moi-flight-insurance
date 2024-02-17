'use client';
import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  mnemonic: string;
  setMnemonic: (mnemonic: string) => void;
  wallet: any;
  setWallet: any;
}

interface childProp {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: childProp) => {
  const [mnemonic, setMnemonic] = useState("");
  const [wallet, setWallet] = useState();
  return (
    <AuthContext.Provider value={{ mnemonic, setMnemonic, setWallet, wallet}}>
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
