import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAll } from "../../../redux/features/User/authAction";
const base_url = "http://localhost:8000/";

const UserTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAll());
  }, []);

  const { loading, userInfo, users, error } = useSelector(
    (state) => state.auth
  );

  return (
    <div style={{ maxHeight: "300px", overflowY: "auto" }}>
      <table className='items-center w-full bg-transparent border-collapse'>
        <thead>
          <tr>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
              }
            >
              Name
            </th>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
              }
            >
              Email
            </th>

            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
              }
            >
              Role
            </th>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
              }
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users && users.length !== 0 ? (
            users?.map((user, i) => {
              return (
                <tr key={user._id}>
                  <td className='items-center p-4 px-6 align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                    <div className='flex justify-center'>{user.name}</div>
                  </td>
                  <td className='items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                    {user.email}
                  </td>
                  {user.role === 1 ? (
                    <td className='items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                      Admin
                    </td>
                  ) : (
                    <td className='items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                      user
                    </td>
                  )}

                  <td className='p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                    <div className='flex justify-center'>
                      <Link to={`/admin/user/edit/${user.id}`}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='icon icon-tabler icon-tabler-edit'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#00b341'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                          <path d='M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3' />
                          <path d='M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3' />
                          <line x1='16' y1='5' x2='19' y2='8' />
                        </svg>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className='text-center border'>
              <td colSpan={6} className='p-3 font-bold text-red-500'>
                No Data Found!!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
