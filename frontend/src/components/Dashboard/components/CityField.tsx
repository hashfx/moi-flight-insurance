import React from "react";

const CityField = ({
  Heading,
  FullName,
}: {
  Heading: string;
  FullName: string;
}) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <p className="text-[40px] font-medium leading-[52px] text-white">
        {Heading}
      </p>
      <p className="opacity-70 text-xs leading-[21.60px] text-white">
        {FullName}
      </p>
    </div>
  );
};

export default CityField;
