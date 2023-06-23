import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <>
      <section className='flex items-center h-full p-16 dark:text-gray-100'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl dark:text-gray-600'>
              <span className='sr-only'>Error</span>404
            </h2>
            <p className='mb-4 text-2xl font-semibold text-gray-400 md:text-3xl'>
              Sorry, we couldn't find this page.
            </p>
            <Link
              to='/'
              className='px-8 font-semibold underline rounded cursor-pointer dark:bg-violet-400 dark:text-gray-900'
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Unauthorized;
