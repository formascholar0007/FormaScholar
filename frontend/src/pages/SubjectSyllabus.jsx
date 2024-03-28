import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { MdOutlineReadMore } from "react-icons/md";

const SubjectSyllabus = () => {

    const { grade, subject } = useParams();

    const classSubjects = {
      8: [
          { subject: 'Maths', chapters: ['Chapter 1 - Algebra 8', 'Chapter 2 - Geometry 8', 'Chapter 3 - Calculus 8'] },
          { subject: 'Science', chapters: ['Chapter 1 - Biology 8', 'Chapter 2 - Chemistry 8', 'Chapter 3 - Physics 8'] },
          { subject: 'History', chapters: ['Chapter 1 - Ancient History 8', 'Chapter 2 - Medieval History 8', 'Chapter 3 - Modern History 8'] },
      ],
      9: [
          { subject: 'Maths', chapters: ['Chapter 1 - Algebra 9', 'Chapter 2 - Geometry 9', 'Chapter 3 - Calculus 9'] },
          { subject: 'Science', chapters: ['Chapter 1 - Biology 9', 'Chapter 2 - Chemistry 9', 'Chapter 3 - Physics 9'] },
          { subject: 'History', chapters: ['Chapter 1 - Ancient History 9', 'Chapter 2 - Medieval History 9', 'Chapter 3 - Modern History 9'] },
      ],
      10: [
          { subject: 'Maths', chapters: ['Chapter 1 - Algebra 10', 'Chapter 2 - Geometry 10', 'Chapter 3 - Calculus 10'] },
          { subject: 'Science', chapters: ['Chapter 1 - Biology 10', 'Chapter 2 - Chemistry 10', 'Chapter 3 - Physics 10'] },
          { subject: 'History', chapters: ['Chapter 1 - Ancient History 10', 'Chapter 2 - Medieval History 10', 'Chapter 3 - Modern History 10'] },
      ],
      11: [
          { subject: 'Maths', chapters: ['Chapter 1 - Algebra 11', 'Chapter 2 - Geometry 11', 'Chapter 3 - Calculus 11'] },
          { subject: 'Science', chapters: ['Chapter 1 - Biology 11', 'Chapter 2 - Chemistry 11', 'Chapter 3 - Physics 11'] },
          { subject: 'History', chapters: ['Chapter 1 - Ancient History 11', 'Chapter 2 - Medieval History 11', 'Chapter 3 - Modern History 11'] },
          { subject: 'Computer', chapters: ['Chapter 1 - Introduction to Computers 11', 'Chapter 2 - Programming Basics 11', 'Chapter 3 - Data Structures 11'] },
      ],
      12: [
          { subject: 'Maths', chapters: ['Chapter 1 - Algebra 12', 'Chapter 2 - Geometry 12', 'Chapter 3 - Calculus 12'] },
          { subject: 'Science', chapters: ['Chapter 1 - Biology 12', 'Chapter 2 - Chemistry 12', 'Chapter 3 - Physics 12'] },
          { subject: 'History', chapters: ['Chapter 1 - Ancient History 12', 'Chapter 2 - Medieval History 12', 'Chapter 3 - Modern History 12'] },
          { subject: 'Computer', chapters: ['Chapter 1 - Computer Science Fundamentals 12', 'Chapter 2 - Algorithms and Data Structures 12', 'Chapter 3 - Database Management 12'] },
      ],
  };
    
      const subjectsWithChapters = classSubjects[grade] || [];
      const selectedSubject = subjectsWithChapters.find(item => item.subject === subject);
      const chapters = selectedSubject ? selectedSubject.chapters : [];

  return (
    <section className="container mx-auto py-12 font-Alice">
      <h1 className="md:text-5xl text-3xl font-bold text-center mb-2">{`Class ${grade} ${subject}`}</h1>
      <p className="md:text-lg text-sm text-gray-700 text-center mb-8 px-6">{`Select any chapter from the options below to begin learning Class ${grade} ${subject} with`} <span className="text-[#009c86] font-bold"> FormaScholar </span></p>

      <div className="flex lg:flex-row lg:justify-between flex-col items-center lg:py-14 py-8">
        <div className="lg:w-[30%] h-full mx-2 mb-4  py-4 lg:float-left lg:mr-2">
          {/* Ad Content Left */}
        </div>
        <div className="grid grid-cols-1 gap-4 w-full h-full px-8">
        {chapters.map((chapter, index) => (
          <NavLink
            key={index}
            to={`/chapters/${grade}/${subject}/${chapter}`}
            className="relative p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] hover:bg-[#009c86] hover:text-white transition-colors duration-300 flex flex-wrap items-center justify-between"
          >
            <span>{chapter}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
              <MdOutlineReadMore className="w-6 h-6" />
            </span>
          </NavLink>
        ))}
        </div>
        <div className="lg:w-[30%] h-full mx-2 mt-4  py-4float-right lg:ml-2">
          {/* Ad Content Right */}
        </div>
      </div>
    </section>
  );
};

export default SubjectSyllabus;
