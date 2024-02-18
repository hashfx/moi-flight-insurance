import React from "react";
import SearchBar from "@/components/Dashboard/Search/SearchBar";

import AuthModel from "@/components/Auth/AuthModel";
import Statusbar from "@/components/Dashboard/Sidebar/Statusbar";
import StatusList from "@/components/Dashboard/Status/StatusList";
const page = () => {
  return (
    <div className="w-screen h-screen p-5">
      <div className="flex flex-row justify-between items-center">
        <SearchBar />
        <AuthModel />
      </div>
      <div className="h-[90%] flex mt-2 px-4 gap-6">
        <Statusbar />
        <StatusList />
      </div>
    </div>
  );
};

export default page;
