import React from "react";

const StatusCard = () => {
  return (
    <div className="flex flex-row rounded-full justify-center items-center space-x-2 bg-gray-200 w-fit px-2 py-1">
      <div className="rounded-full h-2 w-2 bg-white" />
      <p className="text-xs text-gray-500">Not Started</p>
    </div>
  );
};

export default StatusCard;
