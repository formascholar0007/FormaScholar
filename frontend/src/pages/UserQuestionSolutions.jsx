import React from "react";
import { useParams } from "react-router-dom";
import { MdOutlineReadMore } from "react-icons/md";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserQuestionSolutions = () => {
  const { classId, subjectId, chapterId, exerciseId } = useParams();
  const [questionanswers, setquestionanswers] = useState([]);
  const grade = 10;

  const getAllChapters = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/question/${classId}/${subjectId}/${chapterId}/${exerciseId}`,
        {
          headers: {
            Authorization: `bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      if (response.data.success) {
        setquestionanswers(response.data.data);
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


  return (
    <section className=" mx-auto py-12 font-Alice">
      <h1 className="md:text-5xl text-3xl font-bold text-center mb-2">{`Class ${grade} All Questions and Answer`}</h1>
      <p className="md:text-lg text-sm text-gray-700 text-center mb-4 px-6">
        {`Select any chapter from the options below to begin learning Class  ${grade}  with`}{" "}
        <span className="text-[#009c86] font-bold"> FormaScholar </span>
      </p>

      <main className="flex justify-start flex-col items-center lg:py-14 py-8">
        <div className="max-w-[80%] h-full p-12 mb-2">
          {/* Ad Content top */}
        </div>
        <div className="grid grid-cols-1 gap-2 w-full h-full px-8">
          {questionanswers.map((questionanswerItem, index) => (
            <>
              <div  className="relative w-full p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] transition-colors duration-300 flex flex-wrap ">
                <div  className="w-full flex flex-col items-start gap-2">
                  <h1 className="font-bold text-xl">Question {index + 1} :</h1>
                  <pre className="pl-4 pb-2 text-lg text-start font-bold  whitespace-pre-wrap text-black">
                    {questionanswerItem.question}
                  </pre>
                  <h1 className="font-bold text-xl pt-2">Solution :</h1>
                  <pre className="pl-4 text-lg text-start whitespace-pre-wrap text-black">
                    {questionanswerItem.answer}
                  </pre>
                </div>
              </div>

              <div className="lg:w-full h-full p-12 ">
                {/* Ad Content inBetween */}
              </div>
            </>
          ))}
        </div>
      </main>
    </section>
  );
};

export default UserQuestionSolutions;
