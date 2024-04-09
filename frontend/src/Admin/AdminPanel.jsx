import React from "react";
import { useEffect } from "react";
import DashHome from "./DashHome";
import SideNav from "./SideNav"

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

      <DashHome />

      <div className="flex gap-64 max-w-full container mx-auto md:px-14 md:py-12 py-8 px-6 overflow-hidden bg-gradient-to-b bg-white  text-white"></div>
    </section>
  );
}

export default AdminPanel;
