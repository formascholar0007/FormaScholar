import React, { useState } from "react";
import { IoMdAdd, IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineTouchApp, MdOutlineDeleteSweep } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function Adminquestionanswers() {
  const { classId, subjectid, exerciseId, chapterId } = useParams();

  const [isEditing, setIsEditing] = useState(false);
  const [editQuestionanswerId, seteditQuestionanswerId] = useState(null);
  const [newFormData, setnewFormData] = useState({
    questions: "",
    answer: "",
    questionNo: "",
  });
  const [isAdding, setIsAdding] = useState(false);
  const [questionanswers, setquestionanswers] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAllquestionanswers();
  }, []);

  const getAllquestionanswers = async () => {
    try {
      const data = await fetch(
        `https://formascholar.onrender.com/api/v1/question/${classId}/${subjectid}/${chapterId}/${exerciseId}`,
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
        setquestionanswers(response.data);
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
        `https://formascholar.onrender.com/api/v1/question/${classId}/${subjectid}/${chapterId}/${exerciseId}`,
        {
          method: "POST",
          headers: {
            Authorization: `bearer ${JSON.parse(
              localStorage.getItem("adminToken")
            )}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            questionNo: newFormData.questionNo,
            question: newFormData.questions,
            answer: newFormData.answer,
          }),
        }
      );

      const response = await data.json();

      if (!response.success) {
        setErrorMessage(response.message);
        setIsAdding(true);
      }

      setnewFormData({
        questions: "",
        answer: "",
        questionNo: "",
      });
      setIsAdding(false);
      getAllquestionanswers();

      getAllquestionanswers();
    } catch (error) {
      console.log(error);
      setErrorVisible(true);
      setErrorMessage(error.toString());
    }
  };

  const handleEdit = async (questionanswerId) => {
    try {
      const data = await fetch(
        `https://formascholar.onrender.com/api/v1/question/${questionanswerId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `bearer ${JSON.parse(
              localStorage.getItem("adminToken")
            )}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            questionNo: newFormData.questionNo,
            question: newFormData.questions,
            answer: newFormData.answer,
          }),
        }
      );
      const response = await data.json();

      if (response.success) {
        getAllquestionanswers();
      }
    } catch (error) {
      console.log(error);
      setErrorVisible(true);
      setErrorMessage(error.toString());
    }
  };

  const handleDelete = async (questionanswerId) => {
    try {
      const data = await fetch(
        `https://formascholar.onrender.com/api/v1/question/${questionanswerId}`,
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

      if (response.success) {
        getAllquestionanswers();
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
    setIsEditing(false);
    setnewFormData({
      questions: "",
      answer: "",
      questionNo: "", 
    });
  };

  const handleChapterClick = (questionanswerId) => {
    navigate(``);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "questionNo") {
      setnewFormData({ ...newFormData, [name]: parseInt(value) || "" });
    } else {
      setnewFormData({ ...newFormData, [name]: value });
    }

    if (e.target.tagName === "TEXTAREA") {
      e.target.style.height = "auto";
      e.target.style.height = e.target.scrollHeight + "px";
    }
  };

  return (
    <section className="container mx-auto py-16 font-Alice">
      <h1 className="md:text-5xl text-3xl font-bold text-center mb-2">
        Add new Question and answers
      </h1>
      <p className="md:text-lg text-sm text-gray-500 text-center mb-12">
        Add New subjects, Chapters, Lessons, and other Data...
      </p>

      {questionanswers.map((questionanswerItem, index) => (
        <div
          key={questionanswerItem._id}
          className="flex items-center gap-6 px-8 py-2"
        >
          {isEditing && editQuestionanswerId === questionanswerItem._id ? (
            <>
              <div className="w-full flex flex-col gap-4">
                <textarea
                  type="text"
                  name="questions"
                  rows={3}
                  value={newFormData.questions}
                  onChange={handleChange}
                  className="overflow-hidden relative w-full p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] hover:border-[#009c86] outline-none hover:text-black transition-colors duration-300 flex flex-wrap items-center justify-between"
                />
                <textarea
                  type="text"
                  rows={25}
                  name="answer"
                  value={newFormData.answer}
                  onChange={handleChange}
                  className="overflow-hidden relative w-full p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] hover:border-[#009c86] outline-none hover:text-black transition-colors duration-300 flex flex-wrap items-center justify-between"
                />
              </div>

              <button
                className="transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleEdit(questionanswerItem._id)}
              >
                <IoMdAddCircleOutline
                  size={45}
                  className="text-[#009c86] hover:text-[#142a27] cursor-pointer ml-4"
                />
              </button>
              <button
                className="transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleDelete(questionanswerItem._id)}
              >
                <MdOutlineDeleteSweep
                  size={40}
                  className="text-[#009c86] hover:text-[#142a27] cursor-pointer"
                />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleChapterClick(questionanswerItem._id)}
                className="relative w-full p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] transition-colors duration-300 flex flex-wrap "
              >
                <div className="w-full flex flex-col items-start gap-2">
                  <h1 className="font-bold text-xl">Question {index + 1} :</h1>
                  <pre className="pl-4 pb-2 text-lg text-start font-bold  whitespace-pre-wrap text-black">
                    {questionanswerItem.question}
                  </pre>
                  <h1 className="font-bold text-xl pt-2">Solution :</h1>
                  <pre className="pl-4 text-lg text-start whitespace-pre-wrap text-black">
                    {questionanswerItem.answer}
                  </pre>
                </div>
              </button>
              <button
                className="transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => {
                  setIsEditing(true);
                  seteditQuestionanswerId(questionanswerItem._id);
                  setnewFormData({
                    questionNo: index + 1,
                    questions: questionanswerItem.question,
                    answer: questionanswerItem.answer,
                  });
                }}
              >
                <FaRegEdit
                  size={38}
                  className="text-[#009c86] hover:text-[#142a27] cursor-pointer ml-4"
                />
              </button>

              <button
                className="transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleDelete(questionanswerItem._id)}
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
          <div className="flex flex-col w-full gap-5">
            <input
              type="number"
              name="questionNo"
              value={newFormData.questionNo}
              onChange={handleChange}
              placeholder={"Enter Question No"}
              className="overflow-hidden relative  p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] hover:border-[#009c86] outline-none hover:text-black transition-colors duration-300 flex flex-wrap items-center justify-between"
            />
            <textarea
              type="text"
              name="questions"
              value={newFormData.questions}
              onChange={handleChange}
              placeholder={"Enter Question here"}
              className="overflow-hidden relative w-full p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] hover:border-[#009c86] outline-none hover:text-black transition-colors duration-300 flex flex-wrap items-center justify-between"
            />
            <textarea
              type="text"
              name="answer"
              value={newFormData.answer}
              placeholder={"Enter answer here"}
              onChange={handleChange}
              className="overflow-hidden relative w-full p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] hover:border-[#009c86] outline-none hover:text-black transition-colors duration-300 flex flex-wrap items-center justify-between"
            />
            <button
              className="w-52 py-3 flex justify-center items-center gap-2 bg-[#009c86] text-white rounded-lg border-2 hover:border-[#009c86] hover:bg-transparent hover:text-black transition duration-300 ease-in-out transform hover:scale-105"
              onClick={addNewClass}
            >
              <IoMdAdd size={40} />
              <span className="text-xl">Add</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full px-12 pt-8 flex justify-center">
          <button
            className="w-52 py-3 flex justify-center items-center gap-2 border-2 border-[#009c86] rounded-lg hover:bg-[#009c86] hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleAddNewClassBtn}
          >
            <IoMdAdd size={38} />
            <span className="text-xl">Add New Data</span>
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

export default Adminquestionanswers;
