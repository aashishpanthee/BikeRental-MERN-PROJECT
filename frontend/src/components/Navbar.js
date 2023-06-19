import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { logout } from "../redux/features/User/authSlice";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Rent Bikes", href: "/bikerentsection" },
  // { name: "My Orders", href: "/order" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ scrolled }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  // const { cartTotalQuantity } = useSelector((state) => state.cart);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Disclosure
      as='nav'
      className={`fixed top-0 w-full z-10 ${
        scrolled
          ? "bg-teal-100 opacity-100 transition-all duration-300"
          : "bg-slate-50"
      }`}
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block w-6 h-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block w-6 h-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-start'>
                <Link className='flex items-center flex-shrink-0' to='/'>
                  <img
                    className='block w-auto h-8 lg:hidden'
                    src='../images/navbarlogo.png'
                    alt='Your Company'
                  />
                  <img
                    className='hidden w-auto h-8 lg:block'
                    src='../images/navbarlogo.png'
                    alt='Your Company'
                  />
                </Link>
                <div className='hidden sm:flex sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          " hover:bg-orange hover:text-white text-semibold",
                          "rounded-md px-3 py-2 text-sm font-bold text-slate-900"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {userInfo !== undefined && userInfo !== null ? (
                <div className='flex items-center text-right'>
                  {/* <Link className='flex items-center' to='/cart'>
                    <ShoppingBagIcon className='w-6 h-6 ' />
                    <span className='flex flex-col items-center justify-center font-semibold cursor-pointer'>
                      <span className=''>Your Cart</span>
                    </span>
                  </Link> */}
                  <Menu as='div' className='text-left '>
                    <div>
                      <Menu.Button className='inline-flex items-center justify-center w-full px-4 py-2 text-xs font-medium rounded-md sm:text-base text-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                        <img
                          src='../ashish.jpg'
                          alt=''
                          className='w-10 h-10 mr-2 rounded-full'
                        />
                        {userInfo.name}
                        <ChevronDownIcon
                          className='w-5 h-5 ml-2 -mr-1 text-orange'
                          aria-hidden='true'
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 z-10 w-48 mt-2 origin-top-right divide-y divide-gray-300 rounded-md shadow-lg bg-gray-50 ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className='px-1 py-1 '>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to='/dashboard'
                                className={`${
                                  active
                                    ? "bg-orange text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Dashboard
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to='/cart'
                                className={`${
                                  active
                                    ? "bg-orange text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Your cart
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                        <div className='px-1 py-1'>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleLogout}
                                className={`${
                                  active
                                    ? "bg-orange text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Logout
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                <div className='space-x-2'>
                  <Link
                    className='px-3 py-2 text-sm font-medium text-black rounded-md hover:bg-black hover:text-white'
                    to='/login'
                  >
                    Login
                  </Link>
                  <Link
                    className='px-3 py-2 text-sm font-medium text-white rounded-md text-gray-1 00 bg-orange hover:bg-black'
                    to='/signup'
                  >
                    Sign up
                  </Link>
                </div>
              )}

              {/*  */}
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
