import React from "react";
import TableWrapper from "../../common/TableWrapper";
import OrderTable from "./Ordertable";

const Order = () => {
  return (
    <TableWrapper title='Total Rental Orders'>
      <OrderTable />
    </TableWrapper>
  );
};

export default Order;
