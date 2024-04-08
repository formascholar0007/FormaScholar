import React from "react";
import { useEffect } from "react";
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
      <div className="max-w-full container mx-auto md:px-8 md:py-12 py-8 px-6 overflow-hidden bg-gradient-to-b bg-white  text-white">
        <div className="lg:grid-cols-2 grid grid-cols-1 gap-8">

          <SideNav />

        </div>
      </div>
    </section>
  );
}

export default AdminPanel;
