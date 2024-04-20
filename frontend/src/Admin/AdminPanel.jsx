import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

function AdminPanel(props) {
  useEffect(() => {
    props.setIsAdmin(true);

    return () => {
      props.setIsAdmin(false);
    };
  });

  return (
    <section className="flex lg:min-h-screen min-h-screen font-Alice overflow-hidden">
      <div className="w-[26%]">
        <SideNav />
      </div>
      <div className="w-[70%]">
        <Outlet />
      </div>
    </section>
  );
}

export default AdminPanel;
