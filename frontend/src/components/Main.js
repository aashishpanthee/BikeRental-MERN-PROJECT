import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <section className='py-8 bg-teal-50 sm:py-12'>
      <div className='flex flex-col items-center max-w-5xl gap-6 px-4 mx-auto text-center sm:gap-8'>
        <h3 className='text-3xl antialiased font-extrabold sm:text-5xl md:text-6xl text-orange'>
          Rent a Bike
        </h3>
        <LazyLoadImage
          src='../images/Home.png'
          alt='Bike rental hero'
          className='object-contain w-full h-auto max-w-3xl rounded-lg shadow-sm img-lazy'
          placeholderSrc='https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png'
          effect='blur'
        />
        <Link
          className='inline-flex items-center justify-center px-4 py-2 mt-1 text-sm font-semibold text-white transition-colors rounded sm:px-6 sm:py-3 sm:text-base bg-slate-900 hover:bg-orange'
          to='/bikerentsection'
        >
          Bike Showcase
        </Link>
      </div>
    </section>
  );
};

export default Main;
