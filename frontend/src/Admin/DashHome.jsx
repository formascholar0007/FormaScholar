import React from "react";
import AddNewData from "./AddNewData";
import { IoMdAdd } from "react-icons/io";
import { useAuth } from "../auth/AuthContext";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

function DashHome() {
  const { isAdmin } = useAuth();

  return (
    <section className="flex w-full py-12 sm:ml-64 overflow-hidden">
      {isAdmin ? (
        <>
          <div className="px-3 py-3 rounded-lg dark:border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-3">
            <AddNewData
              title="User Data"
              description="Add new classes and its data to FormaScholar!"
              centerIcon={<FaRegUser />}
              buttonText="Show Data"
              path={"/adminPanel/adminUserData"}
            />
            <AddNewData
              title="Add New Data"
              description="Add new classes and its data to FormaScholar!"
              centerIcon={<IoMdAdd />}
              buttonText="Add Data"
              path={"/adminPanel/className"}
            />
          </div>
        </>
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
    </section>
  );
}

export default DashHome;
