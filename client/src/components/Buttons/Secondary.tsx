import React from "react";

interface secondaryProps {
  text: string;
}
const Secondary = ({ text }: secondaryProps) => {
  return (
    <div className="border-2 border-[#424242] bg-[#424242] rounded-lg flex items-center justify-center text-white">
      <button className="p-3 text-base font-semibold">{text}</button>
    </div>
  );
};

export default Secondary;
