import React from "react";
import AddNewData from "./AddNewData";
import { IoMdAdd } from "react-icons/io";

function DashHome() {
  return (
    <div className="px-8 py-24 sm:ml-64">
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
    </div>
  );
}

export default DashHome;
