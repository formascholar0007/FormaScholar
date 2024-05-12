import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { json, useParams } from "react-router-dom";
import { useEffect } from "react";
import { MdOutlineReadMore } from "react-icons/md";


function SpecificClass() {
 
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [SpecificClass, setSpecificClass] = useState([]);
  const {subjectName} = useParams()

  const handleSpecificClass = async () => {
    try {
      const data = await axios.get("http://localhost:3000/api/v1/class/", {
        headers: {
          Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
          "Content-Type": "application/json",
        },
      });

      if (data.data.success) {
        setSpecificClass(data.data.data);
      }
    } catch (error) {
      console.log("Error", error);
      toast.error("Failed to fetch classes. Please try again later.");
    }
  };
  useEffect(() => {
    handleSpecificClass();
  });
  return (
    <section className=" mx-auto py-12 font-Alice">
      <h1 className="md:text-4xl text-2xl font-bold md:text-center pl-6 mb-2">{`Select Your Class For Subject `} <span className="text-[#009c86]">{subjectName}</span></h1>
      <p className="md:text-lg text-sm text-gray-700 text-center mb-8 px-6">
        {`Select your Class from the options below to begin your learning journey in ${subjectName} with`}{" "}
        <span className="text-[#009c86] font-bold"> FormaScholar </span>
      </p>

      <div className="flex lg:flex-row g:justify-start flex-col items-start lg:py-14 py-8">
        <div className="lg:w-[30%] h-full mx-2 mb-4  py-4 lg:float-left lg:mr-2">
          {/* Ad Content Left */}
        </div>
        <div className="grid grid-cols-1 gap-4 w-full h-full px-8">
          {SpecificClass.map((chapter, index) => (
            <button
              // onClick={() =>
              //   handleChatperClick(chapter._id, chapter.subjectId.isExercise)
              // }
              key={index}
              className="relative p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] hover:bg-[#009c86] hover:text-white transition-colors duration-300 flex flex-wrap items-center justify-between"
            >
              <span>Class {chapter.className} Maths NCRT Solutions</span>
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
}

export default SpecificClass;
