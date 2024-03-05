import React from "react";
import Ticket from "@/components/Dashboard/Ticket";
import TicketNew from "@/components/Dashboard/TicketNew";
import { data } from "@/components/Dashboard/data.js";
import DynamicButton from "@/components/Buttons/DynamicButton";
import Link from "next/link";
const FlighInsurance = () => {
  return (
    <div className="flex flex-col gap-4 pt-16">
      <div className="text-3xl font-light mt-5">Insurance Details</div>
      <div className="flex gap-20 h-full">
        {/* {data.map((singleTicket, index) => {
          return <TicketNew {...singleTicket} key={index} />;
        })} */}
        <TicketNew {...data[1]} />
        <div className="flex items-center justify-center w-full mb-12">
          <div>
            {data[1].status === "Delayed" ? (
              <div className="flex flex-col items-center justify-center gap-16">
                <div className="font-bold text-6xl text-Lighter flex items-center justify-center">
                  Your flight is delayed
                </div>
                <Link href={"/timeline"}>
                  <DynamicButton
                    buttonText="Claim Insurance"
                    //   handle={handleClaim}
                    borderColor="border-[#95BFFF]"
                    backgroundColor="bg-Secondary"
                  />
                </Link>
              </div>
            ) : (
              <div className="font-bold text-6xl text-Lighter flex items-center justify-center">
                Your flight is on time
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlighInsurance;
