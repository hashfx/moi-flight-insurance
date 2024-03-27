import countries from "../Globe/assets/countries_110m.json";
export default function DetailForm() {
  return (
    <div>
      <form className="p-8 pb-8">
        <div className="space-y-12">
          <div className="border-b border-white/10 pb-6">
            <h2 className="text-base font-semibold leading-7 text-white">
              Flight Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              Please fill correct information.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="departure-date"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Departure Date
                </label>
                <div className="mt-2">
                  <input
                    id="departure-date"
                    name="departure-date"
                    type="datetime-local"
                    autoComplete="departure-date"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                  >
                    {countries.features.map((singleCountry, index) => {
                      return (
                        <option key={index} className="">
                          {singleCountry.properties.geounit}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="flight-from"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Flight Source
                </label>
                <div className="">
                  <input
                    type="text"
                    name="flight-from"
                    id="flight-from"
                    autoComplete="flight-from"
                    placeholder="e.g Indore, Bhopal, Mumbai ..."
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <div className="mb-2">
                  <label
                    htmlFor="flight-to"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Flight Destination
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="flight-to"
                      id="flight-to"
                      autoComplete="flight-to"
                      placeholder="e.g Indore, Bhopal, Mumbai ..."
                      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2">
                    <label
                      htmlFor="flight-number"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Flight Number
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="flight-number"
                        id="flight-number"
                        autoComplete="address-level1"
                        placeholder="e.g AI-1234"
                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mt-2">
                      <label
                        htmlFor="seat"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Seat Number
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="seat"
                          id="seat"
                          autoComplete="seat"
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-10">
          <button
            type="button"
            className="text-lg font-semibold leading-6 text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-3 py-1 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
