import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function ClassCard({ classId, grade, heading }) {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  const [subject, setSubject] = useState([]);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  const handleSubjectClick = (subjectId) => {
    navigate(`/subjectSyllabus/${grade}/${classId}/${subjectId}`);
  };

  const handleGetAllSubject = async () => {
    try {
      const response = await axios.get(
        `https://formascholar.onrender.com/api/v1/subject/${classId}`,
        {
          headers: {
            Authorization: `bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        console.warn(response.data.data);
        setSubject(response.data.data);
      } else {
        console.log(response.data.message);
        toast.error("Failed to fetch classes. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching classes:", error);
      toast.error("Failed to Load classes. Please try again later.");
    }
  };

  useEffect(() => {
    handleGetAllSubject();
  }, []);

  return (
    <section
      className="lg:w-[30%] md:w-[35%] w-[70%] md:h-64 h-70 m-6 bg-white shadow-lg p-2 md:p-4 rounded-lg border border-gray-200 transform hover:scale-105 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.6s ease-in-out" }}
    >
      <span className="relative flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#009c86] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#009c86]"></span>
      </span>

      <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center">
        {heading}
      </h2>
      <p>
        In this class, you'll learn about different subjects like{" "}
        {subject.map((subject) => subject.subjectName + " ")} to improve your
        thinking and knowledge
      </p>
      <div
        className={`flex justify-start flex-wrap ${
          showOptions ? "opacity-100" : "opacity-0"
        } transition-opacity duration-700 delay-100`}
      >
        {subject.map((subject, index) => (
          <button
            key={index}
            onClick={() => handleSubjectClick(subject._id)}
            className="py-1 px-3 lg:mr-3 mr-1 md:py-2 md:px-4 mt-2 border-2 border-[#009c86] hover:bg-[#009c86] hover:text-white text-black font-bold rounded-md md:text-lg text-md transition-opacity duration-500 ease-in-out"
            style={{
              transitionDelay: `${showOptions ? index * 100 : 0}ms`,
            }}
          >
            {subject.subjectName}
          </button>
        ))}
      </div>
    </section>
  );
}

export default ClassCard;
