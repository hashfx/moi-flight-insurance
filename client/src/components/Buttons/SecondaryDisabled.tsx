import React from "react";

interface secondaryProps {
  text: string;
}
const SecondaryDisabled = ({ text }: secondaryProps) => {
  return (
    <div className="border-2 bg-[#D6D6D6] rounded-lg flex items-center justify-center text-gray-400">
      <button className="p-3 text-base font-semibold">{text}</button>
    </div>
  );
};

export default SecondaryDisabled;
