import React from "react";
import { transactionData } from "./constants";
const TransactionDetails = () => {
  const fields = [
    "Flight Number",
    "Start",
    "Destination",
    "Date",
    "Plan",
    "Status",
  ];
  return (
    <div className="pt-12 mt-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-2xl font-medium">Transaction Details</h1>
        {/* Main Frame */}
        <div className="px-5 my-8">
          {/* Table Frame */}
          <div className="w-full flex flex-col gap-5">
            {/* Header */}
            <div className="flex justify-between bg-Background text-base text-TextOnTicket font-medium border-b border-black px-8 mx-3">
              {fields.map((singleField, index) => {
                return (
                  <div className="flex justify-center w-1/6" key={index}>
                    {singleField}
                  </div>
                );
              })}
            </div>
            {/* Data */}
            <div className="flex flex-col gap-3 w-full max-h-[450px] overflow-y-scroll custom-scrollbar">
              {transactionData.map((singleItem) => {
                const {
                  flightNumber,
                  arrivalAirportCode,
                  destinationAirportCode,
                  departureDate,
                  plan,
                  status,
                } = singleItem;
                return (
                  <div
                    className="flex justify-between items-center bg-Background border-[0.5px] border-Secondary border-opacity-60 rounded-lg py-4 px-6 mx-2"
                    key={flightNumber}
                  >
                    <div className="flex justify-center w-1/6">
                      {flightNumber}
                    </div>
                    <div className="flex justify-center w-1/6">
                      {arrivalAirportCode}
                    </div>
                    <div className="flex justify-center w-1/6">
                      {destinationAirportCode}
                    </div>
                    <div className="flex justify-center w-1/6">
                      {departureDate}
                    </div>
                    <div className="flex justify-center w-1/6">{plan}</div>
                    <div
                      className={
                        "flex justify-center w-1/6 " +
                        (status === "Claimed"
                          ? "text-SuccessGreen"
                          : "text-Lighter")
                      }
                    >
                      {status}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
