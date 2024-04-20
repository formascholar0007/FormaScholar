import React, { useState } from "react";
import { IoMdAdd, IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineTouchApp, MdOutlineDeleteSweep } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

function AdminChapters() {
  const { classNumber, subject } = useParams();

  const [subjectChapter, setSubjectChapters] = useState({
    8: [
      {
        subject: "Maths",
        chapters: [
          "Chapter 1 - Algebra 8",
          "Chapter 2 - Geometry 8",
          "Chapter 3 - Calculus 8",
        ],
      },
      {
        subject: "Science",
        chapters: [
          "Chapter 1 - Biology 8",
          "Chapter 2 - Chemistry 8",
          "Chapter 3 - Physics 8",
        ],
      },
      {
        subject: "History",
        chapters: [
          "Chapter 1 - Ancient History 8",
          "Chapter 2 - Medieval History 8",
          "Chapter 3 - Modern History 8",
        ],
      },
    ],
    9: [
      {
        subject: "Maths",
        chapters: [
          "Chapter 1 - Algebra 9",
          "Chapter 2 - Geometry 9",
          "Chapter 3 - Calculus 9",
        ],
      },
      {
        subject: "Science",
        chapters: [
          "Chapter 1 - Biology 9",
          "Chapter 2 - Chemistry 9",
          "Chapter 3 - Physics 9",
        ],
      },
      {
        subject: "History",
        chapters: [
          "Chapter 1 - Ancient History 9",
          "Chapter 2 - Medieval History 9",
          "Chapter 3 - Modern History 9",
        ],
      },
    ],
    10: [
      {
        subject: "Maths",
        chapters: [
          "Chapter 1 - Algebra 10",
          "Chapter 2 - Geometry 10",
          "Chapter 3 - Calculus 10",
        ],
      },
      {
        subject: "Science",
        chapters: [
          "Chapter 1 - Biology 10",
          "Chapter 2 - Chemistry 10",
          "Chapter 3 - Physics 10",
        ],
      },
      {
        subject: "History",
        chapters: [
          "Chapter 1 - Ancient History 10",
          "Chapter 2 - Medieval History 10",
          "Chapter 3 - Modern History 10",
        ],
      },
    ],
    11: [
      {
        subject: "Maths",
        chapters: [
          "Chapter 1 - Algebra 11",
          "Chapter 2 - Geometry 11",
          "Chapter 3 - Calculus 11",
        ],
      },
      {
        subject: "Science",
        chapters: [
          "Chapter 1 - Biology 11",
          "Chapter 2 - Chemistry 11",
          "Chapter 3 - Physics 11",
        ],
      },
      {
        subject: "History",
        chapters: [
          "Chapter 1 - Ancient History 11",
          "Chapter 2 - Medieval History 11",
          "Chapter 3 - Modern History 11",
        ],
      },
      {
        subject: "Computer",
        chapters: [
          "Chapter 1 - Introduction to Computers 11",
          "Chapter 2 - Programming Basics 11",
          "Chapter 3 - Data Structures 11",
        ],
      },
    ],
    12: [
      {
        subject: "Maths",
        chapters: [
          "Chapter 1 - Algebra 12",
          "Chapter 2 - Geometry 12",
          "Chapter 3 - Calculus 12",
        ],
      },
      {
        subject: "Science",
        chapters: [
          "Chapter 1 - Biology 12",
          "Chapter 2 - Chemistry 12",
          "Chapter 3 - Physics 12",
        ],
      },
      {
        subject: "History",
        chapters: [
          "Chapter 1 - Ancient History 12",
          "Chapter 2 - Medieval History 12",
          "Chapter 3 - Modern History 12",
        ],
      },
      {
        subject: "Computer",
        chapters: [
          "Chapter 1 - Computer Science Fundamentals 12",
          "Chapter 2 - Algorithms and Data Structures 12",
          "Chapter 3 - Database Management 12",
        ],
      },
    ],
  })
  const subjectsWithChapters = subjectChapter[classNumber] || [];
  const selectedSubject = subjectsWithChapters.find(
    (item) => item.subject === subject
  );
  const chapters = selectedSubject ? selectedSubject.chapters : [];

  const [isEditing, setIsEditing] = useState(false);
  const [editChapterIndex, setEditChapterIndex] = useState(null);
  const [editedChapter, setEditedChapter] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [newChapter, setNewChapter] = useState("");
  const navigate = useNavigate();

  const handleEdit = (index) => {
    setIsEditing(true);
    setEditChapterIndex(index);
    setEditedChapter(selectedSubject.chapters[index]);
  };

  const handleSaveEdit = () => {
    const updatedChapters = [...selectedSubject.chapters];
    updatedChapters[editChapterIndex] = editedChapter;
    const updatedSubjects = [...subjectChapter[classNumber]];
    updatedSubjects.find((item) => item.subject === subject).chapters = updatedChapters;
    setSubjectChapters({ ...subjectChapter, [classNumber]: updatedSubjects });
    setIsEditing(false);
    setEditChapterIndex(null);
    setEditedChapter("");
  };

  const handleDelete = (index) => {
    const updatedChapters = [...selectedSubject.chapters];
    updatedChapters.splice(index, 1);
    const updatedSubjects = [...subjectChapter[classNumber]];
    updatedSubjects.find((item) => item.subject === subject).chapters = updatedChapters;
    setSubjectChapters({ ...subjectChapter, [classNumber]: updatedSubjects });
  };

  const handleSubjectClick = (chapterName) => {
    navigate(`/adminPanel/${classNumber}/${subject}/chapters/${chapterName}`);
  };

  const handleAddNewChapter = () => {
    setIsAdding(true);
    setNewChapter("");
  };

  const handleAddChapter = () => {
    if (newChapter.trim() !== "") {
      const updatedChapters = [...selectedSubject.chapters, newChapter];
      const updatedSubjects = [...subjectChapter[classNumber]];
      updatedSubjects.find((item) => item.subject === subject).chapters = updatedChapters;
      setSubjectChapters({ ...subjectChapter, [classNumber]: updatedSubjects });
      setIsAdding(false);
      setNewChapter("");
    }
  };

  return (
    <section className="container mx-auto py-12 font-Alice">
      <h1 className="md:text-5xl text-3xl font-bold text-center mb-2">
        Class {classNumber} - {subject}
      </h1>
      <p className="md:text-lg text-sm text-gray-700 text-center mb-8 px-6">
        {`Add, Edit, Delete any chapter in ${subject} for Class ${classNumber}`}{" "}
        <span className="text-[#009c86] font-bold"> FormaScholar </span>
      </p>
      {chapters.map((chapter, index) => (
        <div key={index} className="flex items-center gap-6 px-8 py-2">
          {isEditing && editChapterIndex === index ? (
            <>
              <input
                type="text"
                value={editedChapter}
                onChange={(e) => setEditedChapter(e.target.value)}
                className="relative w-full p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] hover:border-[#009c86] outline-none hover:text-black transition-colors duration-300 flex flex-wrap items-center justify-between"
              />
              <button
                className="transition duration-300 ease-in-out transform hover:scale-105 w-[14%]"
                onClick={handleSaveEdit}
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
                onClick={() => handleSubjectClick(chapter)}
                className="relative w-full p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] hover:bg-[#009c86] hover:text-white transition-colors duration-300 flex flex-wrap items-center justify-between"
              >
                Chapter {"  "} {index + 1} - {chapter}
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
            value={newChapter}
            onChange={(e) => setNewChapter(e.target.value)}
            className="relative w-full p-4 border-2 shadow-md outline-none border-[#009c86] rounded-lg text-lg text-[#009c86] transition-colors duration-300 flex flex-wrap items-center justify-between"
            placeholder="Enter new chapter name"
          />
          <button
            className="w-52 py-3 flex justify-center items-center gap-2 bg-[#009c86] text-white rounded-lg border-2 hover:border-[#009c86] hover:bg-transparent hover:text-black transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleAddChapter}
          >
            <IoMdAdd size={40} />
            <span className="text-xl">Add</span>
          </button>
        </div>
      ) : (
        <div className="w-full px-12 pt-8 flex justify-center">
          <button
            className="w-52 py-3 flex justify-center items-center gap-2 border-2 border-[#009c86] rounded-lg hover:bg-[#009c86] hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleAddNewChapter}
          >
            <IoMdAdd size={38} />
            <span className="text-xl">Add New Chapter</span>
          </button>
        </div>
      )}
    </section>
  );
}

export default AdminChapters;
