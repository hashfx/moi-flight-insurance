"use client";
import React, { useState } from "react";
import { HandlePNRSubmission } from "../utils/HandlePNRSubmission";
import { useAuth } from "@/context/AuthContext";

interface formProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Form = ({ open, setOpen }: formProps) => {
  const [formData, setFormData] = useState({
    boardingTo: "",
    boardingFrom: "",
    passengerName: "",
    flightId: "",
  });
  const { pnrNumber, wallet } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (open && wallet)
    return (
      <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-10 rounded-xl flex flex-col space-y-10">
          <div className="">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              User Details
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be saved for future payouts.
            </p>
          </div>

          <form
            className="shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
            onSubmit={() =>
              HandlePNRSubmission(
                pnrNumber,
                formData.boardingTo,
                formData.boardingFrom,
                formData.passengerName,
                formData.flightId
              )
            }
          >
            <div className="px-4 py-6 sm:p-8">
              <div className="flex flex-col justify-start items-start">
                <div className=" flex flex-row justify-center items-center space-x-5">
                  <label
                    htmlFor="boardingTo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Boarding From:
                  </label>
                  <div className="">
                    <div className=" w-full">
                      <input
                        type="text"
                        name="boardingFrom"
                        onChange={handleChange}
                        value={formData.boardingFrom}
                        id="boardingFrom"
                        className="outline-none border-b border-[#404040] p-2 focus:border-cyan-500"
                        placeholder="JFK"
                      />
                    </div>
                  </div>
                </div>

                <div className=" flex flex-row justify-center items-center space-x-5">
                  <label
                    htmlFor="boardingTo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Boarding To:
                  </label>
                  <div className="">
                    <div className=" w-full">
                      <input
                        type="text"
                        name="boardingTo"
                        onChange={handleChange}
                        value={formData.boardingTo}
                        id="boardingTo"
                        className="outline-none border-b border-[#404040] p-2 focus:border-cyan-500"
                        placeholder="LAX"
                      />
                    </div>
                  </div>
                </div>
                {/* more fields are "boardingFrom" , "passengerName" */}

                <div className=" flex flex-row justify-center items-center space-x-5">
                  <label
                    htmlFor="passengerName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Passenger Name:
                  </label>
                  <div className="">
                    <div className=" w-full">
                      <input
                        type="text"
                        name="passengerName"
                        onChange={handleChange}
                        value={formData.passengerName}
                        id="passengerName"
                        className="outline-none border-b border-[#404040] p-2 focus:border-cyan-500"
                        placeholder="JFK"
                      />
                    </div>
                  </div>
                </div>

                <div className=" flex flex-row justify-center items-center space-x-5">
                  <label
                    htmlFor="flightId"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Flight No:
                  </label>
                  <div className="">
                    <div className=" w-full">
                      <input
                        type="text"
                        name="flightId"
                        onChange={handleChange}
                        value={formData.flightId}
                        id="flightId"
                        className="outline-none border-b border-[#404040] p-2 focus:border-cyan-500"
                        placeholder="JFK"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Form;
