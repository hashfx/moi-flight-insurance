import React from "react";
import Image from "next/image";
const SearchBar = () => {
  return (
    <div className="w-1/2 flex px-5 rounded-3xl py-2 items-center gap-3 outline-none bg-white text-black shadow-md m-2">
      <div>
        <Image
          src={"search-icon.svg"}
          height={25}
          width={25}
          alt="search-icon"
        />
      </div>
      <div className="text-lg">
        <input
          type="text"
          placeholder="Search anything"
          className="p-2 outline-none placeholder-[#A1A2AF]"
        />
      </div>
    </div>
  );
};

export default SearchBar;
