import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const TableWrapper = ({
  error = "",
  success = "",
  title = "",
  addlink = "",
  addTitle = "",
  method = "",
  handleBack,
  children,
}) => {
  return (
    <div className='relative flex flex-col w-full min-w-0 break-words rounded-lg shadow-lg'>
      {error && toast.error(error)}
      {success && toast.success(`${title} ${method} sucessfully`)}
      <div className='px-6 py-4 bg-white rounded-t'>
        <div className='flex justify-between text-center'>
          <h6 className='text-xl font-bold text-blueGray-700'>{title}</h6>
          <Link
            className='px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-400 rounded shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none'
            to={addlink}
          >
            {addTitle}
          </Link>
        </div>
      </div>
      <div className='flex-auto px-4 pt-0 bg-white lg:px-10'>{children}</div>
    </div>
  );
};

export default TableWrapper;
