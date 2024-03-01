import { VoyageProvider, Wallet, getLogicDriver } from "js-moi-sdk";

const provider = new VoyageProvider("babylon");
const logicId: string = process.env.LOGIC_ID!;

////////////////////////
// Mutate/Write Calls
///////////////////////

const CreateInsurance = async (
  wallet: any,
  name: string,
  description: string,
  durationInSeconds: number
) => {
  const logicDriver = await getLogicDriver(logicId, wallet);
  const ixResponse = await logicDriver.routines.CreateContest(
    name,
    description,
    durationInSeconds
  );
  return ixResponse.result(); // Returns output
};

////////////////////////
// Mutate/Write Calls
///////////////////////

const GetSomething = async () => {
  const logicDriver = await getLogicDriver(logicId as string, provider);
  return logicDriver.routines.Get();
};

const logic = {
  CreateInsurance,
  GetSomething,
};

export default logic;
