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

// const CreateCampaign = async (wallet: any, teaPrice, creator, creatordetails) => {
//   const logicDriver = await getLogicDriver(logicId, wallet);
//   const ixResponse = await logicDriver.routines.CreateCampaign(
//     teaPrice,
//     creator,
//     creatordetails
//   );
//   return ixResponse.result();
// };

// const BuyTea = async (wallet, id, amount, name) => {
//   const logicDriver = await getLogicDriver(logicId, wallet);
//   const ixResponse = await logicDriver.routines.BuyTea(id, amount, name);
//   return ixResponse.wait();
// };

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
const GetCampaigns = async () => {
	const logicDriver = await getLogicDriver(logicId, baseWallet);
	return logicDriver.routines.SeeCampaign();
};

const logic = {
	GetTokenName,
	GetTokenBalanceOf,
	GetNextClaim,
	GetTokenClaimAmount,
	GetTokenDecimals,
	GetTokenSymbol,
	ClaimToken,
	// CreateCampaign,
	// BuyTea,
	GetCampaigns,
};

export default logic;
