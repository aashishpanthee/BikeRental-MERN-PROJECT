import React from "react";
import TableWrapper from "../../common/TableWrapper";
import CategoryTable from "./CategoryTable";

const Category = () => {
  return (
    <TableWrapper
      title='Total Category'
      addlink='/dashboard/category/add'
      addTitle='Add Category'
      layouttitle='Dashboard Category table'
    >
      <CategoryTable />
    </TableWrapper>
  );
};

export default Category;
