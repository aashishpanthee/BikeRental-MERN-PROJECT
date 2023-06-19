import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Helper/Spinner";
import { userLogin } from "../redux/features/User/authAction";
import { clearFields } from "../redux/features/User/authSlice";
import Layout from "./Layout";
import Error from "../Helper/Error";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, userInfo, success } = useSelector((state) => state.auth);
  const [errors, setErrors] = useState("");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      dispatch(clearFields());
      navigate("/");
    }
  }, [userInfo]);
  const onSubmit = async (event) => {
    const data = {
      email: email,
      password: password,
    };
    const datas = await dispatch(userLogin(data));
    console.log(datas, "here we are datas");
    if (datas.error) {
      setErrors(datas.payload);
      dispatch(clearFields());
    }
  };

  return (
    <Layout title={"Bikebook : Login"}>
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

        <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6'>
            <div>
              <label
                htmlFor='email'
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
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
              <div className='flex flex-col mt-1 '>
                <Link
                  to='/forgotpassword'
                  className='text-sm font-semibold text-right cursor-pointer text-slate-900'
                >
                  Forgot password?
                </Link>
              </div>
              {errors && <Error>{errors}</Error>}
            </div>
            <div>
              <button
                type='submit'
                className='flex justify-center w-full px-3 py-1.5 text-sm font-semibold leading-6 text-white rounded-md shadow-sm bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                onClick={(event) => onSubmit(event)}
                disabled={loading}
              >
                {loading ? <Spinner /> : "Login"}
              </button>
            </div>
          </form>

          <p className='mt-3 text-sm text-center text-gray-500'>
            <Link
              to='/signup'
              className='font-semibold leading-6 text-slate-900 '
            >
              Don't have an account ?
              <span className='text-orange'> Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
