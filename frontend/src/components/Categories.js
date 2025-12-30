import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const Categories = () => {
  const array = [
    {
      name: "Economuter bikes",
      images: "../images/economuter/pulsar.png",
      href: "/bikerentsection",
    },
    {
      name: "Sport bikes",
      images: "../images/sports/sport2.png",
      href: "/bikerentsection",
    },
    {
      name: "Scooter",
      images: "../images/scooter/vespaa.png",
      href: "/bikerentsection",
    },
  ];
  return (
    <section className='text-gray-600 bg-white body-font'>
      <div className='container px-5 py-12 mx-auto sm:py-16'>
        <div className='flex flex-col gap-4 sm:gap-6'>
          <div className='h-1 overflow-hidden bg-gray-200 rounded'>
            <div className='w-24 h-full bg-indigo-500'></div>
          </div>
          <div className='flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <h1 className='text-3xl font-semibold text-gray-900 title-font sm:text-4xl'>
              Rent By Categories
            </h1>
            <p className='text-base leading-relaxed sm:max-w-xl sm:text-right'>
              Experience the freedom of two-wheeled exploration through our bike
              rental website's categorized selection, designed to effortlessly
              match you with the perfect bike.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3'>
          {array.map((array, index) => {
            return (
              <div
                className='flex flex-col gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm'
                key={index}
              >
                <div className='relative w-full overflow-hidden rounded-md bg-gray-50 aspect-[4/3]'>
                  <LazyLoadImage
                    alt={array.name}
                    className='object-contain object-center w-full h-full img-lazy'
                    src={array.images}
                    placeholderSrc='https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png'
                    effect='blur'
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <h2 className='text-lg font-semibold text-gray-900 title-font'>
                    {array.name}
                  </h2>
                  <Link
                    className='inline-flex items-center text-sm font-semibold transition-colors text-orange hover:text-black'
                    to={array.href}
                  >
                    Enquire Now
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
