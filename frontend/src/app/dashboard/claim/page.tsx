import Breakdown from "@/components/Dashboard/Breakdown";
import React from "react";
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
];

const timeline = () => {
  return (
    <div className="w-full flex justify-between flex-col">
    <div className="">
      {breakdown.map((item, id) => (
        <Breakdown
          key={id}
          transectionStatus={item.transectionStatus}
          token={item.token}
          endpoint={breakdown}
          id={id}
        />
      ))}
    </div>
      <div className="w-full flex items-center justify-center">
        <DynamicButton
          buttonText={"Claim upto ₹" + "3000"}
            // handle={handleClaim}
          borderColor="border-[#95BFFF]"
          backgroundColor="bg-Secondary"
        />
      </div>
    </div>
  );
};

export default timeline;
