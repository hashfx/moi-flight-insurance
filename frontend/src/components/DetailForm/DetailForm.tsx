"use client";
import { useAuth } from "@/context/AuthProvider";
import DynamicButton from "../Buttons/DynamicButton";
import logic from "@/interface/logic";
import { useRouter } from "next/navigation";

export default function DetailForm() {
  const {
    formDetails,
    setFormDetails,
    setOpenClaimModal,
    setResponseData,
    selectedPlans,
    responseData,
    wallet,
  } = useAuth();
  const router = useRouter();

  const handleDetailForm = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    setFormDetails({ ...formDetails, [target.name]: target.value });
  };
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      insuranceNo: "0",
      userName: formDetails.firstName + " " + formDetails.lastName,
      flightNumber: responseData.flightNumber,
      startDestination: responseData.startDestination,
      endDestination: responseData.endDestination,
      premiumAmount: selectedPlans.priceInNumber,
      departureTime: responseData.departureTime,
      pnrNumber: formDetails.pnr,
    };
    setResponseData(data);
    // logic.PurchasePolicy(wallet, data.userName, data.flightNumber, data.premiumAmount, data.pnrNumber, data.departureTime);
    setOpenClaimModal(false);
    router.push("/dashboard");
  };
  return (
    <form className="p-6">
      <div className="space-y-12 overflow-y-scroll no-scrollbar">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-xl font-semibold leading-7 text-white">
            Flight Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            Please fill correct information.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-base font-medium leading-6 text-white"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter First Name"
                  value={formDetails.firstName}
                  onChange={handleDetailForm}
                  autoComplete="none"
                  className="pl-4 block outline-none w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="lastName"
                className="block text-base font-medium leading-6 text-white"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formDetails.lastName}
                  onChange={handleDetailForm}
                  id="lastName"
                  autoComplete="none"
                  className="pl-4 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm  sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="pnr"
                className="block text-base font-medium leading-6 text-white"
              >
                PNR Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="pnr"
                  value={formDetails.pnr}
                  onChange={handleDetailForm}
                  id="pnr"
                  autoComplete="pnr"
                  placeholder="Eg. Z8C8DX"
                  className="pl-4 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm  sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            {/* <div className="sm:col-span-2">
              <label htmlFor="seatNumber" className="block text-sm font-medium leading-6 text-white">
                Seat Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="seatNumber"
                  value={formDetails.seatNumber}
                  onChange={handleDetailForm}
                  placeholder="Eg. 26A"
                  id="seatNumber"
                  autoComplete="seatNumber"
                  className="pl-4 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm  sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-x-6">
        <DynamicButton
          buttonText="Save"
          backgroundColor="bg-Primary"
          borderColor="border-none"
          handle={handleFormSubmit}
        />
        <DynamicButton
          buttonText="Cancel"
          backgroundColor="bg-Rejection-background"
          borderColor="border-none"
          handle={() => setOpenClaimModal(false)}
        />
      </div>
    </form>
  );
}
