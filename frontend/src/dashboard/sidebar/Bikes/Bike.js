import React, { useState } from "react";
import TableWrapper from "../../common/TableWrapper";
import BikeTable from "./BikeTable";

const Bike = () => {
  return (
    <TableWrapper
      title='Total Bikes'
      addlink='/dashboard/bikes/add'
      addTitle='Add Bike'
      layouttitle='Dashboard Bike table'
    >
      <BikeTable />
    </TableWrapper>
  );
};

export default Bike;
