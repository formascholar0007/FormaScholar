import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { MdOutlineTouchApp } from "react-icons/md";

function Chapters() {
  const { grade, subject, chapter } = useParams();

  return (
    <section className="container mx-auto py-12 font-Alice">
      <h1 className="md:text-5xl text-3xl font-bold text-center mb-2">
        {chapter} of{" "}
      </h1>
      <h1 className="md:text-5xl text-3xl font-bold text-center mb-2">
        {" "}
        Class {grade}
      </h1>
      <p className="md:text-lg text-sm text-gray-700 text-center mb-8 px-6">
        {`Select any chapter from the options below to begin learning Class ${grade} ${subject} with`}
        <span className="text-[#009c86] font-bold"> FormaScholar </span>
      </p>
      <div className="flex lg:flex-row lg:justify-between flex-col items-center lg:py-14 py-8">

        <div className="grid grid-cols-1 gap-4 w-full h-full px-8 md:px-28">

          <h1 className="md:text-3xl text-2xl font-semibold">Exercise in Sequence</h1>
          <div className="flex gap-2">
            <MdOutlineTouchApp className="w-7 h-7 text-[#009c86]" />
            <NavLink to={`#`} className="lg:text-2xl text-xl text-black hover:text-[#009c86] w-fit"> Ex 1.1 </NavLink>
          </div>
          <div className="flex gap-2">
            <MdOutlineTouchApp className="w-7 h-7  text-[#009c86]" />
            <NavLink to={`#`} className="lg:text-2xl text-xl text-black hover:text-[#009c86] w-fit"> Ex 1.2 </NavLink>
          </div>
          <div className="flex gap-2">
            <MdOutlineTouchApp className="w-7 h-7  text-[#009c86]" />
            <NavLink to={`#`} className="lg:text-2xl text-xl text-black hover:text-[#009c86] w-fit"> Ex 1.3 </NavLink>
          </div>
          <div className="flex gap-2">
            <MdOutlineTouchApp className="w-7 h-7  text-[#009c86]" />
            <NavLink to={`#`} className="lg:text-2xl text-xl text-black hover:text-[#009c86] w-fit"> Ex 1.4 </NavLink>
          </div>

            

        </div>

        <div className="lg:w-[32%] h-full mx-2 mt-4  py-4float-right lg:ml-2">
          {/* Ad Content Right */}
        </div>
      </div>
    </section>
  );
}

export default Chapters;
