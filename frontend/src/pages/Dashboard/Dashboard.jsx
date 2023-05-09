import React from "react";
import { Outlet } from "react-router-dom";
import SideBarMenu from "./SideBarMenu";
const Dashboard = ({auth}) => {
  return (
    // <div className="flex flex-wrap h-full w-full">
    <div className="grid grid-cols-6 h-full w-full row-span-full">
      <SideBarMenu auth={auth}/>
      <div className="order-2 col-span-6 mx-0 px-0 md:col-span-5 md:row-auto row-start-2 row-span-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
