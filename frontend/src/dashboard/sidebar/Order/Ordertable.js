import { Select } from "antd";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../../Helper/Spinner";
import {
  AllOrder,
  updateStatus,
} from "../../../redux/features/Order/orderAction";
const { Option } = Select;

const Ordertable = ({ color }) => {
  const [status, setStatus] = useState([
    "Not Processed",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllOrder());
  }, []);
  const { loading, error, orders } = useSelector((state) => state.order);
  const handleChange = (orderId, value) => {
    let data = {
      orderId: orderId,
      status: value,
    };
    dispatch(updateStatus(data));
    dispatch(AllOrder());
  };
  return (
    <div style={{ maxHeight: "300px", overflowY: "auto" }}>
      <table className='items-center w-full bg-white border-collapse'>
        <thead>
          <tr>
            <th
              className={
                "px-2 border flex items-center justify-center border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold " +
                (color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
              }
            >
              SN
            </th>

            <th
              className={
                "px-5 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                (color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
              }
            >
              Bikename
            </th>
            <th
              className={
                "px-5 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                (color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
              }
            >
              Bike_number
            </th>
            <th
              className={
                "px-5 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                (color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
              }
            >
              Rented User
            </th>
            <th
              className={
                "px-2 align-middle border border-solid py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                (color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
              }
            >
              Total Amount
            </th>
            <th
              className={
                "px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                (color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
              }
            >
              Start Date
            </th>
            <th
              className={
                "px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                (color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
              }
            >
              End Date
            </th>
            <th
              className={
                "px-5 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                (color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
              }
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {loading && <Spinner />}
          {error && toast.error(error)} */}
          {orders && orders.length !== 0 ? (
            orders.map((order, i) => {
              return (
                <tr key={order._id}>
                  <td className='items-center px-2 text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                    {i + 1}
                  </td>
                  <td className='items-center px-5 py-3 text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                    <div className='flex'>
                      {order.bikes.name ? order.bikes.name : "N/A"}
                    </div>
                  </td>
                  <td className='items-center px-5 py-3 text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                    {order.bikes.number ? order.bikes.number : "N/A"}
                  </td>
                  <td className='items-center px-5 py-3 text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                    {order.renter.name}
                  </td>
                  <td className='items-center p-2 text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                    {order.totalAmt}
                  </td>
                  <td className='items-center p-3 text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                    {order.startDate}
                  </td>

                  <td className='items-center p-3 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                    {order.endDate}
                  </td>
                  <td className='items-center p-4 px-5 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                    <Select
                      bordered={false}
                      onChange={(value) => handleChange(order._id, value)}
                      defaultValue={order.status}
                    >
                      {status.map((s, i) => (
                        <Option key={i} value={s}>
                          {s}
                        </Option>
                      ))}
                    </Select>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className='text-center border'>
              <td colSpan={5} className='p-3 font-bold text-red-500'>
                No Data Found!!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Ordertable;
