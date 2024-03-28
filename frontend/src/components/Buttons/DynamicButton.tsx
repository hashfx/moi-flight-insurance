import { Button } from "@/types/button";
import React from "react";

const DynamicButton = ({
  buttonText,
  handle,
  borderColor,
  backgroundColor,
  type,
}: Button) => {
  return (
    <button
      className={`w-max p-2 px-6 ${backgroundColor} border ${borderColor} rounded-lg text-xl font-medium text-white`}
      onClick={handle}
      type={type}
    >
      {buttonText}
    </button>
  );
};

export default DynamicButton;
