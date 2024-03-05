import { Button } from "@/types/button";
import React from "react";

const DynamicButton = ({
  buttonText,
  handle,
  borderColor,
  backgroundColor,
}: Button) => {
  return (
    <button
      className={`w-button p-button ${backgroundColor} border ${borderColor} rounded-lg text-xl font-medium text-white`}
      onClick={handle}
    >
      {buttonText}
    </button>
  );
};

export default DynamicButton;
