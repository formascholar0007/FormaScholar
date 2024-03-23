import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Homepageimg1 from "../assets/Image1.svg";
import Homepageimg2 from "../assets/Image2.svg";
import Homepageimg3 from "../assets/Image4.svg";
import Vector from "../assets/Image1.svg";
import ClassCard from "../component/ClassCard";
import AdditionalInfo from "../auth/AdditionalInfo";
import SubjectCard from "../component/SubjectCard";
import mathicon from "../assets/mathicon.svg";
import scienceicon from "../assets/scienceicon.svg";
import Footer from "../component/Footer";

const ImageList = [
  { id: 1, img: Homepageimg1 },
  { id: 2, img: Homepageimg2 },
  { id: 3, img: Homepageimg3 },
];

const Home = () => {
  const [imageId, setImageId] = useState(Homepageimg1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (selectedImg) => {
    setImageId(selectedImg);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ImageList.length);
    }, 6000);

    return () => clearTimeout(interval);
  }, [currentIndex]);

  useEffect(() => {
    setImageId(ImageList[currentIndex].img);
  }, [currentIndex]);

  const subjects8 = ["Math", "Science"];
  const subjects9 = ["Math", "Science"];
  const subjects10 = ["Math", "Science", "History"];
  const subjects11 = ["Math", "Physics", "chemistry"];
  const subjects12 = [
    "Math",
    "Physics",
    "chemistry",
    "Bio",
    " English",
    "Computer",
  ];
  return (
    <>
      <section className="lg:min-h-screen min-h-screen font-Alice overflow-hidden">
        <div className="max-w-full container mx-auto md:px-8 md:py-10 py-12 px-6 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-900  text-white">
          <div className="lg:grid-cols-2 grid grid-cols-1 gap-8">
            <div className=" lg:py-12 flex flex-col pt-2">
              <h1 className="lg:text-7xl lg:leading-[80px] md:text-6xl text-4xl font-bold lg:mb-6 mb-3 leading-[48px]">
                Welcome to the
                <br />
                <span className="text-[#009c86]"> FormaScholar</span>
              </h1>
              <p className="lg:text-lg text-md mb-6 text-gray-300">
                Embark on a journey of knowledge discovery, where every lesson
                unveils new horizons and empowers you to reach your full
                potential
              </p>

              <button className="bg-[#009c86] hover:bg-[#17776a] hover:text-black w-[180px] text-white py-3 px-6 rounded-lg text-2xl transition duration-300 ease-in-out">
                <NavLink to="/registration">Get Started</NavLink>
              </button>
            </div>
            <div className="relative flex md:justify-start justify-center items-center lg:items-start">
              <div className="lg:h-[500px] md:h-[450px]  h-96 overflow-hidden rounded-lg">
                <img
                  src={imageId}
                  alt="Biryani"
                  className="w-full h-full object-contain object-center drop-shadow-2xl"
                />
                <div className="flex lg:bottom-24 md:flex-col md:items-end md:bottom-16 md:space-y-4 md:pb-2 md:right-24 justify-center absolute  bottom-[-24px] left-0 space-x-6 w-full px-1 ">
                  {ImageList.map((item) => (
                    <img
                      key={item.id}
                      src={item.img}
                      alt="Biryani"
                      onClick={() => handleImageClick(item.img)}
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-full cursor-pointer border-4 hover:border-[#17776a] transition duration-300 ease-in-out"
                    ${
                      imageId === item.img ? "border-[#17776a]" : "border-white"
                    }
                  `}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="px-14 pt-14 text-xl md:text-3xl font-semibold">
            Browse Your Classes
          </h1>
          <div className="flex flex-wrap justify-center lg:justify-start lg:px-8 lg:py-4">
            <ClassCard heading="Class 8" subjects={subjects8} />
            <ClassCard heading="Class 9" subjects={subjects9} />
            <ClassCard heading="Class 10" subjects={subjects10} />
            <ClassCard heading="Class 11" subjects={subjects11} />
            <ClassCard heading="Class 12" subjects={subjects12} />
          </div>
        </div>
        <div>
          <h1 className="px-14 pt-16 text-xl md:text-3xl font-semibold">
            Browse Your Subjects
          </h1>
          <div className="flex lg:justify-start justify-center flex-wrap px-8 py-4">
            <SubjectCard subjectName={"Math"} subjectIcon={mathicon} />
            <SubjectCard subjectName={"Science"} subjectIcon={scienceicon} />
            <SubjectCard subjectName={"Math"} subjectIcon={mathicon} />
            <SubjectCard subjectName={"Science"} subjectIcon={scienceicon} />
            <SubjectCard subjectName={"Math"} subjectIcon={mathicon} />
            <SubjectCard subjectName={"Science"} subjectIcon={scienceicon} />
            <SubjectCard subjectName={"Math"} subjectIcon={mathicon} />
          </div>

          <Footer />

        </div>
      </section>
    </>
  );
};

export default Home;
