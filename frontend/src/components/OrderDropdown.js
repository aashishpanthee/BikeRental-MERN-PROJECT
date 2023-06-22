import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { GetOrder } from "../redux/features/Order/orderAction";

const OrderDropdown = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetOrder());
  }, []);
  const { userOrders } = useSelector((state) => state.order);
  console.log(userOrders, "hello order from order section");
  return <Layout title={"BikeBook : Your Orders"}>OrderDropdown</Layout>;
};

export default OrderDropdown;
