import React from "react";
import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl md:text-[180px] font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#06c4ab] px-2 text-md md:text-2xl text-white rounded rotate-12 absolute font-Alice">
        Page Not Found
      </div>
      <button className="mt-5">
        <NavLink
          to="/"
          className="relative inline-block text-sm font-medium text-[#06c4ab] group active:text-orange-500 focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#06c4ab] group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current text-xl">
            Go Home
          </span>
        </NavLink>
      </button>
    </main>
  );
}

export default PageNotFound;
