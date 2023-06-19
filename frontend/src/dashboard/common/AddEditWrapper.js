import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AddEditWrapper = ({ title = "", handleBack, children }) => {
  return (
    <div className='relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-gray-50'>
      <div className='px-6 py-6 mb-0 bg-white rounded-t'>
        <div className='flex justify-between text-center'>
          <h6 className='text-xl font-bold text-blueGray-700'>{title}</h6>
          <button
            className='px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-400 rounded shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none'
            onClick={() => handleBack()}
          >
            Back
          </button>
        </div>
      </div>
      <div className='flex-auto px-4 py-10 pt-0 bg-white lg:px-10'>
        {children}
      </div>
    </div>
  );
};

export default AddEditWrapper;
