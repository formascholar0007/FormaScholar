import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Homepageimg1 from "../assets/Image1.svg";
import Homepageimg2 from "../assets/Image2.svg";
import Homepageimg3 from "../assets/Image4.svg";
import ClassCard from "../component/ClassCard";
import SubjectCard from "../component/SubjectCard";
import mathicon from "../assets/mathicon.svg";
import scienceicon from "../assets/scienceicon.svg";
import physicsicon from "../assets/physics.svg";
import WhyChooseUs from "../component/WhyChooseUs";
import { useAuth } from "../auth/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageList = [
  { id: 1, img: Homepageimg1 },
  { id: 2, img: Homepageimg2 },
  { id: 3, img: Homepageimg3 },
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  const [imageId, setImageId] = useState(Homepageimg1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { isLoggedIn } = useAuth();
  const [userFullName, setUserFullName] = useState("Student");
  const [classNumber, setClassNumber] = useState([]);
  const [subject, setSubject] = useState([]);

  const handleImageClick = (selectedImg) => {
    setImageId(selectedImg);
  };

  useEffect(() => {
    setUserFullName(localStorage.getItem("userFullName"));

    const interval = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ImageList.length);
    }, 6000);

    return () => clearTimeout(interval);
  }, [currentIndex]);

  useEffect(() => {
    setImageId(ImageList[currentIndex].img);
  }, [currentIndex]);

  const subjectIconMap = {
    Maths: mathicon,
    Science: scienceicon,
    Physics: physicsicon,
  };

  function ExploreNow(id) {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const handleGetAllClass = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/class/", {
        headers: {
          Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
          "Content-Type": "application/json",
        },
      });
      if (response.data.success) {
        setClassNumber(response.data.data); 
      } else {
        toast.error("Failed to fetch classes. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching classes:", error);
      toast.error("Failed to Load classes. Please try again later.");
    }
  };

  useEffect(() => {
    handleGetAllClass();

  }, []);

  return (
    <section className="lg:min-h-screen min-h-screen font-Alice overflow-hidden">
      <div className="max-w-full container mx-auto md:px-8 md:py-12 py-8 px-6 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-900  text-white">
        <div className="lg:grid-cols-2 grid grid-cols-1 gap-8">
          {isLoggedIn ? (
            <div className="lg:py-16 flex flex-col pt-2">
              <h1 className="lg:text-7xl lg:leading-[80px] md:text-6xl text-4xl font-bold lg:mb-6 mb-3 leading-[48px]">
                Hey,{" "}
                <span className="text-[#009c86]">
                  {" "}
                  {!userFullName ? "Student" : userFullName}{" "}
                </span>
              </h1>
              <p className="lg:text-lg text-md mb-6 text-gray-300 leading-7">
                Ready to start your educational journey with FormaScholar?
                Embrace knowledge, growth, and success on this enriching path
                together.
              </p>
              <button
                className="bg-[#009c86] hover:bg-transparent border-transparent hover:border-2 hover:border-[#009c86] hover:text-white w-[180px] md:w-[400px] text-white md:py-5 p-3 rounded-lg text-2xl transition-all duration-300 ease-in-out"
                onClick={() => ExploreNow("#browseYourClass")}
              >
                Explore Now
              </button>
              
            </div>
          ) : (
            <div className="lg:py-12 flex flex-col pt-2">
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
          )}

          <div className="relative flex md:justify-start justify-center items-center lg:items-start">
            <div className="lg:h-[500px] md:h-[450px]  h-96 overflow-hidden rounded-lg">
              <img
                src={imageId}
                alt="FormaScholar"
                className="w-full h-full object-contain object-center drop-shadow-2xl"
              />
              <div className="flex lg:bottom-24 md:flex-col md:items-end md:bottom-16 md:space-y-4 md:pb-2 md:right-24 justify-center absolute  bottom-[-24px] left-0 space-x-6 w-full px-1 ">
                {ImageList.map((item) => (
                  <img
                    key={item.id}
                    src={item.img}
                    alt="FormaScholar"
                    onClick={() => handleImageClick(item.img)}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full cursor-pointer border-4 hover:border-[#17776a] transition duration-300 ease-in-out ${
                      imageId === item.img ? "border-[#17776a]" : "border-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1
          className="px-14 pt-14 text-xl md:text-3xl font-semibold"
          id="browseYourClass"
        >
          Browse Your Classes
        </h1>
        <div className="flex flex-wrap justify-center lg:px-8 lg:py-4">
          {classNumber.map((grade) => (
            <ClassCard
              key={grade._id}
              classId={grade._id}
              grade={grade.className}
              heading={`Class ${grade.className}`}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className="px-14 pt-16 text-xl md:text-3xl font-semibold">
          Browse Your Subjects
        </h1>
        <div className="flex lg:justify-start justify-center flex-wrap px-8 py-4">
            <SubjectCard
              key={1}
              subjectName={"Maths"}
              subjectIcon={subjectIconMap[subject] || scienceicon}
            />
        </div>
      </div>

      <WhyChooseUs />
    </section>
  );
};

export default Home;
