import { MdOutlineTouchApp } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import { RiUserLine } from "react-icons/ri";

function AdminUserData() {
  const [userData, setUserData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

  useEffect(() => {
    getAlluserData();
  }, []);

  const getAlluserData = async () => {
    // try {
    //   const data = await fetch("", {});

    //   let response = await data.json();

    //   if (response.success) {
    //     setUserData(response.data);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   setErrorVisible(true);
    //   setErrorMessage(error.toString());
    // }
  };
  const handleCloseError = () => {
    setErrorVisible(false);
  };

  return (
    <section className="container  py-16 font-Alice">
      <h1 className="md:text-5xl text-3xl font-bold mx-12 mb-2">
        All User Data
      </h1>

      {/* {userData.map((userData, index) => ( */}
        <div className="flex w-[60%] items-center gap-6 px-8 py-6">
          <button className="relative w-full p-4 border shadow-md border-[#009c86] rounded-lg text-lg text-[#009c86] transition-colors duration-300 flex flex-wrap ">
            {/* <h1 className="font-bold text-xl py-3"> {index + 1}</h1> */}

            <div className="w-full flex items-start gap-2">
              <h1 className="font-bold text-xl">UserName :</h1>
              <pre className="pl-4 pb-2 text-xl text-start font-bold  whitespace-pre-wrap text-black">
                Ayush
              </pre>
            </div>

            <div className="w-full flex items-start gap-6">
              <h1 className="font-bold text-x">Email :</h1>
              <pre className="pl-4 pb-2 text-xl text-start font-bold whitespace-pre-wrap text-black">
                ayush@mgmail.com
              </pre>
            </div>

            <div className="w-full flex items-start gap-5">
              <h1 className="font-bold text-xl">Class :</h1>
              <pre className="pl-4 pb-2 text-xl text-start font-bold whitespace-pre-wrap text-black">
                12
              </pre>
            </div>

            <div className="w-full flex items-start">
              <h1 className="font-bold text-xl">Gender :</h1>
              <pre className="pl-4 text-xl text-start font-bold whitespace-pre-wrap text-black">
                Male
              </pre>
            </div>
          </button>
        </div>
      {/* ))} */}

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

export default AdminUserData;
