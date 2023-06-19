import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userAll } from "../../redux/features/User/authActions";

const PaginationUser = ({ page, setPage, filter, users }) => {
  const dispatch = useDispatch();
  const PAGE_SIZE = 10;
  const totalPages = Math.ceil(users.length / PAGE_SIZE);
  const handlePreviousPage = () => {
    setPage(page - 1);
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    dispatch(userAll({ page, filter }));
  }, [page]);
  return (
    <>
      <nav
        className='flex items-center px-4 py-3 bg-white border-t border-gray-200 sm:px-6'
        aria-label='Pagination'
      >
        <div className='hidden sm:block'>
          <p className='text-sm text-gray-700'>
            Showing <span className='font-medium'>{page + 1}</span> to{" "}
            <span className='font-medium'>{PAGE_SIZE}</span>
          </p>
        </div>
        <div className='flex justify-end flex-1 sm:justify-end'>
          <button
            onClick={handlePreviousPage}
            disabled={page === 0}
            className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={page === totalPages}
            className='relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'
          >
            Next
          </button>
        </div>
      </nav>
    </>
  );
};

export default PaginationUser;
