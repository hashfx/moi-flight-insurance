import React from "react";

const SearchBar = () => {
  return (
    <div className="rounded-full h-20 w-1/2">
      <input
        type="text"
        placeholder="Search..."
        className="h-full w-full outline-none rounded-full bg-white text-black p-5 placeholder-[#A1A2AF]"
      />
    </div>
  );
};

export default SearchBar;
