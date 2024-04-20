import { NavLink, Outlet } from "react-router-dom";
import Button from "../Common/Button";

function AddNewData({
  title,
  description,
  centerIcon: CenterIcon,
  buttonText,
}) {
  return (
    <>
      <div className="flex flex-col border-2 border-[#009c86] items-center justify-center bg-gray-50 shadow-xl rounded-md p-2">
        <div className="text-7xl mb-2 text-[#009c86] ">{CenterIcon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">{description}</p>
        <NavLink
          to={"/adminPanel/className"}
          className="bg-[#009c86] text-white px-4 py-2 rounded-lg hover:bg-[#0c6d60]  focus:outline-none focus:ring-2 focus:ring-[#009c86] "
        >
          {buttonText}
        </NavLink>
      </div>
    </>
  );
}

export default AddNewData;
