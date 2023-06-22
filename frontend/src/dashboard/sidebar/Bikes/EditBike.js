import React, { useState, useEffect } from "react";
import { Formik, ErrorMessage } from "formik";
import { ValidateBikeAdd } from "../../../common/Validation";
import AddEditWrapper from "../../common/AddEditWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../../../Helper/Error";
import Spinner from "../../../Helper/Spinner";
import toast from "react-hot-toast";
import {
  getBikeById,
  editBikeById,
} from "../../../redux/features/Bikes/bikeAction";
import { clearFields } from "../../../redux/features/Bikes/bikeSlice";
import { useParams } from "react-router-dom";
import { CategoryAll } from "../../../redux/features/Category/categoryAction";
const base_url = `http://localhost:5000`;

const EditBike = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [errors, setErrors] = useState("");
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onImageChange = (event, setFieldValue) => {
    setFieldValue("photo", event.target.files[0]);
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };
  useEffect(() => {
    dispatch(getBikeById(id));
    dispatch(CategoryAll());
  }, [id]);

  const { loading, success, bikeById } = useSelector((state) => state.bike);
  const { categories } = useSelector((state) => state.category);
  useEffect(() => {
    if (success) {
      dispatch(clearFields());
      navigate(-1);
    }
  }, [success]);

  const handleBack = async () => {
    await dispatch(clearFields());
    navigate(-1);
  };
  return (
    <>
      {bikeById ? (
        <AddEditWrapper
          title='Bike'
          // error={error}
          method='update'
          // success={success}
          handleBack={handleBack}
          backlink='/dashboard/bikes'
        >
          <Formik
            initialValues={{
              name: bikeById.name,
              number: bikeById.number,
              price: bikeById.price,
              description: bikeById.description,
              category: bikeById.category._id,
              photo: null,
            }}
            validationSchema={ValidateBikeAdd}
            onSubmit={async (values) => {
              let formdata = new FormData();
              formdata.append("name", values.name);
              formdata.append("number", values.number);
              formdata.append("photo", values.photo);
              formdata.append("category", values.category);
              formdata.append("description", values.description);
              formdata.append("price", parseInt(values.price));
              let data = {
                id: bikeById._id,
                formdata: formdata,
              };
              const datas = await dispatch(editBikeById(data));
              if (datas.error) {
                setErrors(data.payload);
                dispatch(clearFields());
              } else {
                toast.success(`Bike updated successfully`);
              }
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <h6 className='mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400'>
                  Bike Information
                </h6>
                <div className='flex flex-wrap'>
                  <div className='w-full px-4 lg:w-6/12'>
                    <div className='relative w-full mb-3'>
                      <label className='block mb-2 text-xs font-bold uppercase text-blueGray-600'>
                        Bike Name
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
                  <div className='w-full px-4 lg:w-6/12'>
                    <div className='relative w-full mb-3'>
                      <label className='block mb-2 text-xs font-bold uppercase text-blueGray-600'>
                        Bike Number
                      </label>
                      <input
                        type='text'
                        className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                        name='number'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.number || ""}
                      />
                    </div>
                    <span className='text-red-500 error'>
                      <ErrorMessage name='number' />
                    </span>
                  </div>
                  <div className='w-full px-4 mt-4 lg:w-6/12'>
                    <div className='relative w-full mb-3'>
                      <label className='block mb-2 text-xs font-bold uppercase text-blueGray-600'>
                        Price Per Day
                      </label>
                      <input
                        type='string'
                        className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                        name='price'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.price || ""}
                      />
                    </div>
                    <span className='text-red-500 error'>
                      <ErrorMessage name='price' />
                    </span>
                  </div>
                  <div className='w-full px-3 py-3 lg:w-6/12'>
                    <div className='relative w-full mb-3'>
                      <label className='block mb-2 text-xs font-bold uppercase text-blueGray-600'>
                        Category
                      </label>
                      <select
                        className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none'
                        name='category'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.category}
                        autoComplete='off'
                      >
                        <option value=''>Select</option>
                        {categories.length !== 0 &&
                          categories.map((item, i) => {
                            return (
                              <>
                                <option value={item._id}>{item.name}</option>
                              </>
                            );
                          })}
                      </select>
                    </div>
                    <span className='text-red-500 error'>
                      <ErrorMessage name='category' />
                    </span>
                  </div>
                  <div className='w-full px-3 py-3 lg:w-3/12'>
                    <div className='relative w-full mb-3 '>
                      <label className='block mb-2 text-xs font-bold uppercase text-blueGray-600'>
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
                      <ErrorMessage name='photo' />
                    </span>
                  </div>
                  <div className='px-4 lg:w-3/12'>
                    {selectedImage ? (
                      <div className='relative mt-4'>
                        <img
                          src={selectedImage}
                          height={80}
                          width={80}
                          alt='Bike-image'
                        />
                      </div>
                    ) : (
                      <img
                        src={`${base_url}/api/v1/bike/bike-photo/${id}`}
                        height={80}
                        width={80}
                        alt='Bike-image'
                      />
                    )}
                  </div>
                  <div className='w-full px-4 mt-4 lg:w-6/12'>
                    <div className='relative w-full mb-3'>
                      <label className='block mb-2 text-xs font-bold uppercase text-blueGray-600'>
                        Description
                      </label>
                      <textarea
                        className='w-full px-3 py-2 text-sm transition-all duration-150 ease-linear bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300'
                        name='description'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.description || ""}
                        cols={5}
                        rows={5}
                      ></textarea>
                    </div>
                    <span className='text-red-500 error'>
                      <ErrorMessage name='description' />
                    </span>
                  </div>
                  {errors && <Error>{errors}</Error>}
                </div>
                <hr className='mt-6 border-b-1 border-blueGray-300' />
                <div className='w-full px-3 py-3 lg:w-6/12'>
                  <div className='relative w-full mt-3 mb-3'>
                    {loading ? (
                      <Spinner />
                    ) : (
                      <button
                        type='submit'
                        className='px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-orange active:bg-lightBlue-600 hover:shadow-md focus:outline-none'
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </AddEditWrapper>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default EditBike;
