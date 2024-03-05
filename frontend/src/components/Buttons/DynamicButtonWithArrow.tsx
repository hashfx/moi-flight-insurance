import React from "react";
import { Button } from "@/types/button";
import Image from "next/image";
const DynamicButtonWithArrow = ({
  buttonText,
  handle,
  borderColor,
  backgroundColor,
  type,
}: Button) => {
  return (
    <button
      className={`w-fit py-1 px-3 ${backgroundColor} border ${borderColor} rounded-lg text-base font-medium text-white flex items-center gap-2`}
      onClick={handle}
      type={type}
    >
      {buttonText}
      <Image src={"/image.png"} alt="arrow" height={32} width={32} />
    </button>
  );
};

export default DynamicButtonWithArrow;
