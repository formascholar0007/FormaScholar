import React from "react";
import { NavLink, useParams } from "react-router-dom";

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

      <h1>Exercise in Sequence</h1>
      <NavLink
       to={`#`}> Ex 1.1 </NavLink>

    </section>
  );
}

export default Chapters;
