import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
// import { userRegister } from "../../../redux/features/User/authActions";
import { clearFields } from "../../../redux/features/User/authSlice";
// import { ValidateUser } from "../../Common/Validation";
import Spinner from "../../Helper/Spinner";
import { useEffect } from "react";
import AddEditWrapper from "../../Common/AddEditWrapper";
function Adduser() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState();
  const onImageChange = (event, setFieldValue) => {
    setFieldValue("image", event.target.files[0]);
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleBack = async () => {
    navigate(-1);
  };

  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.auth);
  useEffect(() => {
    if (success) {
      navigate(-1);
    }
  }, [success]);
  return (
    <AddEditWrapper
      title='User'
      error={error}
      method='create'
      success={success}
      handleBack={handleBack}
      backlink='/admin/user'
    >
      <Formik
        initialValues={{
          name: "",
          email: "",
          contact: "",
          password: "",
          confirmPassword: "",
          gender: "",
        }}
        validationSchema={ValidateUser}
        onSubmit={async (values, actions) => {
          let formdata = new FormData();
          formdata.append("name", values.name);
          formdata.append("contact", values.contact);
          formdata.append("gender", values.gender);
          formdata.append("image", values.image);
          formdata.append("password", values.password);
          formdata.append("confirmPassword", values.confirmPassword);
          formdata.append("email", values.email);
          await dispatch(userRegister(formdata));
          await dispatch(clearFields());
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <h6 className='mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400'>
              User Information
            </h6>
            <div className='flex flex-wrap'>
              <div className='w-full px-3 py-3 lg:w-6/12'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Username
                  </label>
                  <input
                    type='text'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    name='name'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name || ""}
                  />
                </div>
                <span className='text-red-500 error'>
                  <ErrorMessage name='name' />
                </span>
              </div>
              <div className='w-full px-3 py-3 lg:w-6/12'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Email address
                  </label>
                  <input
                    type='email'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    name='email'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email || ""}
                  />
                </div>
                <span className='text-red-500 error'>
                  <ErrorMessage name='email' />
                </span>
              </div>
              <div className='w-full px-3 py-3 lg:w-6/12'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Contact Number
                  </label>
                  <input
                    type='text'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    name='contact'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.contact || ""}
                  />
                  <span className='text-red-500 error'>
                    <ErrorMessage name='contact' />
                  </span>
                </div>
              </div>
              <div className='w-full px-3 py-3 lg:w-6/12'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    name='password'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password || ""}
                  />
                  <span className='text-red-500 error'>
                    <ErrorMessage name='password' />
                  </span>
                </div>
              </div>
              <div className='w-full px-3 py-3 lg:w-6/12'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Confirm Password
                  </label>
                  <input
                    type='password'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none'
                    name='confirmPassword'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.confirmPassword || ""}
                  />
                  <span className='text-red-500 error'>
                    <ErrorMessage name='confirmPassword' />
                  </span>
                </div>
              </div>
              <div className='w-full px-3 py-3 lg:w-3/12'>
                <div className='relative w-full mb-3 '>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Image
                  </label>
                  <input
                    type='file'
                    accept='image/*'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    onChange={(event) =>
                      onImageChange(event, props.setFieldValue)
                    }
                    onBlur={props.handleBlur}
                    autoComplete='off'
                  />
                </div>
                <span className='text-red-500 error'>
                  <ErrorMessage name='fullName' />
                </span>
              </div>
              <div className='px-4 lg:w-3/12'>
                {selectedImage && (
                  <div className='relative mt-4 border w-28 h-28'>
                    <img
                      src={selectedImage}
                      height='80'
                      width='80'
                      alt='Thumb'
                    />
                  </div>
                )}
              </div>
              <div className='w-full px-3 py-3 lg:w-6/12'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Gender
                  </label>
                  <select
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none'
                    name='gender'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.gender}
                    autoComplete='off'
                  >
                    <option>Select</option>
                    <option value='Male'>male</option>
                    <option value='Female'>female</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
                <span className='text-red-500 error'>
                  <ErrorMessage name='gender' />
                </span>
              </div>
            </div>
            <hr className='mt-6 border-b-1 border-blueGray-300' />
            <div className='w-full px-3 py-3 lg:w-6/12'>
              <div className='relative w-full mt-3 mb-3'>
                {loading ? (
                  <Spinner />
                ) : (
                  <button
                    disabled={loading}
                    type='submit'
                    className='px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-lightBlue-500 active:bg-lightBlue-600 hover:shadow-md focus:outline-none'
                  >
                    Register
                  </button>
                )}
              </div>
            </div>
          </form>
        )}
      </Formik>
    </AddEditWrapper>
  );
}

export default Adduser;
