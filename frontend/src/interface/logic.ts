import { account, provider } from "@/constants/auth";
import { Wallet, getLogicDriver } from "js-moi-sdk";

const logicId = process.env.REACT_APP_LOGIC_ID as string;

const constructBaseWallet = async () => {
	const newWallet = await Wallet.fromMnemonic(
		process.env.NEXT_PUBLIC_MNEMONIC_PHRASE as string,
		account
	);
	newWallet.connect(provider);
	// console.log(wallet.getAddress());
	return newWallet;
};

// Base wallet should only be used for making read calls when user has not connected his wallet
const baseWallet = constructBaseWallet() as any;

const ClaimToken = async (wallet: any) => {
	const logicDriver = await getLogicDriver(logicId, wallet);
	const ixResponse = await logicDriver.routines.Claim();
	return ixResponse.wait();
};

const UpdateFlightDelayStatus = async (wallet: any, flightNumber: string, departureTime: string, delayedBy: string) => {
	const logicDriver = await getLogicDriver(logicId, wallet);
	const ixResponse = await logicDriver.routines.UpdateFlightDelayStatus(flightNumber, departureTime, delayedBy);
	return ixResponse.result();
};

const PurchasePolicy = async (wallet: any, pnrNumber: string, premiumAmount: string) => {
	const logicDriver = await getLogicDriver(logicId, wallet);
	const ixResponse = await logicDriver.routines.PurchasePolicy(pnrNumber, premiumAmount);
	return ixResponse.result();
}

const ClaimPolicy = async (wallet: any, pnrNumber: string, premiumAmount: string) => {
	const logicDriver = await getLogicDriver(logicId, wallet);
	const ixResponse = await logicDriver.routines.ClaimPolicy(pnrNumber, premiumAmount);
	return ixResponse.result();
}

const PolicyStatus = async (wallet: any, pnrNumber: string) => {
	const logicDriver = await getLogicDriver(logicId, wallet);
	const ixResponse = await logicDriver.routines.PolicyStatus(pnrNumber);
	return ixResponse.result();
}

const Transfer = async (wallet: any, to: string, value: string) => {
	const logicDriver = await getLogicDriver(logicId, wallet);
	const ixResponse = await logicDriver.routines.Transfer(to, value);
	return ixResponse.result();
}

const Approve = async (wallet: any, spender: string, value: string) => {
	const logicDriver = await getLogicDriver(logicId, wallet);
	const ixResponse = await logicDriver.routines.Approve(spender, value);
	return ixResponse.result();
}

const TotalSupply = async (wallet: any) => {
	const logicDriver = await getLogicDriver(logicId, wallet);
	const ixResponse = await logicDriver.routines.TotalSupply();
	return ixResponse.result();
}

const ClaimInterval = async (wallet: any) => {
	const logicDriver = await getLogicDriver(logicId, wallet);
	const ixResponse = await logicDriver.routines.ClaimInterval();
	return ixResponse.result();
}

const NextClaim = async (wallet: any, account: string) => {
	const logicDriver = await getLogicDriver(logicId, wallet);
	const ixResponse = await logicDriver.routines.NextClaim(account);
	return ixResponse.result();
}


////////////////////////
// Observe/Read Calls
///////////////////////

const GetTokenName = async () => {
	const logicDriver = await getLogicDriver(logicId, baseWallet);
	return logicDriver.routines.Name();
};
const GetTokenBalanceOf = async (account: string) => {
	const logicDriver = await getLogicDriver(logicId, baseWallet);
	return logicDriver.routines.BalanceOf(account);
};
const GetTokenClaimAmount = async () => {
	const logicDriver = await getLogicDriver(logicId, baseWallet);
	return logicDriver.routines.ClaimAmount();
};
const GetNextClaim = async (account: string) => {
	const logicDriver = await getLogicDriver(logicId, baseWallet);
	return logicDriver.routines.NextClaim(account);
};
const GetTokenDecimals = async () => {
	const logicDriver = await getLogicDriver(logicId, baseWallet);
	return logicDriver.routines.Decimals();
};
const GetTokenSymbol = async () => {
	const logicDriver = await getLogicDriver(logicId, baseWallet);
	return logicDriver.routines.Symbol();
};

const logic = {
	GetTokenName,
	GetTokenBalanceOf,
	GetNextClaim,
	GetTokenClaimAmount,
	GetTokenDecimals,
	GetTokenSymbol,
	ClaimToken,
	UpdateFlightDelayStatus,
	PurchasePolicy,
	ClaimPolicy,
	PolicyStatus,
	Transfer,
	Approve,
	TotalSupply,
	ClaimInterval,
	NextClaim
};

export default logic;
