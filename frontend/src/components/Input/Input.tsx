'use client';
import React from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import { convertTimeString } from "@/containers/components/TimeConverter";
const Input = () => {
  const {flightNumber, setFlightNumber, setResponseData} = useAuth();
  const navigate = useRouter();
  
  const getDate = (daysToAdd = 0) => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + daysToAdd);

    return tomorrow.toISOString().split('T')[0];
  };
  const handlePnr = async () => {
    // checking the flight number through https://flightera-flight-data.p.rapidapi.com/flight/info?flnr=${flightNo} this api 
    const date = getDate(0);
    try {
      const response = await fetch(`https://flightera-flight-data.p.rapidapi.com/flight/info?flnr=${flightNumber}&date=${date}`, {
        method: "GET",
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_FLIGHT_KEY as string,
          'X-RapidAPI-Host': 'flightera-flight-data.p.rapidapi.com'
        }
      });
      const data = await response.json();
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
      if(data.Error){
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
	
      })
      navigate.push("/plans");
    } catch (error: any) {
      console.log(error);
    }
  }
  return (
    <div className="w-full flex flex-row space-x-5">
      <input
        type="text"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
        placeholder="Enter the Flight Number here..."
        className="p-2 rounded-md w-full bg-[#2F363E] placeholder-[#8C8C8C6E] outline-none"
      />
      <button onClick={handlePnr} className="bg-[#132C51] px-6 py-1 border border-[#285FB3] rounded-md disabled:bg-[#132C51]/70 disabled:cursor-not-allowed " disabled={flightNumber.trim() == "" || !flightNumber}>
        <Image
          src={"/arrow.svg"}
          className="w-5 h-full"
          alt=""
          width={100}
          height={100}
        />
      </button>
    </div>
  );
};

export default Input;
