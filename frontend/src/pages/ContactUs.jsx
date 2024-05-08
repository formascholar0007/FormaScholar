import { useState, useEffect } from "react";
import axios from "axios";
import { CiMail } from "react-icons/ci";

function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

  useEffect(() => {
    const handleUserData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        if (!token) {
          setErrorMessage("Token is not Valid!");
          setErrorVisible(true);
        }

        const response = await axios.get(
          "http://localhost:3000/api/v1/profile",
          {
            headers: { Authorization: `bearer ${token}` },
          }
        );

        if (response.status === 400) {
          setErrorMessage(response.data.message);
          setErrorVisible(true);
        } else {
          const responseData = response.data.data;
          setFullName(responseData.fullName);
          setEmail(responseData.email);
          setErrorVisible(false);
        }
      } catch (error) {
        console.log(error);
        setErrorMessage("An error occurred. Please try again later.");
        setErrorVisible(true);
      }
    };

    handleUserData();
  }, []);

  const handleCloseError = () => {
    setErrorVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send message)
  };

  return (
    <section className="font-Alice">
      <div className="md:px-16 px-6 py-12 mx-auto">
        <div>
          <p className="font-medium text-[#49dbc8] ">Contact us</p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
            Chat with us, we're here to help!
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            We're eager to receive your feedback. Kindly complete this form or
            send us an email.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <span className="inline-block p-3 text-[#339d8f] rounded-full bg-blue-100/80 ">
                <CiMail size={50} />
              </span>

              <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                Email
              </h2>
              <p className="mt-2 text-md text-gray-500">
                Our friendly team is here to help.
              </p>
              <p className="mt-2 text-xl text-[#339d8f]">
                formascholar@gmail.com
              </p>
            </div>
          </div>

          <div className="p-4 py-6 rounded-lg bg-gray-50  md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-black ">Name</label>
                  <input
                    type="text"
                    placeholder="forma-Zack"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg dark:border-gray-700 focus:border-[#339d8f]  focus:ring-[#339d8f] focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm  text-black ">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="forma@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   dark:border-gray-700 focus:border-[#339d8f]  focus:ring-[#339d8f] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm  text-black ">
                  Message
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56  dark:border-gray-700 focus:border-[#339d8f]  focus:ring-[#339d8f] focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#39c7b4] rounded-lg hover:bg-[#339d8f] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
        <div
          className={`h-1 transition-all ${errorVisible ? "" : "opacity-0"}`}
        >
          {errorMessage && (
            <div
              className="bg-red-100 border-2 border-red-700 text-black px-4 py-3 rounded relative top-[-850px]  lg:relative lg:top-[-690px]"
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
      </div>
    </section>
  );
}

export default ContactUs;
