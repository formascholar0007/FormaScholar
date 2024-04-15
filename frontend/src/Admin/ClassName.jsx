import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineTouchApp } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useEffect } from "react";

function ClassName() {
  const [isEditing, setIsEditing] = useState(false);
  const [editClassIndex, setEditClassIndex] = useState(null);
  const [newClassName, setNewClassName] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [classes, setClasses] = useState(
    Array.from({ length: 5 }, (_, index) => index + 8)
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data or perform any initial setup if needed
  }, []);

  const handleAddClass = () => {
    if (
      newClassName.trim() !== "" &&
      newClassName >= 1 &&
      newClassName <= 12 &&
      editClassIndex !== null
    ) {
      const updatedClasses = [...classes];
      updatedClasses[editClassIndex] = parseInt(newClassName, 10);
      setClasses(updatedClasses);
      setIsEditing(false);
      setEditClassIndex(null);
      setNewClassName("");
      setErrorMessage("");
      setErrorVisible(false);
    } else {
      setErrorMessage("Please enter a valid class number (1-12).");
      setErrorVisible(true);
    }
  };

  const handleAddNewClass = () => {
    setIsAdding(true);
    setIsEditing(false); // Ensure editing mode is turned off when adding a new class
    setNewClassName(""); // Clear the input field when adding a new class
  };

  const handleAdd = () => {
    if (newClassName.trim() !== "" && newClassName >= 1 && newClassName <= 12) {
      setClasses([...classes, parseInt(newClassName, 10)]);
      setIsAdding(false);
      setNewClassName("");
      setErrorMessage("");
      setErrorVisible(false);
    } else {
      setErrorMessage("Please enter a valid class number (1-12).");
      setErrorVisible(true);
    }
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setEditClassIndex(index);
    setNewClassName(classes[index]);
  };

  const handleDelete = (index) => {
    const updatedClass = [...classes];
    updatedClass.splice(index, 1);
    setClasses(updatedClass);
    //The first argument, index, specifies the index at which to start removing elements, and the second argument, 1, specifies
    //  the number of elements to remove. In this case, it removes one element starting from the index specified by index.
  };

  const handleCloseError = () => {
    setErrorVisible(false);
  };

  const handleSubjectClick = (classNumber) => {
    navigate(`/adminPanel/subjects/${classNumber}`);
  };

  return (
    <section className="container mx-auto py-16 font-Alice">
      <h1 className="md:text-5xl text-3xl font-bold text-center mb-2">
        Add a new Class
      </h1>
      <p className="md:text-lg text-sm text-gray-500 text-center mb-12">
        Add New Classes, Chapters, Lessons, and other Data...
      </p>

      {classes.map((classNumber, index) => (
        <div key={index} className="flex items-center gap-6 px-8 py-2">
          {isEditing && editClassIndex === index ? (
            <>
              <input
                type="number"
                value={newClassName}
                onChange={(e) => setNewClassName(e.target.value)}
                className="relative w-full p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] hover:border-[#009c86] outline-none hover:text-black transition-colors duration-300 flex flex-wrap items-center justify-between"
              />
              <button
                className="transition duration-300 ease-in-out transform hover:scale-105 w-[14%]"
                onClick={handleAddClass}
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
                // to={`/class/${classNumber}`}
                onClick={() => handleSubjectClick(classNumber)}
                className="relative w-full p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] hover:bg-[#009c86] hover:text-white transition-colors duration-300 flex flex-wrap items-center justify-between"
              >
                Class {classNumber}
                <MdOutlineTouchApp className="ml-2 w-6 h-6" />
              </button>
              <button
                className="transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleEdit(index)}
              >
                <FaRegEdit
                  size={38}
                  className="text-[#009c86] hover:text-[#142a27] cursor-pointer ml-4"
                />
              </button>

              <button
                className="transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleDelete(index)}
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
            type="number"
            value={newClassName}
            onChange={(e) => setNewClassName(e.target.value)}
            className="relative w-full p-4 border-2 shadow-md outline-none border-[#009c86] rounded-lg text-lg text-[#009c86] transition-colors duration-300 flex flex-wrap items-center justify-between"
            placeholder="Enter new class name"
          />
          <button
            className="w-52 py-3 flex justify-center items-center gap-2 bg-[#009c86] text-white rounded-lg border-2 hover:border-[#009c86] hover:bg-transparent hover:text-black transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleAdd}
          >
            <IoMdAdd size={40} />
            <span className="text-xl">Add</span>
          </button>
        </div>
      ) : (
        <div className="w-full px-12 pt-8 flex justify-center">
          <button
            className="w-52 py-3 flex justify-center items-center gap-2 border-2 border-[#009c86] rounded-lg hover:bg-[#009c86] hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleAddNewClass}
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

export default ClassName;
