import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import { FaRegUser } from "react-icons/fa";

function AdminPanel(props) {
  useEffect(() => {
    props.setIsAdmin(true);

    return () => {
      props.setIsAdmin(false);
    };
  });

  return (
    <section className="flex lg:min-h-screen min-h-screen font-Alice overflow-hidden">
      <div className="w-[20%]">
        <SideNav />
      </div>
      <div className="w-[80%]">
        <Outlet />
      </div>
    </section>
  );
}

export default AdminPanel;
