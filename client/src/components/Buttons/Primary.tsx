import React from "react";

interface primaryProps {
  text: string;
}
const Primary = ({ text }: primaryProps) => {
  return (
    <div className="border-2 border-[#424242] rounded-lg flex items-center justify-center text-black">
      <button className="p-3 text-base font-semibold">{text}</button>
    </div>
  );
};

export default Primary;
