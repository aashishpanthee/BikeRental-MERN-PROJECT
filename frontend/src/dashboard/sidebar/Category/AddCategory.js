import React, { useState, useEffect } from "react";
import { Formik, ErrorMessage } from "formik";
import { ValidateCategoryAdd } from "../../../common/Validation";
import AddEditWrapper from "../../common/AddEditWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../../redux/features/Category/categoryAction";
import { clearFields } from "../../../redux/features/Category/categorySlice";
import Spinner from "../../../Helper/Spinner";
import Error from "../../../Helper/Error";
import toast from "react-hot-toast";

const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const { loading, success } = useSelector((state) => state.category);

  const handleBack = async () => {
    dispatch(clearFields());
    navigate(-1);
  };
  useEffect(() => {
    if (success) {
      dispatch(clearFields());
      navigate(-1);
    }
  }, [success]);
  return (
    <AddEditWrapper
      title='Category'
      method='create'
      handleBack={handleBack}
      backlink='/dashboard/category'
    >
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={ValidateCategoryAdd}
        onSubmit={async (values) => {
          const data = await dispatch(addCategory(values));
          if (data.error) {
            setErrors(data.payload);
            dispatch(clearFields());
          } else {
            toast.success(`Category added successfully`);
          }
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} className='bg-transparent'>
            <h6 className='mt-3 mb-6 text-sm font-bold text-black uppercase'>
              Category Information
            </h6>
            <div className='flex flex-wrap'>
              <div className='w-full px-4 lg:w-6/12'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Category Name
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
                {errors && <Error>{errors}</Error>}
              </div>
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
  );
};

export default AddCategory;
