import { VoyageProvider, Wallet, getLogicDriver } from "js-moi-sdk";

const provider = new VoyageProvider("babylon");
const logicId = process.env.LOGIC_ID;

const constructBaseWallet = async () => {
  const wallet = new Wallet(provider);
  await wallet.fromMnemonic(process.env.BASE_MNEMONIC, "m/44'/6174'/7020'/0/0");
  return wallet;
};
// baseWallet is only used for get request.
const baseWallet = await constructBaseWallet();

const CreateInsurance= async (wallet, name, description, durationInSeconds) => {
  const logicDriver = await getLogicDriver(logicId, wallet);
  const ixResponse = await logicDriver.routines.CreateContest(
    name,
    description,
    durationInSeconds
  );
  return ixResponse.result(); // Returns output
};

const SubmitEntry = async (wallet, contestId, entryName) => {
  const logicDriver = await getLogicDriver(logicId, wallet);
  const ixResponse = await logicDriver.routines.SubmitEntry(
    contestId,
    entryName
  );
  return ixResponse.wait(); // Doesn't return output
};

const VoteForEntry = async (wallet, contestId, entryName) => {
  const logicDriver = await getLogicDriver(logicId, wallet);
  const ixResponse = await logicDriver.routines.VoteForEntry(
    contestId,
    entryName
  );
  return ixResponse.wait(); // Doesn't return output
};

const GetContests = async () => {
  const logicDriver = await getLogicDriver(logicId, baseWallet);
  return logicDriver.routines.GetContests();
};
const GetParticularContest = async (contestId) => {
  const logicDriver = await getLogicDriver(logicId, baseWallet);
  return logicDriver.routines.GetParticularContest(contestId);
};
const GetWinner = async (contestId) => {
  const logicDriver = await getLogicDriver(logicId, baseWallet);
  return logicDriver.routines.GetWinner(contestId);
};

const logic = {
  CreateContest,
  SubmitEntry,
  VoteForEntry,
  GetContests,
  GetParticularContest,
  GetWinner,
};

export default logic;
