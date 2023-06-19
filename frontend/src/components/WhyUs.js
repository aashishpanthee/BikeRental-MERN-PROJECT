import React from "react";

const WhyUs = () => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container flex flex-wrap px-5 py-10 mx-auto sm:py-12'>
        <div className='flex justify-center w-full mb-8 text-xl font-medium tracking-tight sm:text-3xl sm:font-extralarge text-slate-900 md:mb-10 sm:text-center'>
          WHY CHOOSE US ?
        </div>
        <div className='flex flex-wrap w-full'>
          <div className='lg:w-2/5 md:w-1/2 md:pr-10 md:py-10'>
            <div className='relative flex pb-12'>
              <div className='absolute inset-0 flex items-center justify-center w-10 h-full'>
                <div className='w-1 h-full bg-gray-200 pointer-events-none'></div>
              </div>
              <div className='relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-orange'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
                </svg>
              </div>
              <div className='flex-grow pl-4'>
                <h2 className='mb-1 text-sm font-bold tracking-wider title-font text-slate-900'>
                  Assured Bikes
                </h2>
                <p className='leading-relaxed'>
                  Bikes that are assured with wheel-street will be one of the
                  highest possible quality.
                </p>
              </div>
            </div>
            <div className='relative flex pb-12'>
              <div className='absolute inset-0 flex items-center justify-center w-10 h-full'>
                <div className='w-1 h-full bg-gray-200 pointer-events-none'></div>
              </div>
              <div className='relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-orange'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                </svg>
              </div>
              <div className='flex-grow pl-4'>
                <h2 className='mb-1 text-sm font-bold tracking-wider title-font text-slate-900'>
                  Lowest Price Guarantee
                </h2>
                <p className='leading-relaxed'>
                  Get all your favourite bikes for rent at the lowest possible
                  price on the bike rental market.
                </p>
              </div>
            </div>

            <div className='relative flex'>
              <div className='relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-orange'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                  <path d='M22 4L12 14.01l-3-3'></path>
                </svg>
              </div>
              <div className='flex-grow pl-4'>
                <h2 className='mb-1 text-sm font-bold tracking-wider title-font text-slate-900'>
                  One Stop Shop
                </h2>
                <p className='leading-relaxed'>
                  Be it everyday commute,road trips,riding gears, and
                  maintenance - we have them all.
                </p>
              </div>
            </div>
          </div>
          {/*   <Image
            src={pricing}
            className='object-cover object-center mt-12 rounded-lg lg:w-3/5 md:w-1/2 md:mt-0'
            alt='team'
          /> */}

          <img
            className='object-center mt-12 rounded-lg lg:w-3/5 md:w-1/2 object-fit md:mt-0'
            src='../images/scooter.jpg'
            alt='step'
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
