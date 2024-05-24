import React from "react";

const Field = ({ Heading, Content }: { Heading: string; Content: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="font-medium text-[12px] text-TextOnTicket w-max">
        {Heading}
      </div>
      <div className="font-bold text-base text-white tracking-[0.2px]">
        {Content}
      </div>
    </div>
  );
};

export default Field;
