import React from "react";
import Ticket from "@/components/Dashboard/Ticket";
import TicketNew from "@/components/Dashboard/TicketNew";
import { data } from "@/components/Dashboard/data.js";
const FlighInsurance = () => {
  return (
    <div className="flex flex-col gap-4 pt-16">
      <div className="text-3xl font-light mt-5">Insurance Details</div>
      <div className="flex gap-20">
        {data.map((singleTicket, index) => {
          return <TicketNew {...singleTicket} key={index} />;
        })}
      </div>
    </div>
  );
};

export default FlighInsurance;
