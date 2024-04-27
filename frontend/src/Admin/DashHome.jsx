import React from "react";
import AddNewData from "./AddNewData";
import { IoMdAdd } from "react-icons/io";
import { useAuth } from "../auth/AuthContext";
import { NavLink } from "react-router-dom";

function DashHome() {
  const { isAdmin } = useAuth();

  return (
    <div className="px-8 py-24 sm:ml-64">
      {isAdmin ? (
        <div className="px-6 py-6 rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[...Array(1)].map((_, index) => (
              <AddNewData
                key={index}
                title="Add New Data"
                description="Add new classes and its data to FormaScholar!"
                centerIcon={<IoMdAdd />}
                buttonText="Add Data"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="px-6 py-6 rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex flex-col border-2 border-[#009c86] items-center justify-center bg-gray-50 shadow-xl rounded-md p-2">
            <h3 className="text-xl font-semibold mb-2">Admin</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Before Adding new data, Please Login or Register first!!
            </p>
            <NavLink
              to={"/adminPanel/adminLogin"}
              className="bg-[#009c86] text-white px-4 py-2 rounded-lg hover:bg-[#0c6d60]  focus:outline-none focus:ring-2 focus:ring-[#009c86] "
            >
              Login Here
            </NavLink>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default DashHome;
