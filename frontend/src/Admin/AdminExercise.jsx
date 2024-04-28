import React, { useState } from "react";
import { IoMdAdd, IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineTouchApp, MdOutlineDeleteSweep } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function AdminExercise() {
  const { classId, subjectid, chapterId } = useParams();

  const [isEditing, setIsEditing] = useState(false);
  const [editExerciseId, seteditExerciseId] = useState(null);
  const [newExerciseName, setnewExerciseName] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [exercise, setexercise] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAllexercise();
  }, []);

  const getAllexercise = async () => {
    try {
      const data = await fetch(
        `http://localhost:3000/api/v1/exercise/${classId}/${subjectid}/${chapterId}`,
        {
          method: "GET",
          headers: {
            Authorization: `bearer ${JSON.parse(
              localStorage.getItem("adminToken")
            )}`,
            "Content-Type": "application/json",
          },
        }
      );
      let response = await data.json();
      
      if (response.success) {
        setexercise(response.data);
      }
    } catch (error) {
      console.log(error);
      setErrorVisible(true);
      setErrorMessage(error.toString());
    }
  };

  const addNewClass = async (e) => {
    e.preventDefault();

    try {
      const data = await fetch(
        `http://localhost:3000/api/v1/exercise/${classId}/${subjectid}/${chapterId}`,
        {
          method: "POST",
          headers: {
            Authorization: `bearer ${JSON.parse(
              localStorage.getItem("adminToken")
            )}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ exerciseName: newExerciseName }),
        }
      );

      const response = await data.json();
      console.log(response);

      if (!response.success) {
        setErrorMessage(response.message);
        setIsAdding(true);
      }

      setnewExerciseName("");
      setIsAdding(false);

      getAllexercise();
    } catch (error) {
      console.log(error);
      setErrorVisible(true);
      setErrorMessage(error.toString());
    }
  };

  const handleEdit = async ( exerciseId ) => {
    try {
      const data = await fetch(
        `http://localhost:3000/api/v1/exercise/${exerciseId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `bearer ${JSON.parse(
              localStorage.getItem("adminToken")
            )}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ exerciseName: newExerciseName }),
        }
      );
      const response = await data.json();
      
      if (response.success) {
        getAllexercise();
      }
    } catch (error) {
      console.log(error);
      setErrorVisible(true);
      setErrorMessage(error.toString());
    }
  };
  
  const handleDelete = async (exerciseId) => {

    try {
      const data = await fetch(
        `http://localhost:3000/api/v1/exercise/${exerciseId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `bearer ${JSON.parse(
              localStorage.getItem("adminToken")
            )}`,
            "Content-Type": "application/json",
          },
        }
      );

      const response = await data.json();
      console.warn(response);

      if (response.success) {
        getAllexercise();
      }
    } catch (error) {
      console.log(error);
      setErrorVisible(true);
      setErrorMessage(error.toString());
    }
  };
  

  const handleCloseError = () => {
    setErrorVisible(false);
  };

  const handleAddNewClassBtn = () => {
    setIsAdding(true);
    setIsEditing(false); // Ensure editing mode is turned off when adding a new class
    setnewExerciseName(""); // Clear the input field when adding a new class
  };

  const handleExerciseClick = (exerciseId) => {
    navigate(`/adminPanel/${classId}/adminChapter/${subjectid}/adminExercise/${chapterId}/adminQuestionAnswer/${exerciseId}`);
  };

  return (
    <section className="container mx-auto py-16 font-Alice">
      <h1 className="md:text-5xl text-3xl font-bold text-center mb-2">
        Add a new Exercise
      </h1>
      <p className="md:text-lg text-sm text-gray-500 text-center mb-12">
        Add New exercise, exercise, Lessons, and other Data...
      </p>

      {exercise.map((exerciseItem, index) => (
        <div
          key={exerciseItem._id}
          className="flex items-center gap-6 px-8 py-2"
        >
          {isEditing && editExerciseId === exerciseItem._id ? (
            <>
              <input
                type="text"
                value={newExerciseName}
                onChange={(e) => setnewExerciseName(e.target.value)}
                className="relative w-full p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] hover:border-[#009c86] outline-none hover:text-black transition-colors duration-300 flex flex-wrap items-center justify-between"
              />
              <button
                className="transition duration-300 ease-in-out transform hover:scale-105 w-[14%]"
                onClick={() => handleEdit(exerciseItem._id)}
              >
                <IoMdAddCircleOutline
                  size={45}
                  className="text-[#009c86] hover:text-[#142a27] cursor-pointer ml-4"
                />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleExerciseClick(exerciseItem._id)}
                className="relative w-full p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] hover:bg-[#009c86] hover:text-white transition-colors duration-300 flex flex-wrap items-center justify-between"
              >
                Exercise {index + 1}  : {exerciseItem.exerciseName}
                <MdOutlineTouchApp className="ml-2 w-6 h-6" />
              </button>
              <button
                className="transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => {
                  setIsEditing(true);
                  seteditExerciseId(exerciseItem._id);
                  setnewExerciseName(exerciseItem.exerciseName);
                }}
              >
                <FaRegEdit
                  size={38}
                  className="text-[#009c86] hover:text-[#142a27] cursor-pointer ml-4"
                />
              </button>

              <button
                className="transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleDelete(exerciseItem._id)}
              >
                <MdOutlineDeleteSweep
                  size={40}
                  className="text-[#009c86] hover:text-[#142a27] cursor-pointer"
                />
              </button>
            </>
          )}
        </div>
      ))}

      {isAdding ? (
        <div className="w-full px-12 pt-8 flex justify-center items-center gap-12">
          <input
            type="text"
            value={newExerciseName}
            onChange={(e) => setnewExerciseName(e.target.value)}
            className="relative w-full p-4 border-2 shadow-md outline-none border-[#009c86] rounded-lg text-lg text-[#009c86] transition-colors duration-300 flex flex-wrap items-center justify-between"
            placeholder="Enter new class name"
          />
          <button
            className="w-52 py-3 flex justify-center items-center gap-2 bg-[#009c86] text-white rounded-lg border-2 hover:border-[#009c86] hover:bg-transparent hover:text-black transition duration-300 ease-in-out transform hover:scale-105"
            onClick={addNewClass}
          >
            <IoMdAdd size={40} />
            <span className="text-xl">Add</span>
          </button>
        </div>
      ) : (
        <div className="w-full px-12 pt-8 flex justify-center">
          <button
            className="w-52 py-3 flex justify-center items-center gap-2 border-2 border-[#009c86] rounded-lg hover:bg-[#009c86] hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleAddNewClassBtn}
          >
            <IoMdAdd size={38} />
            <span className="text-xl">Add New Class</span>
          </button>
        </div>
      )}

      <div
        className={`flex justify-center transition-all ${
          errorVisible ? "" : "opacity-0"
        }`}
      >
        {errorMessage && (
          <div
            className="bg-red-100 border-2 md:w-[80%] w-full border-red-700 text-black px-4 py-3 rounded relative top-[40px]  lg:relative lg:top-[40px]"
            role="alert"
          >
            <strong className="font-bold">OPPS!: </strong>
            <span className="block sm:inline">{errorMessage}</span>
            <span
              className="absolute top-0 bottom-0 right-0 px-2 py-1 cursor-pointer"
              onClick={handleCloseError}
            >
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export default AdminExercise;
