import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <>
      <section className='flex items-center h-full p-16  dark:text-gray-100'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl dark:text-gray-600'>
              <span className='sr-only'>Error</span>404
            </h2>
            <p className='text-2xl text-gray-400 font-semibold md:text-3xl mb-4'>
              Sorry, we couldn't find this page.
            </p>
            <Link
              to='/'
              className='px-8 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 underline cursor-pointer'
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
