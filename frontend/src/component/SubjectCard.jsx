import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function SubjectCard(props) {
  const navigate = useNavigate(0);

  const handleClick = (e) =>{
    e.preventDefault();
    navigate(`/specificClass/${props.subjectName}`)
  }

  return (
    <section
      className="lg:w-[16%] w-[55%] h-full m-6 bg-gradient-to-b from-gray-900 to-gray-900 shadow-lg md:p-4 rounded-lg border border-gray-200 transform hover:scale-105 overflow-hidden"
      style={{ transition: "transform 0.6s ease-in-out" }}
      onClick={handleClick}
    >
      <div className="p-2 text-center">
        <img
          src={props.subjectIcon}
          alt="Learn Maths from FormaScholar"
          loading="lazy"
          className="w-32 h-auto mx-auto"
        />
        <NavLink
          to="/"
          className="block mt-4 text-lg font-semibold text-[#009c86] hover:text-[#17776a]"
        >
          {props.subjectName}
        </NavLink>
      </div>
    </section>
  );
}

export default SubjectCard;
