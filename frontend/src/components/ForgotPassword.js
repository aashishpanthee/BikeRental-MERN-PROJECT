import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import { ValidateForgotPassword } from "../common/Validation";
import Spinner from "../Helper/Spinner";
import Error from "../Helper/Error";
import { forgotPassword } from "../redux/features/User/authAction";
import { clearFields } from "../redux/features/User/authSlice";
import Layout from "./Layout";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  console.log(error);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // const onSubmit = async (event) => {
  //   const data = {
  //     email: email,
  //     newPassword: newPassword,
  //     answer: answer,
  //   };
  //   console.log(data);
  //   await dispatch(forgotPassword(data));
  // };

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      dispatch(clearFields());
      navigate("/");
    } else {
      dispatch(clearFields());
    }
  }, [userInfo]);
  return (
    <Layout title={"Bikebook : Forgot Password"}>
      <div className='flex flex-col justify-center h-screen px-6 py-12 lg:px-8 bg-slate-50'>
        <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
          <Link to='/'>
            <img
              className='w-auto h-10 mx-auto'
              src='../images/navbarlogo.png'
              alt='Your Company'
            />
          </Link>
          <h2 className='mt-5 text-2xl font-bold leading-9 tracking-tight text-center text-slate-900'>
            Sign in to your account
          </h2>
        </div>
        <Formik
          initialValues={{
            email: "",
            newPassword: "",
            answer: "",
          }}
          validationSchema={ValidateForgotPassword}
          onSubmit={async (values, actions) => {
            const data = {
              email: values.email,
              newPassword: values.newPassword,
              answer: values.answer,
            };
            await dispatch(forgotPassword(data));
          }}
        >
          {(props) => (
            <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
              <form className='space-y-6' onSubmit={props.handleSubmit}>
                <div>
                  <label
                    for='email'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Email address
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.email || ""}
                    />
                  </div>
                  <span className='text-red-500 error'>
                    <ErrorMessage name='email' />
                  </span>
                </div>

                <div>
                  <div className='flex items-center justify-between'>
                    <label
                      for='newPassword'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      New Password
                    </label>
                  </div>
                  <div className='mt-2'>
                    <input
                      id='newPassword'
                      name='newPassword'
                      type='password'
                      autoComplete='newPassword'
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.newPassword}
                      required
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                  <span className='text-red-500 error'>
                    <ErrorMessage name='newPassword' />
                  </span>
                </div>
                <div>
                  <div className='flex items-center justify-between'>
                    <label
                      for='answer'
                      className='flex flex-col text-sm font-medium leading-6 text-gray-900'
                    >
                      <span className='underline text-start text-bold text-orange'>
                        Security Question
                      </span>
                      What's your favourite Bikename ?
                    </label>
                  </div>
                  <div className='mt-2'>
                    <input
                      id='answer'
                      name='answer'
                      type='text'
                      autoComplete='answer'
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.answer || ""}
                      required
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                  <span className='text-red-500 error'>
                    <ErrorMessage name='answer' />
                  </span>
                  <div class=' flex flex-col mt-1'>
                    {error && <Error>{error}</Error>}
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    className='flex justify-center w-full px-3 py-1.5 text-sm font-semibold leading-6 text-white rounded-md shadow-sm bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    disabled={loading}
                  >
                    {loading ? <Spinner /> : "Login"}
                  </button>
                </div>
              </form>

              <p class='mt-3 text-center text-sm text-gray-500'>
                <Link
                  to='/signup'
                  className='font-semibold leading-6 text-slate-900 '
                >
                  Don't have an account ?
                  <span className='text-orange'> Sign up</span>
                </Link>
              </p>
            </div>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
