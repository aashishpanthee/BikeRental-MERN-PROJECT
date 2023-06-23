import React from "react";
import { Carousel } from "antd";
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
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-8 mx-auto'>
        <h2 className='flex justify-center w-full mb-8 text-xl font-medium tracking-tight sm:text-3xl sm:font-extralarge text-slate-900 md:mb-10 sm:text-center'>
          Our Testimonials
        </h2>
        <div className='flex-col w-full gap-2 sm:flex sm:flex-row'>
          <Carousel
            autoplay={true}
            dotPosition='top'
            className='m-auto sm:w-[26rem] w-[20rem] '
          >
            {array1.map((array, index) => {
              return (
                <div
                  className='px-2 py-6 mb-6 border-2 rounded-md sm:px-3 sm:gap-2 lg:w-1/3 lg:mb-0'
                  key={index}
                >
                  <div className='flex flex-col items-center justify-center h-full text-center'>
                    <img
                      alt='testimonial'
                      className='inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full'
                      src={array.image}
                    />
                    <p className='leading-relaxed'>{array.review}</p>
                    <span className='inline-block w-10 h-1 mt-6 mb-4 rounded bg-orange'></span>
                    <h2 className='text-sm font-medium tracking-wider text-gray-900 title-font'>
                      {array.name}
                    </h2>
                  </div>
                </div>
              );
            })}
          </Carousel>
          <Carousel
            autoplay={true}
            dotPosition='left'
            className='m-auto sm:w-[26rem] w-[20rem]'
          >
            {array2.map((array, index) => {
              return (
                <div
                  className='gap-2 px-3 py-6 mb-6 border-2 rounded-md lg:w-1/3 lg:mb-0'
                  key={index}
                >
                  <div className='flex flex-col items-center justify-center h-full text-center'>
                    <img
                      alt='testimonial'
                      className='inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full'
                      src={array.image}
                    />
                    <p className='leading-relaxed'>{array.review}</p>
                    <span className='inline-block w-10 h-1 mt-6 mb-4 rounded bg-orange'></span>
                    <h2 className='text-sm font-medium tracking-wider text-gray-900 title-font'>
                      {array.name}
                    </h2>
                  </div>
                </div>
              );
            })}
          </Carousel>
          <Carousel
            autoplay={true}
            dotPosition='buttom'
            className='m-auto sm:w-[26rem] w-[20rem]'
          >
            {array3.map((array, index) => {
              return (
                <div
                  className='gap-2 px-3 py-6 mb-6 border-2 rounded-md lg:w-1/3 lg:mb-0'
                  key={index}
                >
                  <div className='flex flex-col items-center justify-center h-full text-center'>
                    <img
                      alt='testimonial'
                      className='inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full'
                      src={array.image}
                    />
                    <p className='leading-relaxed'>{array.review}</p>
                    <span className='inline-block w-10 h-1 mt-6 mb-4 rounded bg-orange'></span>
                    <h2 className='text-sm font-medium tracking-wider text-gray-900 title-font'>
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
