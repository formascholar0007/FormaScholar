import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { MdOutlineReadMore } from "react-icons/md";

const SubjectSyllabus = () => {
  const { grade, subject } = useParams();

  const chapters = [
    "Chapter 1 – Rational Numbers",
    "Chapter 2 – Linear Equations in One Variable",
    "Chapter 3 – Understanding Quadrilaterals",
    "Chapter 4 – Data Handling",
    "Chapter 5 – Square and Square Roots",
    "Chapter 6 – Cube and Cube Roots",
    "Chapter 7",
    "Chapter 8",
  ];

  return (
    <section className="container mx-auto py-12 font-Alice">
      <h1 className="md:text-4xl text-2xl font-bold text-center mb-2">{`Class ${grade} ${subject}`}</h1>
      <p className="md:text-lg text-sm text-gray-700 text-center mb-8">{`Syllabus for Class ${grade} ${subject}`}</p>

      <div className="flex lg:flex-row lg:justify-between flex-col items-center lg:py-14 py-8">
        <div className="lg:w-[30%] h-full mx-2 mb-4  py-4 bg-red-500  lg:float-left lg:mr-2">
          {/* Ad Content Left */}
        </div>
        <div className="grid grid-cols-1 gap-4 w-full h-full px-8 ">
          {chapters.map((chapter, index) => (
            <NavLink
              key={index}
              to={`/subjectSyllabus/${grade}/${subject}/${index + 1}`}
              className="relative p-4 border shadow-md border-[#009c86] rounded-lg text-[#009c86] hover:bg-[#009c86] hover:text-white transition-colors duration-300 flex flex-wrap items-center justify-between"
            >
              <span>{chapter}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                <MdOutlineReadMore className="w-6 h-6" />
              </span>
            </NavLink>
          ))}
        </div>
        <div className="lg:w-[30%] h-full mx-2 mt-4  border-red-500 py-4 bg-red-500  float-right lg:ml-2">
          {/* Ad Content Right */}
        </div>
      </div>
    </section>
  );
};

export default SubjectSyllabus;
