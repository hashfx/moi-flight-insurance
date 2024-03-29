"use client";
import { useAuth } from "@/context/AuthProvider";
import DynamicButton from "../Buttons/DynamicButton";
import { useRouter } from "next/navigation";
import countries from "../Globe/assets/countries_110m.json";

export default function DetailForm() {
  const {formDetails, setFormDetails, setOpenClaimModal, setResponseData, selectedPlans, responseData} = useAuth();
 
  const handleDetailForm = (e: React.FormEvent<HTMLFormElement>  | any) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    setFormDetails({ ...formDetails, [target.name]: target.value });
  };
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      userName: formDetails.firstName + " " + formDetails.lastName,
      pnrNumber : formDetails.pnr,
      premiumAmount: selectedPlans.priceInNumber,
      departureTime: responseData.departureTime,
      flightNumber: responseData.flightNumber,
    };
    setResponseData(data);
    setOpenClaimModal(false);
  }
  return (  
    <form className='p-6'>
      <div className="space-y-12 overflow-y-scroll no-scrollbar">

        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white">
            Flight Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            Please fill correct information.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-white"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter first name"
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
                className="block text-sm font-medium leading-6 text-white"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formDetails.lastName}
                  onChange={handleDetailForm}
                  id="lastName"
                  autoComplete="none"
                  className="pl-4 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm  sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="pnr" className="block text-sm font-medium leading-6 text-white">
                PNR Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="pnr"
                  value = {formDetails.pnr}
                  onChange = {handleDetailForm}
                  id="pnr"
                  autoComplete="pnr"
                  placeholder="e.g Indore, Bhopal, Mumbai ..."
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

      <div className="mt-4 flex items-center justify-end gap-x-2">
        <DynamicButton
          buttonText="Cancel"
          backgroundColor="bg-Rejection-background"
          borderColor="border-none"
          handle={() => setOpenClaimModal(false)}
        />
        <DynamicButton
          buttonText="Save"
          backgroundColor="bg-Primary"
          borderColor="border-none"
          handle={handleFormSubmit}
        />
      </div>
    </form>
  );
}
