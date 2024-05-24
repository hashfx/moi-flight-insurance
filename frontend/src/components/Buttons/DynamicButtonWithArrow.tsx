"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/types/button";
import Image from "next/image";
import { useAuth } from "@/context/AuthProvider";
import logic from "@/interface/logic";
import { calculateRemainingTime } from "../utils/CalculateTime";
const DynamicButtonWithArrow = ({
  buttonText,
  borderColor,
  backgroundColor,
  type,
}: Button) => {
  const {
    setOpenClaimModal,
    wallet,
    setRefillTime,
    setBalance,
    balance,
    refillTime,
  } = useAuth();
  const { ClaimToken, GetTokenClaimAmount, GetNextClaim } = logic;
  const [claimAmount, setClaimAmount] = useState();
  const [nextClaim, setNextClaim] = useState();
  const [isClaiming, setIsClaiming] = useState(false);
  const handleClaimToken = async () => {
    const [{ claimAmount }, { nextClaim }] = await Promise.all([
      GetTokenClaimAmount(),
      GetNextClaim(wallet?.getAddress()),
    ]);
    setClaimAmount(claimAmount);
    setNextClaim(nextClaim);
  };

  useEffect(() => {
    handleClaimToken();
  }, [wallet]);

  useEffect(() => {
    const time = setInterval(() => {
      setRefillTime(calculateRemainingTime(nextClaim));
    }, 1000);

    return () => clearInterval(time);
  }, [nextClaim, setRefillTime]);

  const handleOnClaim = async () => {
    try {
      setIsClaiming(true);
      await ClaimToken(wallet);
      const { nextClaim } = await GetNextClaim(wallet?.getAddress());
      setNextClaim(nextClaim);
      setBalance(balance + claimAmount);
      console.log(`Claimed ${claimAmount} successfully`);
      setIsClaiming(false);
      setOpenClaimModal(false);
    } catch (error) {
      console.error(error);
      setIsClaiming(false);
    }
  };
  return (
    <div className="flex flex-col items-center w-full gap-3">
      <button
        className={`w-fit py-1 px-3 ${backgroundColor} border ${borderColor} rounded-lg text-base font-medium text-white flex items-center gap-2 disabled:cursor-not-allowed`}
        onClick={handleOnClaim}
        disabled={refillTime !== "00:00:00" || isClaiming ? true : false}
        type={type}
      >
        {buttonText}
        <Image src={"/image.png"} alt="arrow" height={32} width={32} />
      </button>
      <p className="text-gray-500">Remaining Time: {refillTime}</p>
      {isClaiming && (
        <p className="text-gray-500">
          Please wait while the current request is being processed
        </p>
      )}
    </div>
  );
};

export default DynamicButtonWithArrow;
