"use client";
import { data } from "@/components/Dashboard/data";
import { account, provider } from "@/constants/auth";
import logic from "@/interface/logic";
import { PlanDetail } from "@/types/pricing";
import { Wallet } from "js-moi-sdk";
import React, { createContext, useContext, useEffect, useState } from "react";

export type ClaimDetail = {
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

export type TokenDetail = {
	name: string;
	symbol: string;
	decimals: any;
}

interface AuthContextType {
	mnemonic: string;
	setMnemonic: (mnemonic: string) => void;
	wallet: any;
	setWallet: any;
	pnrNumber: string;
	setPnrNumber: (pnrNumber: string) => void;
	claimDetails: ClaimDetail;
	setClaimDetails: (claimDetails: ClaimDetail) => void;
	responseData: ResponseData;
	setResponseData: (responseData: ResponseData) => void;
	showConnectModal: boolean;
	setShowConnectModal: (showConnectModal: boolean) => void;
	selectedData: any;
	setSelectedData: any;
	selectedPlans: PlanDetail;
	setSelectedPlans: (selectedPlans: PlanDetail) => void
	openClaimModal: boolean;
	setOpenClaimModal: (openClaimModal: boolean) => void;
	balance: any;
	setBalance: (balance: any) => void;
	tokenDetails: TokenDetail;
	setTokenDetails: (tokenDetail: TokenDetail) => void;
	refillTime: string;
	setRefillTime: (refillTime: string) => void;
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
	const [claimDetails, setClaimDetails] = useState({} as ClaimDetail);
	const [responseData, setResponseData] = useState({} as ResponseData);
	const [selectedPlans, setSelectedPlans] = useState({} as PlanDetail);
	const [selectedData, setSelectedData] = useState(data[1]);
	const [openClaimModal, setOpenClaimModal] = useState(false);
	const [balance, setBalance] = useState([]);
	const [tokenDetails, setTokenDetails] = useState<TokenDetail>({
    name: "",
    symbol: "", 
    decimals: null, 
  });
	const [refillTime, setRefillTime] = useState("00:00:00");

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

	useEffect(() => {
		if (!wallet) return;
    const getTokenDetails = async () => {
      const [{ name }, { symbol }, { decimals }] = await Promise.all([
        logic.GetTokenName(),
        logic.GetTokenSymbol(),
        logic.GetTokenDecimals(),
      ]);

      setTokenDetails({
        name,
        symbol,
        decimals,
      });
    };
    getTokenDetails();
  }, []);

  useEffect(() => {
    const getTokenBalance = async () => {
      if (!wallet) return;

      const { balance } = await logic.GetTokenBalanceOf(wallet.getAddress());
      setBalance(balance);
    };
    getTokenBalance();
  }, [wallet]);
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
				selectedData,
				setSelectedData,
				selectedPlans,
				setSelectedPlans,
				openClaimModal,
				setOpenClaimModal,
				balance,
				setBalance,
				tokenDetails,
				setTokenDetails,
				refillTime,
				setRefillTime
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
