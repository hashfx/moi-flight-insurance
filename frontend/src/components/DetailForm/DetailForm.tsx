"use client";
import { useAuth } from "@/context/AuthProvider";
import DynamicButton from "../Buttons/DynamicButton";
import countries from "../Globe/assets/countries_110m.json";
export default function DetailForm() {
  const { formDetails, setFormDetails, setOpenClaimModal } = useAuth();

  const handleDetailForm = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    setFormDetails({ ...formDetails, [target.name]: target.value });
  };
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(formDetails);
  };
  return (
    <form className="p-6">
      <div className="space-y-12 overflow-y-scroll no-scrollbar">
        <div className="border-b border-white/10 pb-5">
          <h2 className="text-xl font-semibold leading-7 text-white">
            Flight Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            Please fill correct information.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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

            <div className="sm:col-span-4">
              <label
                htmlFor="departureDate"
                className="block text-sm font-medium leading-6 text-white"
              >
                Departure Date
              </label>
              <div className="mt-2">
                <input
                  id="departureDate"
                  value={formDetails.departureDate}
                  onChange={handleDetailForm}
                  name="departureDate"
                  type="datetime-local"
                  autoComplete="departureDate"
                  className="px-3 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm  sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-white"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="India"
                  value={formDetails.country}
                  onChange={handleDetailForm}
                  className="pl-4 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm  sm:text-sm sm:leading-6 [&_*]:text-black outline-none"
                >
                  <option className="bg-white/5" value="">
                    Select Country
                  </option>
                  {countries.features.map((singleCountry, index) => {
                    return (
                      <option
                        key={index}
                        className="bg-white/5"
                        value={singleCountry.properties.geounit}
                      >
                        {singleCountry.properties.geounit}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="source"
                className="block text-sm font-medium leading-6 text-white"
              >
                Flight Source
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="source"
                  value={formDetails.source}
                  onChange={handleDetailForm}
                  id="source"
                  autoComplete="source"
                  placeholder="Eg.  Indore"
                  className="pl-4 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm  sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="destination"
                className="block text-sm font-medium leading-6 text-white"
              >
                Flight Destination
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="destination"
                  value={formDetails.destination}
                  onChange={handleDetailForm}
                  id="destination"
                  autoComplete="destination"
                  placeholder="Eg.  Bhopal"
                  className="pl-4 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm  sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="flightNumber"
                className="block text-sm font-medium leading-6 text-white"
              >
                Flight Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="flightNumber"
                  id="flightNumber"
                  value={formDetails.flightNumber}
                  onChange={handleDetailForm}
                  autoComplete="address-level1"
                  placeholder="Eg. AI-1234"
                  className="pl-4 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm  sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="seatNumber"
                className="block text-sm font-medium leading-6 text-white"
              >
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
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-x-5">
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
