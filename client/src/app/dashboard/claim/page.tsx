import React from "react";
import Status from "@/components/Dashboard/Status/Status";
import SearchBar from "@/components/Dashboard/Search/SearchBar";
import AuthModel from "@/components/Auth/AuthModel";
const page = () => {
  return (
    <div className="w-screen h-screen p-5">
      <div className="flex flex-row justify-between items-center">
        <SearchBar />
        <AuthModel />
      </div>
      <Status />
    </div>
  );
};

export default page;
