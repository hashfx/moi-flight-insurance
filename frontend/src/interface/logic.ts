import { provider } from "@/constants/auth";
import { getLogicDriver } from "js-moi-sdk";

const logicId = process.env.NEXT_APP_LOGIC_ID as string;


const ClaimToken = async (wallet: any) => {
	const logicDriver = await getLogicDriver("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", wallet);
	const ixResponse = await logicDriver.routines.Claim();
	return ixResponse.wait();
};

const UpdateFlightDelayStatus = async (wallet: any, flightNumber: number, departureTime: any, delayedBy: any) => {
	const logicDriver = await getLogicDriver("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", wallet);
	const ixResponse = await logicDriver.routines.UpdateFlightDelayStatus(flightNumber, departureTime, delayedBy);
	return ixResponse.result();
};

const PurchasePolicy = async (wallet: any, pnrNumber: number, premiumAmount: any) => {
	const logicDriver = await getLogicDriver("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", wallet);
	const ixResponse = await logicDriver.routines.PurchasePolicy(pnrNumber, premiumAmount);
	return ixResponse.result();
}

const ClaimPolicy = async (wallet: any, pnrNumber: number, premiumAmount: any) => {
	const logicDriver = await getLogicDriver("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", wallet);
	const ixResponse = await logicDriver.routines.ClaimPolicy(pnrNumber, premiumAmount);
	return ixResponse.result();
}

const PolicyStatus = async (wallet: any, pnrNumber: number) => {
	const logicDriver = await getLogicDriver("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", wallet);
	const ixResponse = await logicDriver.routines.PolicyStatus(pnrNumber);
	return ixResponse.result();
}

const Transfer = async (wallet: any, to: any, value: any) => {
	const logicDriver = await getLogicDriver("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", wallet);
	const ixResponse = await logicDriver.routines.Transfer(to, value);
	return ixResponse.result();
}

const Approve = async (wallet: any, spender: any, value: any) => {
	const logicDriver = await getLogicDriver("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", wallet);
	const ixResponse = await logicDriver.routines.Approve(spender, value);
	return ixResponse.result();
}

const TotalSupply = async (wallet: any) => {
	const logicDriver = await getLogicDriver("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", wallet);
	const ixResponse = await logicDriver.routines.TotalSupply();
	return ixResponse.result();
}

const ClaimInterval = async () => {
	const logicDriver = await getLogicDriver("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", provider);
	const ixResponse = await logicDriver.routines.ClaimInterval();
	console.log(ixResponse, "--------- ix Response");
	return ixResponse;
}

const NextClaim = async (wallet: any, account: any) => {
	const logicDriver = await getLogicDriver("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", wallet);
	const ixResponse = await logicDriver.routines.NextClaim(account);
	return ixResponse.result();
}


////////////////////////
// Observe/Read Calls
///////////////////////

const GetTokenName = async () => {
	const logicDriver = await getLogicDriver("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", provider);
	return logicDriver.routines.Name();
};
const GetTokenBalanceOf = async (account: any) => {
	const logicDriver = await getLogicDriver("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", provider);
	return logicDriver.routines.BalanceOf(account);
};
const GetTokenClaimAmount = async () => {
	console.log("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", provider);
	const logicDriver = await getLogicDriver("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", provider);
	return logicDriver.routines.ClaimAmount();
};
const GetNextClaim = async (account: any) => {
	const logicDriver = await getLogicDriver("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", provider);
	return logicDriver.routines.NextClaim(account);
};
const GetTokenDecimals = async () => {
	const logicDriver = await getLogicDriver("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", provider);
	return logicDriver.routines.Decimals();
};
const GetTokenSymbol = async () => {
	const logicDriver = await getLogicDriver("0x0800002c7bb9f28b5cdae4f034eb06b675b5a683e8083b1e585e69a1cf8160b884991c", provider);
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
