import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdOutlineReadMore } from "react-icons/md";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubjectSyllabus = () => {
  const { grade, classId, subjectId } = useParams();
  const [chapters, setChapters] = useState([]);
  const [subjectName, setSubjectName] = useState("");
  const navigate = useNavigate();


  const getAllChapters = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/chapter/${classId}/${subjectId}`,
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
        setChapters(response.data.data)
        setSubjectName(response.data.data[0].subjectId.subjectName || "")

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
    getAllChapters();
  }, []);

  const handleChatperClick = (chapterId) => {
    navigate(`/exercise/${classId}/${subjectId}/${chapterId}`);
  };


  return (
    <section className="container mx-auto py-12 font-Alice">
      <h1 className="md:text-5xl text-3xl font-bold text-center mb-2">{`Class ${grade} ${subjectName}`}</h1>
      <p className="md:text-lg text-sm text-gray-700 text-center mb-8 px-6">
        {`Select any chapter from the options below to begin learning Class  ${grade} ${subjectName} with`}{" "}
        <span className="text-[#009c86] font-bold"> FormaScholar </span>
      </p>

      <div className="flex lg:flex-row lg:justify-between flex-col items-center lg:py-14 py-8">
        <div className="lg:w-[30%] h-full mx-2 mb-4  py-4 lg:float-left lg:mr-2">
          {/* Ad Content Left */}
        </div>
        <div className="grid grid-cols-1 gap-4 w-full h-full px-8">
          {chapters.map((chapter, index) => (
            <button
            onClick={() => handleChatperClick(chapter._id)}
              key={index}
              className="relative p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] hover:bg-[#009c86] hover:text-white transition-colors duration-300 flex flex-wrap items-center justify-between"
            >
              <span>{chapter.chapterName}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                <MdOutlineReadMore className="w-6 h-6" />
              </span>
            </button>
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
