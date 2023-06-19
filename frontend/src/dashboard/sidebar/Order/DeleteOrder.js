import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { deleteBike } from "../../../redux/features/Bikes/bikeAction";
import { clearFields } from "../../../redux/features/Order/orderSlice";

export const DeleteOrder = ({ setShowModal, id, showModal }) => {
  const dispatch = useDispatch();
  const { error, success } = useSelector((state) => state.order);

  useEffect(() => {
    if (success) {
      dispatch(clearFields());
      setShowModal(!showModal);
    }
  }, [success]);

  return (
    <>
      {error && toast.error(error)}
      {success && toast.success(`bike deleted  sucessfully`)}
      <div className='absolute z-50 flex justify-center w-full overflow-x-hidden overflow-y-auto outline-none top-3 focus:outline-none'>
        <div className='w-1/2'>
          <div className='relative flex flex-col w-full px-4 bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
            {/*body*/}
            <div className='relative flex justify-center'>
              <p className='my-4 text-lg leading-relaxed text-slate-500'>
                Are you sure to delete?
              </p>
            </div>
            {/*footer*/}
            <div className='flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200'>
              <button
                className='px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none'
                type='button'
                onClick={() => dispatch(deleteBike(id))}
              >
                Yes
              </button>
              <button
                className='px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none'
                type='button'
                onClick={() => setShowModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 z-30 bg-black opacity-60'></div>
    </>
  );
};
