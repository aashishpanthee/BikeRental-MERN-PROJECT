import React, { useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { logout } from "../../redux/features/User/authSlice";

const Dashboardnavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      {/* Navbar */}
      <nav className='absolute top-0 left-0 z-10 flex items-center w-full p-4 bg-transparent md:flex-row md:flex-nowrap md:justify-start'>
        <div className='flex flex-wrap items-center justify-between w-full px-4 mx-autp md:flex-nowrap md:px-10'>
          {/* Brand */}
          <a
            className='hidden text-base font-bold text-white uppercase lg:inline-block'
            href='#pablo'
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
          <form className='flex-row flex-wrap items-center hidden mr-3 md:flex lg:ml-auto'>
            <div className='relative flex flex-wrap items-stretch w-full'>
              <span className='absolute z-10 items-center justify-center w-8 h-full py-3 pl-3 text-base font-normal leading-snug text-center bg-transparent rounded text-blueGray-300'>
                <i className='fas fa-search'></i>
              </span>
              <div className='flex'>
                <div>
                  <input
                    type='text'
                    placeholder='Search here...'
                    className='relative w-full px-3 py-3 pl-10 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                  />
                </div>
                <img
                  src='../ashish.jpg'
                  alt=''
                  className='w-10 h-10 ml-3 mr-1 rounded-full'
                />
                <Menu as='div' className='text-left '>
                  <div>
                    <Menu.Button className='inline-flex justify-center w-full py-2 text-base font-medium rounded-md text-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                      {userInfo.name}
                      <ChevronDownIcon
                        className='w-5 h-5 ml-2 -mr-1 text-gray-200'
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
                      <div className='px-1 py-1 rounded hover:bg-black hover:text-white'>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={handleLogout}
                              className={`${
                                active ? "bg-black text-white" : "text-gray-900"
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
            </div>
          </form>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
};

export default Dashboardnavbar;
