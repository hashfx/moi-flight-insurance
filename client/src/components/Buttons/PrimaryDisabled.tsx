import React from "react";

interface primaryProps {
  text: string;
}
const PrimaryDisabled = ({ text }: primaryProps) => {
  return (
    <div className="border-2 border-[#A7A7A7] bg-[#D6D6D6] rounded-lg flex items-center justify-center text-gray-400">
      <button className="p-3 text-base font-semibold">{text}</button>
    </div>
  );
};

export default PrimaryDisabled;
