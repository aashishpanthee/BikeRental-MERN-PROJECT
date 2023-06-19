import React, { useState } from "react";
import UserTable from "../User/UserTable";
import TableWrapper from "../../common/TableWrapper";

const User = () => {
  return (
    <>
      <div className='flex flex-wrap mt-4'>
        <div className='w-full px-4 mb-12'>
          <div className='relative flex flex-col min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg max-w-64'>
            <div className='px-2 py-2 mb-0 bg-white rounded-t'>
              <div className='flex flex-wrap items-center'>
                <div className='relative flex-1 flex-grow w-full max-w-full px-4'>
                  <h3 className='py-2 text-lg font-semibold text-orange'>
                    Total Users
                  </h3>
                </div>
              </div>
              <UserTable />
            </div>
          </div>
        </div>
      </div>
    </>
    /*   <TableWrapper title='User' addlink='/dashboard/'>
    </TableWrapper> */
  );
};

export default User;
