import React from "react";
import { Outlet } from "react-router-dom";
import SideBarMenu from "./SideBarMenu";
const Dashboard = () => {
  return (
    <div className="flex flex-wrap h-full w-full">
      <SideBarMenu />
      <div className="p-3 order-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
