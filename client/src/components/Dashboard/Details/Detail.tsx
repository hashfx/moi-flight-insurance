import React from "react";

const Detail = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <h1 className="font-medium">{title}</h1>
      <p className="text-gray-400 place-self-end">{value}</p>
    </div>
  );
};

export default Detail;
