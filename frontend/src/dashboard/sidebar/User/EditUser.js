import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from "formik";
import {editUserById, getUserById } from "../../../redux/features/User/authActions";
import { clearFields } from "../../../redux/features/User/authSlice";
import { ValidateEditUser } from "../../Common/Validation";
import Spinner from "../../Helper/Spinner";
import { useParams } from 'react-router-dom';
import AddEditWrapper from "../../Common/AddEditWrapper";
const base_url = "http://localhost:5000/";

function EditUser() {
  let { id } = useParams();
  const navigate = useNavigate();

  const onImageChange = (event, setFieldValue) => {
    setFieldValue("image", event.target.files[0]);
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const dispatch = useDispatch();
  const { loading, error,success,userById } = useSelector((state) => state.auth);

  useEffect(()=>{
     dispatch(getUserById(id))
  },[id])

  const handleBack = async() =>{
  await dispatch(clearFields());
  navigate(-1);
  }
  
  useEffect(()=>{
    if(success){
      navigate(-1);
    }
  },[success])
  const [selectedImage, setSelectedImage] = useState();
  return (
    <>
    {
        userById ? (
          <AddEditWrapper title="User" error={error} method="update" success={success} backlink="/admin/user" handleBack={handleBack}>
          <Formik
            initialValues={{
              name: userById?userById.name:"",
              email: userById?userById.email:"",
              contact: userById?userById.contact:"",
              gender:userById?userById.gender:"",
              role:userById?userById.role:"",
            }}
            validationSchema={ValidateEditUser}
            onSubmit={async (values, actions) => {

              let formdata = new FormData();
              formdata.append("name", values.name);
              formdata.append("contact", values.contact);
              formdata.append("gender", values.gender);
              formdata.append("image", values.image);
              formdata.append("email", values.email);
              formdata.append("role", values.role);
              
              let data = {
                id:id,
                formdata:formdata
              }
              // console.log("data",data,values);
              // return;
              await dispatch(editUserById(data));
              await dispatch(clearFields())
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
              
                <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
                  User Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full px-3 py-3 lg:w-6/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="grid-password"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        name="name"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.name || ""}
                      />
                    </div>
                    <span className="error text-red-500">
                      <ErrorMessage name="name" />
                    </span>
                  </div>
                  <div className="w-full px-3 py-3 lg:w-6/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="grid-password"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        name="email"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.email || ""}
                      />
                    </div>
                    <span className="error text-red-500">
                      <ErrorMessage name="email" />
                    </span>
                  </div>
                  <div className="w-full px-3 py-3 lg:w-6/12">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Contact Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      name="contact"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.contact || ""}
                    />
                    <span className="error text-red-500">
                      <ErrorMessage name="contact" />
                    </span>
                  </div>
                  </div>
                  <div className="w-full px-3 py-3 lg:w-3/12">
                    <div className="relative w-full mb-3 ">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="grid-password"
                      >
                        Image
                      </label>
                      <input
                        type="file"
                        name="fileImage"
                        accept="image/*"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        onChange={(event) =>
                          onImageChange(event, props.setFieldValue)
                          }
                          autoComplete="off"
                      />
                    </div>
                    <span className="error text-red-500">
                      <ErrorMessage name="fullName" />
                    </span>
                  </div>
                  <div className="px-4  lg:w-3/12" >
                    {selectedImage ? (
                      <div className="relative mt-4 border  w-28 h-28">
                        <img
                          src={selectedImage}
                          height="80"
                          width="80"
                          alt="Thumb"
                        />
                      </div>
                    ):(
                      <img
                          src={`${base_url}${userById.image}`}
                          height="80"
                          width="80"
                          alt="no-image-found"
                        />  
                    )}
                  </div>
                  <div className="w-full px-3 py-3 lg:w-6/12">
                  <div className="relative w-full mb-3">
                  <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="grid-password"
                      >
                        Gender
                      </label>
                    <select
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none"
                      name="gender"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.gender}
                      autoComplete="off"
                    >
                      <option>Select</option>
                      <option value="Male">male</option>
                      <option value="Female">female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <span className="error text-red-500">
                    <ErrorMessage name="gender" />
                  </span>
                </div>
                <div className="w-full px-3 py-3 lg:w-6/12">
                  <div className="relative w-full mb-3">
                  <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="grid-password"
                      >
                        Role
                      </label>
                    <select
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none"
                      name="role"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.role}
                      autoComplete="off"
                    >
                      <option>Select</option>
                      <option value="SuperAdmin">SuperAdmin</option>
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                      <option value="Vendor">Vendor</option>
                    </select>
                  </div>
                  <span className="error text-red-500">
                    <ErrorMessage name="role" />
                  </span>
                </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <div className="w-full px-3 py-3 lg:w-6/12">
                  <div className="relative mt-3 w-full mb-3">
                  <button disabled={loading} type="submit" className="px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-lightBlue-500 active:bg-lightBlue-600 hover:shadow-md focus:outline-none">
                  {loading ? <Spinner /> : 'Submit'}
                </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
          </AddEditWrapper>
      ):<Spinner />
    }

     
    </>
  );
}

export default EditUser;
