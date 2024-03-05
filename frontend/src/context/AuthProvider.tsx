"use client";
import { account, provider } from "@/constants/auth";
import { Wallet } from "js-moi-sdk";
import React, { createContext, useContext, useEffect, useState } from "react";

export type flightDetails = {
	claimableAmount: string;
	premiumPaid: string;
};

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
	showConnectModal: boolean;
	setShowConnectModal: (showConnectModal: boolean) => void;
}

interface childProp {
	children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: childProp) => {
	const [mnemonic, setMnemonic] = useState("");
	const [wallet, setWallet] = useState<Wallet | undefined>();
	const [pnrNumber, setPnrNumber] = useState("");
	const [showConnectModal, setShowConnectModal] = useState(false);
	const [claimDetails, setClaimDetails] = useState({} as flightDetails);
	const [responseData, setResponseData] = useState({} as ResponseData);

	useEffect(() => {
		const loggedInWallet = localStorage.getItem("loggedIn");
		if (loggedInWallet) {
			const { mnemonic: storedMnemonic } = JSON.parse(loggedInWallet);
			const initializeStoredWallet = async () => {
				try {
					const newWallet = await Wallet.fromMnemonic(storedMnemonic, account);
					newWallet.connect(provider);
					setWallet(newWallet);
				} catch (error) {
					console.error("Failed to initialize stored wallet:", error);
				}
			};
			initializeStoredWallet();
		}
	}, [setWallet]);
	return (
		<AuthContext.Provider
			value={{
				mnemonic,
				setMnemonic,
				setWallet,
				wallet,
				pnrNumber,
				setPnrNumber,
				claimDetails,
				setClaimDetails,
				responseData,
				setResponseData,
				showConnectModal,
				setShowConnectModal,
			}}
		>
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
