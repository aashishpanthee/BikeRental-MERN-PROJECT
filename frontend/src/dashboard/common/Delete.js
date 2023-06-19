import React from "react";

const Delete = ({showModal,setShowModal}) => {
  return <>
      {showModal ? (
      <>
        <div className="absolute z-50 flex justify-center w-full overflow-x-hidden overflow-y-auto outline-none top-3 focus:outline-none">
          <div className="w-1/2">
            {/*content*/}
            <div className="relative flex flex-col w-full px-4 bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                <button
                  className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative flex justify-center p-6">
                <p className="my-4 text-lg leading-relaxed text-slate-500">
                  Are you sure to delete?
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                <button
                  className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Yes
                </button>
                <button
                  className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-30 bg-black opacity-25"></div>
      </>
    ) : null}
  </>;
};

export default Delete;
