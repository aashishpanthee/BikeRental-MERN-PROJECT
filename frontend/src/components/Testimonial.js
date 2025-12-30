import { Carousel } from "antd";
import React from "react";
const Testimonial = () => {
  const array1 = [
    {
      name: "Sumit Jung Chhetri",
      review:
        " The process of renting the vehicle was smooth and straightforward without any implicit condition.",
      image: "../images/testimonials/sumit.jpg",
    },
    {
      name: "Prawjal Bhandari",
      review:
        "Your company's ability to accommodate individual requirements is commendable.",
      image: "../images/testimonials/prawjal.jpg",
    },

    {
      name: "Ashish Aryal",
      review:
        "The bikes themselves were in top-notch condition. I felt safe and comfortable riding them throughout my trip.",
      image: "../images/testimonials/aryal.jpg",
    },
  ];
  const array2 = [
    {
      name: "Sandesh Chhetri",
      review:
        "The bike was clean, well-maintained, and performed flawlessly throughout my rental period.",
      image: "../images/testimonials/sandesh.jpg",
    },
    {
      name: " Sagar Thapa Chhetri",
      review:
        " I've tried various bike rental services, but this one is by far the best. The bikes are always in excellent condition.",
      image: "../images/testimonials/sagar.jpg",
    },
    {
      name: "Prem Gautam",
      review:
        "I felt confident and safe riding it, knowing that it had been properly maintained and serviced.",
      image: "../images/testimonials/prem.jpg",
    },
  ];
  const array3 = [
    {
      name: "Dhiraj Neupane",
      review:
        "I would highly recommend it to anyone looking for a fun and engaging way to explore a new city.",
      image: "../images/testimonials/dhiraj.jpg",
    },
    {
      name: "Sujan Shrestha",
      review:
        "In terms of comfort and safety,the bike I used was in good condition.",
      image: "../images/testimonials/sujan.jpg",
    },
    {
      name: "Manzil Shrestha",
      review:
        "The bikes are always in excellent condition.I felt confident and safe riding it.",
      image: "../images/testimonials/avatar.jpg",
    },
  ];
  return (
    <section className='text-gray-600 body-font bg-gray-50'>
      <div className='container px-5 py-10 mx-auto sm:py-14'>
        <h2 className='flex justify-center w-full mb-8 text-2xl font-semibold tracking-tight text-center text-slate-900 sm:text-3xl md:text-4xl md:mb-10'>
          Our Testimonials
        </h2>
        <div className='grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3'>
          <Carousel
            autoplay={true}
            dotPosition='top'
            className='w-full'
          >
            {array1.map((array, index) => {
              return (
                <div
                  className='px-4 py-6 bg-white border border-gray-200 rounded-lg shadow-sm'
                  key={index}
                >
                  <div className='flex flex-col items-center justify-center h-full min-h-[280px] text-center'>
                    <img
                      alt={`${array.name} testimonial`}
                      className='inline-block object-cover object-center w-20 h-20 mb-4 bg-gray-100 border-2 border-gray-200 rounded-full'
                      src={array.image}
                    />
                    <p className='mb-4 text-sm leading-relaxed sm:text-base'>{array.review}</p>
                    <span className='inline-block w-10 h-1 mb-3 rounded bg-orange'></span>
                    <h2 className='text-sm font-semibold tracking-wider text-gray-900 title-font'>
                      {array.name}
                    </h2>
                  </div>
                </div>
              );
            })}
          </Carousel>
          <Carousel
            autoplay={true}
            dotPosition='top'
            className='w-full'
          >
            {array2.map((array, index) => {
              return (
                <div
                  className='px-4 py-6 bg-white border border-gray-200 rounded-lg shadow-sm'
                  key={index}
                >
                  <div className='flex flex-col items-center justify-center h-full min-h-[280px] text-center'>
                    <img
                      alt={`${array.name} testimonial`}
                      className='inline-block object-cover object-center w-20 h-20 mb-4 bg-gray-100 border-2 border-gray-200 rounded-full'
                      src={array.image}
                    />
                    <p className='mb-4 text-sm leading-relaxed sm:text-base'>{array.review}</p>
                    <span className='inline-block w-10 h-1 mb-3 rounded bg-orange'></span>
                    <h2 className='text-sm font-semibold tracking-wider text-gray-900 title-font'>
                      {array.name}
                    </h2>
                  </div>
                </div>
              );
            })}
          </Carousel>
          <Carousel
            autoplay={true}
            dotPosition='top'
            className='w-full'
          >
            {array3.map((array, index) => {
              return (
                <div
                  className='px-4 py-6 bg-white border border-gray-200 rounded-lg shadow-sm'
                  key={index}
                >
                  <div className='flex flex-col items-center justify-center h-full min-h-[280px] text-center'>
                    <img
                      alt={`${array.name} testimonial`}
                      className='inline-block object-cover object-center w-20 h-20 mb-4 bg-gray-100 border-2 border-gray-200 rounded-full'
                      src={array.image}
                    />
                    <p className='mb-4 text-sm leading-relaxed sm:text-base'>{array.review}</p>
                    <span className='inline-block w-10 h-1 mb-3 rounded bg-orange'></span>
                    <h2 className='text-sm font-semibold tracking-wider text-gray-900 title-font'>
                      {array.name}
                    </h2>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
