import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineTouchApp } from "react-icons/md";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";

function Subjects() {
  const { classNumber } = useParams();

  const [subjects, setSubject] = useState({
    8: ["Maths", "Science", "English"],
    9: ["Maths", "Science"],
    10: ["Maths", "Science", "History"],
    11: ["Maths", "Physics", "Chemistry"],
    12: ["Maths", "Physics", "Chemistry", "Bio", "English", "Computer"],
  });

  const classSubjects = subjects[classNumber];

  const [isEditing, setIsEditing] = useState(false);
  const [editSubject, setEditSubject] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newSubject, setNewSubject] = useState("");
  const navigate = useNavigate();

  const handleAddNewClass = () => {
    setIsAdding(true);
    setNewSubject(""); // Clear the input field when adding a new class
  };

  const handleAdd = () => {
    if (newSubject.trim() !== "") {
      setSubject({
        ...subjects,
        [classNumber]: [...classSubjects, newSubject],
      });
      setIsAdding(false);
      setNewSubject("");
    }
  };

  const handleAddClass = () => {
    if (editSubject !== null && newSubject !== "") {
      const updatedClasses = { ...subjects };
      updatedClasses[classNumber][editSubject] = newSubject;
      setSubject(updatedClasses);
      setIsEditing(false);
      setEditSubject(null);
      setNewSubject("");
    }
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setEditSubject(index);
    setNewSubject(classSubjects[index]);
  };

  const handleDelete = (index) => {
    const updatedSubject = { ...subjects };
    const updateClassSubject = [...updatedSubject[classNumber]];
    updateClassSubject.splice(index, 1);
    updatedSubject[classNumber] = updateClassSubject;
    setSubject(updatedSubject);
    //The first argument, index, specifies the index at which to start removing elements, and the second argument, 1, specifies
    //  the number of elements to remove. In this case, it removes one element starting from the index specified by index.
  };

  const handleSubjectClick = (subjectName) => {
    navigate(`/adminPanel/adminChapter/${subjectName}`);
  };

  return (
    <section className="container mx-auto py-12 font-Alice">
      <h1 className="md:text-5xl text-3xl font-bold text-center mb-2">
        Class {classNumber} All Subjects
      </h1>
      <p className="md:text-lg text-sm text-gray-700 text-center mb-8 px-6">
        {`Add, Edit, Delete any class ${classNumber}  subject and then update `}{" "}
        <span className="text-[#009c86] font-bold"> FormaScholar </span>
      </p>
      {classSubjects.map((subject, index) => (
        <div key={index} className="flex items-center gap-6 px-8 py-2">
          {isEditing && editSubject === index ? (
            <>
              <input
                type="text"
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
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
                onClick={() => handleSubjectClick(subject)}
                className="relative w-full p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] hover:bg-[#009c86] hover:text-white transition-colors duration-300 flex flex-wrap items-center justify-between"
              >
                {subject}
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
            type="text"
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
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
    </section>
  );
}

export default Subjects;
