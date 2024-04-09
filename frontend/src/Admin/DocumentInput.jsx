import Button from "../Common/Button";

function DocumentInput() {
  function handleSubmit() {}

  return (
    <>
      <main className="flex max-h-full flex-col justify-center px-6 md:py-8 py-2 lg:px-8 font-Alice">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="FormaScholar"
          />
          <h2 className="mt-2 md:mt-10 lg:text-2xl text-xl  font-bold leading-9 tracking-tight text-gray-900">
            Add Data to FormaScholar
          </h2>
          <p className="mt-1 lg:text-md text-sm text-gray-500">
            Add New Classes, Chapters, Lessons and other Data..
          </p>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3 lg:space-y-5" onSubmit={handleSubmit}>
            <div>
              <select
                id="underline_select"
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-300 peer"
              >
                <option selected>Choose Class</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Subject Name
              </label>
              <div className="mt-2">
                <input
                  id="subjectName"
                  name="subjectName"
                  type="text"
                  placeholder="Enter Subject Name"
                  required
                  autoComplete="off"
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#009c86] sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Chapter Name
              </label>
              <div className="mt-2">
                <input
                  id="chapterName"
                  name="chapterName"
                  type="text"
                  placeholder="Enter Chapter Name"
                  required
                  autoComplete="off"
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#009c86] sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Exercise Number
              </label>
              <div className="mt-2">
                <input
                  id="exercieseNumber"
                  name="exercieseNumber"
                  type="text"
                  placeholder="Enter Exercies Number"
                  required
                  autoComplete="off"
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#009c86] sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Question
              </label>
              <div className="mt-2">
                <input
                  id="question"
                  name="question"
                  type="text"
                  placeholder="Enter Question"
                  class="block w-full p-4 text-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#009c86] sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Answer
              </label>
              <div className="mt-2">
                <input
                  id="ans"
                  name="ans"
                  type="text"
                  placeholder="Enter Question"
                  class="block w-full p-4 text-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#009c86] sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <Button text={"Submit"} />
            {/* <div
              className={`h-1 transition-all ${
                errorVisible ? "" : "opacity-0"
              }`}
            >
              {errorMessage && (
                <div
                  className="bg-red-100 border-2 border-red-700 text-black px-4 py-3 rounded relative top-[-510px]  lg:relative lg:top-[-460px]"
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
            </div> */}
          </form>
        </div>
      </main>
    </>
  );
}

export default DocumentInput;
