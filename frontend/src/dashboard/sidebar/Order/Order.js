import React from "react";
import TableWrapper from "../../common/TableWrapper";
import OrderTable from "./Ordertable";

const Order = () => {
  return (
    <TableWrapper
      title='Total Rental Orders'
      addlink='/dashboard/rental/add'
      addTitle='Add Order'
    >
      <OrderTable />
    </TableWrapper>
  );
};

export default Order;
