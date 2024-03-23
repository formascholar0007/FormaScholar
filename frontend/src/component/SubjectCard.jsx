import React from "react";

function SubjectCard() {
  return (
    <div className="container mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <div className="p-4 text-center">
            <img
              src="https://delan5sxrj8jj.cloudfront.net/custom-static-1/home-page-test/maths.png"
              alt="Learn Maths from Teachoo"
              loading="lazy"
              className="w-full h-auto mx-auto"
            />
            <a
              href="#"
              className="block mt-4 text-lg font-semibold text-blue-500 hover:text-blue-700"
            >
              Maths
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectCard;
