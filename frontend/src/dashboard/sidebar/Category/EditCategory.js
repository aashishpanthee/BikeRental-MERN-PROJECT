import { ErrorMessage, Formik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ValidateCategoryAdd } from "../../../common/Validation";
import Error from "../../../Helper/Error";
import Spinner from "../../../Helper/Spinner";
import {
  editCategoryById,
  getCategoryById,
} from "../../../redux/features/Category/categoryAction";
import { clearFields } from "../../../redux/features/Category/categorySlice";
import AddEditWrapper from "../../common/AddEditWrapper";

const EditCategory = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryById(id));
  }, [id]);

  const { loading, error, success, categoryById } = useSelector(
    (state) => state.category
  );
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
      {categoryById ? (
        <AddEditWrapper
          title='Category'
          method='update'
          handleBack={handleBack}
          backlink='/dashboard/category'
        >
          <Formik
            initialValues={{
              name: categoryById.name,
            }}
            validationSchema={ValidateCategoryAdd}
            onSubmit={async (values) => {
              let datas = {
                _id: categoryById._id,
                name: values.name,
              };
              const data = await dispatch(editCategoryById(datas));
              if (!data.error) {
                toast.success(`Category updated successfully`);
              } else {
                toast.error(data.payload);
                dispatch(clearFields());
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
                    {/* {error && <Error>{error}</Error>} */}
                  </div>
                </div>
                <hr className='mt-6 border-b-1 border-blueGray-300' />
                <div className='w-full px-3 py-3 lg:w-6/12'>
                  <div className='relative w-full mt-3 mb-3'>
                    <button
                      type='submit'
                      className='px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-orange active:bg-lightBlue-600 hover:shadow-md focus:outline-none'
                    >
                      Submit
                    </button>
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

export default EditCategory;
