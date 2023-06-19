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
    <section className='text-gray-600 body-font'>
      <div className='container px-5 mx-auto md:py-20 py-15'>
        <div className='flex flex-col'>
          <div className='h-1 overflow-hidden bg-gray-200 rounded'>
            <div className='w-24 h-full bg-indigo-500'></div>
          </div>
          <div className='flex flex-col flex-wrap py-6 mb-12 sm:flex-row'>
            <h1 className='mb-2 text-2xl font-medium text-gray-900 sm:w-2/5 title-font sm:mb-0'>
              Rent By Categories
            </h1>
            <p className='pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10'>
              Experience the freedom of two-wheeled exploration through our bike
              rental website's categorized selection, designed to effortlessly
              match you with the perfect bike.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap -mt-4 -mb-10 sm:-m-4'>
          {array.map((array, index) => {
            return (
              <div
                className='p-2 mb-6 border-2 border-gray-200 rounded-md md:w-1/3 sm:mb-0'
                key={index}
              >
                <div className='h-64 overflow-hidden rounded-lg'>
                  <LazyLoadImage
                    alt='content'
                    className='object-cover object-center w-full h-full img-lazy '
                    src={array.images}
                    placeholderSrc='https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png'
                    effect='blur' // opacity | black-and-white
                  />
                </div>
                <h2 className='mt-5 text-xl font-medium text-gray-900 title-font'>
                  {array.name}
                </h2>

                <Link
                  className='inline-flex items-center mt-1 text-orange'
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
