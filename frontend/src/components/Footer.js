import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const array = [
    {
      heading: "Our Branches",
      links: [
        { name: "Butwal" },
        { name: "Palpa" },
        { name: "Pokhara" },
        { name: "Kathmandu" },
      ],
    },

    {
      heading: "Quick links",
      links: [
        { name: "Home", href: "/" },
        { name: "Categories", href: "/bikecategory" },
        { name: "Reviews", href: "/reviews" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      heading: "Contact info",
      links: [
        { name: "9864858784" },
        { name: "9800248734" },
        { name: "bikebook@gmail.com" },
        { name: "Lumbini Province, Nepal" },
      ],
    },
  ];
  return (
    <footer className='text-gray-600 body-font'>
      <div className='container flex flex-col flex-wrap px-5 mx-auto sm:py-20 md:items-end lg:items-center md:flex-row md:flex-nowrap'>
        <div className='flex-shrink-0 w-32 mx-auto text-center sm:w-64 md:mx-0 md:text-left'>
          <img
            className='flex items-center justify-center font-medium text-gray-900 title-font md:justify-start'
            src='../images/navbarlogo.png'
          />

          <p className='mt-2 text-sm text-slate-900'>
            Experience the freedom of two-wheeled exploration with us.
          </p>
        </div>
        <div className='flex flex-wrap flex-grow mt-10 -mb-10 text-center md:mt-0 md:text-left'>
          {array.map((array, index) => {
            return (
              <div
                className='w-full px-4 text-center lg:w-1/3 md:w-1/2'
                key={index}
              >
                <h2 className='mb-3 text-base font-medium tracking-widest title-font text-orange'>
                  {array.heading}
                </h2>
                <nav className='mb-10 list-none'>
                  {array.links.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link
                          className='text-base font-medium text-slate-900 hover:text-gray-800'
                          to={link.href}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </nav>
              </div>
            );
          })}
        </div>
      </div>
      <div className='bg-gray-100'>
        <div className='container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row'>
          <p className='text-sm text-center text-slate-900 sm:text-left'>
            © 2020 BikeBook —
            <a
              href='https://twitter.com/knyttneve'
              rel='noopener noreferrer'
              className='ml-1 text-slate-900'
              target='_blank'
            >
              All rights reserved.
            </a>
          </p>
          <span className='inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start'>
            <a className='text-slate-900'>
              <svg
                fill='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
              </svg>
            </a>
            <a className='ml-3 text-slate-900'>
              <svg
                fill='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
              </svg>
            </a>
            <a className='ml-3 text-slate-900'>
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
              </svg>
            </a>
            <a className='ml-3 text-slate-900'>
              <svg
                fill='currentColor'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='0'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='none'
                  d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                ></path>
                <circle cx='4' cy='4' r='2' stroke='none'></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
