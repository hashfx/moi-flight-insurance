'use client';
import React from "react";
import { data } from "@/components/Dashboard/data.js";
import DynamicButton from "@/components/Buttons/DynamicButton";
import Link from "next/link";
import { useAuth } from "@/context/AuthProvider";
const FlighInsurance = () => {
  const {selectedData} = useAuth();
  return (
        <div className="flex items-center justify-center w-full mb-12">
          <div>
            {selectedData.status === "Delayed" ? (
              <div className="flex flex-col items-center justify-center gap-16">
                <div className="font-bold text-6xl text-Lighter flex items-center justify-center">
                  Your flight is delayed
                </div>
                <Link href={"/dashboard/claim"}>
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
  );
};

export default FlighInsurance;
