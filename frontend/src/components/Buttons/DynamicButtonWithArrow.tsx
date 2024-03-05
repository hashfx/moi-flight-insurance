import React from "react";
import { Button } from "@/types/button";
import Image from "next/image";
const DynamicButtonWithArrow = ({
  buttonText,
  handle,
  borderColor,
  backgroundColor,
}: Button) => {
  return (
    <button
      className={`w-button py-2 px-6 ${backgroundColor} border ${borderColor} rounded-lg text-xl font-medium text-white flex items-center gap-2`}
      onClick={handle}
    >
      {buttonText}
      <Image src={"/image.png"} alt="arrow" height={32} width={32} />
    </button>
  );
};

export default DynamicButtonWithArrow;
