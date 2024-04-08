"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import { convertTimeString } from "@/containers/components/TimeConverter";
import Modal from "../Modal/Modal";
import { convertTimestamp } from "@/utils/timeConverter";
interface data {
  actual_arrival_is_estimated: boolean;
  actual_arrival_local: string;
  actual_arrival_utc: string;
  actual_departure_is_estimated: boolean;
  actual_departure_local: string;
  actual_departure_utc: string;
  airline_iata: string;
  airline_icao: string;
  airline_name: string;
  arrival_city: string;
  arrival_gate: string;
  arrival_iata: string;
  arrival_icao: string;
  arrival_name: string;
  arrival_terminal: string;
  codeshares: string[] | null;
  date: string;
  departure_city: string;
  departure_iata: string;
  departure_icao: string;
  departure_name: string;
  departure_terminal: string;
  family: string;
  flnr: string;
  model: string;
  reg: string;
  scheduled_arrival_local: string;
  scheduled_arrival_utc: string;
  scheduled_departure_local: string;
  scheduled_departure_utc: string;
  status: string;
}
const Input = () => {
  const { flightNumber, setFlightNumber, setResponseData } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useRouter();
  const [data, setData] = useState<data | null>({
    actual_arrival_is_estimated: false,
    actual_arrival_local: "2024-04-08T12:55:26+05:30",
    actual_arrival_utc: "2024-04-08T07:25:26Z",
    actual_departure_is_estimated: false,
    actual_departure_local: "2024-04-08T10:19:46+05:30",
    actual_departure_utc: "2024-04-08T04:49:46Z",
    airline_iata: "AI",
    airline_icao: "AIC",
    airline_name: "Air India",
    arrival_city: "Delhi",
    arrival_gate: "4",
    arrival_iata: "DEL",
    arrival_icao: "VIDP",
    arrival_name: "Delhi Indira Gandhi International Airport",
    arrival_terminal: "3",
    codeshares: null,
    date: "2024-04-08T00:00:00Z",
    departure_city: "Chennai",
    departure_iata: "MAA",
    departure_icao: "VOMM",
    departure_name: "Chennai International Airport",
    departure_terminal: "4",
    family: "A320",
    flnr: "AI430",
    model: "A321",
    reg: "VT-PPW",
    scheduled_arrival_local: "2024-04-08T13:05:00+05:30",
    scheduled_arrival_utc: "2024-04-08T07:35:00Z",
    scheduled_departure_local: "2024-04-08T10:10:00+05:30",
    scheduled_departure_utc: "2024-04-08T04:40:00Z",
    status: "landed",
  });
  const getDate = (daysToAdd = 0) => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + daysToAdd);

    return tomorrow.toISOString().split("T")[0];
  };
  const handlePnr = async () => {
    // checking the flight number through https://flightera-flight-data.p.rapidapi.com/flight/info?flnr=${flightNo} this api
    const date = getDate(0);
    try {
      const response = await fetch(
        `https://flightera-flight-data.p.rapidapi.com/flight/info?flnr=${flightNumber}&date=${date}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_FLIGHT_KEY as string,
            "X-RapidAPI-Host": "flightera-flight-data.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      setData(data[0]);
      // there are two type of response
      // 1. if the flight number is wrong then the response will be { Error:"Flight not found. If you have any questions, please contact us at data@flightera.net with your RapidAPI username and attempted query." }.
      // 2. if the flight number is correct then the response will be { flnr:"6E112"
      // date:"2024-03-25T00:00:00Z"
      // scheduled_departure_utc:"2024-03-25T06:20:00Z"
      // actual_departure_utc:"2024-03-25T06:23:14Z"
      // scheduled_departure_local:"2024-03-25T11:50:00+05:30"
      // actual_departure_local:"2024-03-25T11:53:14+05:30"
      // actual_departure_is_estimated:false
      // departure_icao:"VICG"
      // departure_iata:"IXC"
      // departure_name:"Chandigarh Airport"
      // departure_city:"Chandigarh"
      // arrival_icao:"VAAH"
      // arrival_iata:"AMD"
      // arrival_name:"Ahmedabad International Airport"
      // arrival_city:"Ahmedabad"
      // arrival_t
      // departure_city:"Chandigarh"
      // arrival_icao:"VAAH"
      // arrival_iata:"AMD"
      // arrival_name:"Ahmedabad International Airport"
      // arrival_city:"Ahmedabad"
      // arrival_terminal:"1"
      // arrival_gate:"1"
      // scheduled_arrival_utc:"2024-03-25T08:05:00Z"
      // actual_arrival_utc:"2024-03-25T07:55:55Z"
      // scheduled_arrival_local:"2024-03-25T13:35:00+05:30"
      // actual_arrival_local:"2024-03-25T13:25:55+05:30"
      // actual_arrival_is_estimated:false
      // status:"landed"
      // airline_iata:"6E"
      // airline_icao:"IGO"
      // airline_name:"IndiGo"
      // }.
      if (data.Error) {
        throw new Error(data.Error);
      }
      console.log(data);
      setResponseData({
        insuranceNo: "0",
        userName: "Test User",
        flightNumber: data[0].flnr,
        startDestination: data[0].departure_city,
        endDestination: data[0].arrival_city,
        premiumAmount: 0,
        departureTime: convertTimeString(data[0].scheduled_departure_local),
        pnrNumber: "Test PNR",
      });
      // navigate.push("/plans");
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div
      className={
        "w-full flex flex-row space-x-5 " +
        (openModal ? "backdrop:blur-md" : "")
      }
    >
      <input
        type="text"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
        placeholder="Enter the Flight Number here..."
        className="p-2 rounded-md w-full bg-[#2F363E] placeholder-[#8C8C8C6E] outline-none"
      />
      <button
        onClick={() => {
          // handlePnr();
          setOpenModal(true);
        }}
        className="bg-[#132C51] px-6 py-1 border border-[#285FB3] rounded-md disabled:bg-[#132C51]/70 disabled:cursor-not-allowed "
        disabled={flightNumber.trim() == "" || !flightNumber}
      >
        <Image
          src={"/arrow.svg"}
          className="w-5 h-full"
          alt=""
          width={100}
          height={100}
        />
      </button>
      {openModal && data && (
        <Modal>
          <div className="w-max p-5 space-y-5">
            {/* Header and Cross */}
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="font-medium text-2xl">Flight Information</h1>
              <button className="" onClick={() => setOpenModal(false)}>
                ✕
              </button>
            </div>
            {/* Flight Info */}
            <div className="px-6 w-full flex flex-col gap-2">
              {/* Top Layer */}
              <div className="flex flex-row items-center justify-between w-full">
                {/* Airlines and Flight Number */}
                <div className="flex flex-row gap-3">
                  <div className="font-light">{data.airline_name}</div>
                  <div className="font-semibold">{data.flnr}</div>
                </div>
                {/*Status*/}
                <div className="flex flex-row gap-2 text-TextOnTicket">
                  <div>Status:</div>
                  <div className="font-bold">{data.status}</div>
                </div>
              </div>
              {/* Airport Info */}
              <div className="flex gap-5 items-start">
                {/* Departure Info */}
                <div className="flex flex-col gap-1 py-4 w-max">
                  {/* Airport Name */}
                  <div className="text-lg">{data.departure_name}</div>
                  {/* Airport City, Date and Time */}
                  <div className="flex flex-row justify-between items-center text-TextOnTicket">
                    <div>{data.departure_city}</div>
                    <div>{convertTimestamp(data.actual_departure_local)}</div>
                  </div>
                  {/* Terminal (and other info if available) */}
                  <div className="text-TextOnTicket">
                    Terminal: {data.departure_terminal}
                  </div>
                </div>
                {/* Flight SVG */}
                <div>
                  <Image
                    src={"/flightSVG.svg"}
                    width={150}
                    height={44}
                    alt="flightSVG"
                  />
                </div>
                {/* Arrival Info */}
                <div className="flex flex-col gap-1 py-4 w-max">
                  {/* Airport Name */}
                  <div className="text-lg">{data.arrival_name}</div>
                  {/* Airport City, Date and Time */}
                  <div className="flex flex-row justify-between items-center text-TextOnTicket">
                    <div>{data.arrival_city}</div>
                    <div>{convertTimestamp(data.actual_arrival_local)}</div>
                  </div>
                  {/* Terminal (and other info if available) */}
                  <div className="text-TextOnTicket">
                    Terminal: {data.arrival_terminal}
                  </div>
                </div>
              </div>
            </div>
            {/* Proceed To Plans */}
            <div className="w-full">
              <div className="w-full flex items-end justify-end">
                <button
                  className={`py-1 px-3 ${
                    data.status === "live" || data.status === "landed"
                      ? "bg-Rejection-background border border-Rejection-stroke"
                      : "bg-Primary border border-Secondary"
                  } rounded-lg text-base font-medium text-white flex items-center gap-2 disabled:cursor-not-allowed`}
                  onClick={() => {}}
                  type="submit"
                  disabled={data.status !== ("live" || "landed") ? true : false}
                >
                  {data.status !== ("live" || "landed")
                    ? data.status
                    : "Proceed to Plans"}
                  <Image
                    src={"/image.png"}
                    alt="arrow"
                    height={32}
                    width={32}
                  />
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Input;
