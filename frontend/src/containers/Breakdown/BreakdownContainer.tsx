import React from "react";
import Breakdown from "@/components/Dashboard/Breakdown";
import DynamicButton from "@/components/Buttons/DynamicButton";
const breakdown = [
  {
    transectionStatus: "Deposit",
    token: "100",
  },
  {
    transectionStatus: "Withdraw",
    token: "50",
  },
  {
    transectionStatus: "Deposit",
    token: "100",
  },
  {
    transectionStatus: "Withdraw",
    token: "50",
  },
];
const BreakdownContainer = () => {
  return (
    <div className="flex flex-col">
      {breakdown.map((item, id) => (
        <Breakdown
          key={id}
          transectionStatus={item.transectionStatus}
          token={item.token}
          endpoint={breakdown}
          id={id}
        />
      ))}
      <div className="w-full flex items-center justify-center">
        <DynamicButton
          buttonText={"Claim upto ₹" + "3000"}
          //   handle={handleClaim}
          borderColor="border-[#95BFFF]"
          backgroundColor="bg-Secondary"
        />
      </div>
    </div>
  );
};

export default BreakdownContainer;
