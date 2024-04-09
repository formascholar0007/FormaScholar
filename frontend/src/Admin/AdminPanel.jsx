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
    <section className="lg:min-h-screen min-h-screen font-Alice overflow-hidden">
      <SideNav />

        <Outlet />

    </section>
  );
}

export default AdminPanel;
