import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { MdOutlineTouchApp } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { MdOutlineReadMore } from "react-icons/md";


function UserExercise() {
  const { classId, subjectId, chapterId } = useParams();
  const [exercise, setExercise] = useState([]);

  const getAllChapters = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/exercise/${classId}/${subjectId}/${chapterId}`,
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
        setExercise(response.data.data);
        // setSubjectName(response.data.data[0].subjectId.subjectName || "")
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

  const handleChatperClick = () => {};

  return (
    <section className="container mx-auto py-12 font-Alice">
      <h1 className="md:text-5xl text-3xl font-bold text-center mb-2">
        {chapterId} of{" "}
      </h1>
      <h1 className="md:text-5xl text-3xl font-bold text-center mb-2">
        {" "}
        Class {classId}
      </h1>
      <p className="md:text-lg text-sm text-gray-700 text-center mb-8 px-6">
        {`Select any chapter from the options below to begin learning Class ${classId} ${subjectId} with`}
        <span className="text-[#009c86] font-bold"> FormaScholar </span>
      </p>
      <div className="flex lg:flex-row lg:justify-between flex-col items-center lg:py-14 py-8">
        <div className="grid grid-cols-1 gap-4 w-full h-full px-8 md:px-28">
          <h1 className="md:text-3xl text-2xl font-semibold">
            Exercise in Sequence
          </h1>
          <div className="grid grid-cols-1 gap-4 w-full h-full px-8">
            {exercise.map((exercise, index) => (
              <button
                onClick={() => handleChatperClick(exercise._id)}
                key={index}
                className="relative p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] hover:bg-[#009c86] hover:text-white transition-colors duration-300 flex flex-wrap items-center justify-between"
              >
                <span>{exercise.exerciseName}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <MdOutlineReadMore className="w-6 h-6" />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:w-[32%] h-full mx-2 mt-4  py-4float-right lg:ml-2">
          {/* Ad Content Right */}
        </div>
      </div>
    </section>
  );
}

export default UserExercise;
