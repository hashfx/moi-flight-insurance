"use client";
import React from "react";
import Image from "next/image";
import Field from "./components/Field";
import CityField from "./components/CityField";
import { useAuth } from "@/context/AuthProvider";
interface TicketProps {
  pnr: string;
  name: string;
  insuranceNumber: string;
  maxClaimable: number;
  premiumPaid: number;
  arrivalAirportCode: string;
  arrivalName: string;
  destinationAirportCode: string;
  destinationName: string;
  status: "Delayed" | "On Time" | "Not Started" | "Canceled" | any;
  departureDate: string;
  departureTime: string;
  flightNumber: string;
  seat: string;
}
const TicketNew = ({
  pnr,
  name,
  insuranceNumber,
  maxClaimable,
  premiumPaid,
  arrivalAirportCode,
  arrivalName,
  destinationAirportCode,
  destinationName,
  status,
  departureDate,
  departureTime,
  flightNumber,
  seat,
}: TicketProps) => {
  const { wallet } = useAuth();
  return wallet ? (
    /*
    div:before{   
    top:-50px; left:225px;
    width:150px; height:150px;
    border-radius:50%;
    box-shadow: 0px 0px 0px 9999px #000;
    }
    tailwind: before:top-[-50px] before:left-[200px] before:w-[48px] before:h-[48px] before:rounded-full before:shadow-[0px_0px_0px_9999px_rgba(0,0,0,1)]
 */
    <div className="">
      <div className="relative w-[327px] h-max bg-Background-light rounded-3xl flex flex-col px-7 py-5 gap-4">
        <div className="absolute rounded-full w-8 h-8 bg-Background top-[69%] -left-5"></div>
        <div className="absolute rounded-full w-8 h-8 bg-Background top-[69%] -right-5"></div>
        {/* PNR Section */}
        <div>
          <p className="w-6 h-4 text-xs font-medium leading-[15.60px] text-[#c0c2c5]">
            PNR
          </p>
          <p className="w-[140px] h-[52px] text-[40px] font-medium leading-[52px] text-white">
            {pnr}
          </p>
        </div>
        {/* Divider */}
        <div>
          <Image src={"/Divider.svg"} width={320} height={5} alt="divider" />
        </div>
        {/* Details Section */}
        <div className="w-full my-2">
          <div className="w-full grid grid-cols-2 grid-rows-2 gap-y-6 gap-x-10">
            <Field Heading="Name" Content={name} />
            <div>
              <Field Heading="Insurance Number" Content={insuranceNumber} />
            </div>
            <Field
              Heading="Max. Claimable Amount"
              Content={"₹ " + maxClaimable}
            />
            <div>
              <Field Heading="Premium Paid" Content={"₹ " + premiumPaid} />
            </div>
          </div>
        </div>
        {/* Divider */}
        <div>
          <Image src={"/Divider.svg"} width={320} height={5} alt="divider" />
        </div>
        {/* TRAVEL */}
        <div className="flex items-center justify-between w-full">
          <CityField Heading={arrivalAirportCode} FullName={arrivalName} />
          <div className="flex items-center justify-center bg-[#20262E] h-9 px-6 py-2 rounded-[32px]">
            <Image
              src={"/airplane.svg"}
              width={18}
              height={18}
              alt="airplane"
            />
          </div>
          <CityField
            Heading={destinationAirportCode}
            FullName={destinationName}
          />
        </div>
        {/* Flight Status */}
        <div className="flex items-baseline gap-2">
          <p className="text-xs opacity-70">Flight Status:</p>
          <p
            className={
              "font-bold text-base " +
              (status === ("Delayed" || "Canceled")
                ? "text-Rejection"
                : "text-TextOnTicket ")
            }
          >
            {status}
          </p>
        </div>
        {/* Divider */}
        <div>
          <Image src={"/Divider.svg"} width={320} height={5} alt="divider" />
        </div>
        {/* More Details */}
        <div className="w-full my-2">
          <div className="w-full grid grid-cols-2 grid-rows-2 gap-y-6 gap-x-10">
            <Field Heading="Departure Date" Content={departureDate} />
            <div>
              <Field Heading="Time" Content={departureTime} />
            </div>
            <Field Heading="Flight Number" Content={flightNumber} />
            <div>
              <Field Heading="Seat" Content={seat} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default TicketNew;
