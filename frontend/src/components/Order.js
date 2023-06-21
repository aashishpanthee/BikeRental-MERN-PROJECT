import React, { useEffect, useState } from "react";
import moment from "moment";
import { Button, Modal, Space } from "antd";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBikeById, getBikeBySlug } from "../redux/features/Bikes/bikeAction";
import { useParams } from "react-router-dom";
import Spinner from "../Helper/Spinner";
import { AddOrder } from "../redux/features/Order/orderAction";
import { toast } from "react-hot-toast";
import { clearFields } from "../redux/features/Order/orderSlice";
import Error from "../Helper/Error";
// import { clearFields } from "../redux/features/Order/orderSlice";
const base_url = "http://localhost:8000/";
const { RangePicker } = DatePicker;
const Order = () => {
  const [error, setError] = useState("");
  let { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [days, setDays] = useState(0);
  const [totalamount, setTotalAmount] = useState(0);
  const [open, setOpen] = useState(false);
  const { loading, success } = useSelector((state) => state.order);
  console.log(success, "success");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => {
    dispatch(getBikeBySlug(slug));
  }, [slug]);

  const { bikeBySlug } = useSelector((state) => state.bike);
  useEffect(() => {
    if (success) {
      toast.success("Your order has been placed");
      dispatch(clearFields());
      navigate("/");
    }
  }, [success, navigate]);
  const disabledDate = (current) => {
    // Disable dates before today or the current date
    return current && current < moment().startOf("day");
  };
  const selectTimeSlots = (values) => {
    let a = values[0].format("YYYY-MM-DD");
    let b = values[1].format("YYYY-MM-DD");
    setFrom(a);
    setTo(b);
    setDays(values[1].diff(values[0], "days"));
  };

  useEffect(() => {
    if (bikeBySlug) {
      setTotalAmount(days * bikeBySlug.price);
    }
  }, [days, bikeBySlug]);
  const showModal = () => {
    setOpen(true);
  };
  const submitModal = async () => {
    const formData = {
      totalAmt: totalamount,
      startDate: from,
      endDate: to,
      bikeId: bikeBySlug._id,
    };
    console.log(formData);
    const data = await dispatch(AddOrder(formData));
    if (data.error) {
      setError(data.payload);
      dispatch(clearFields());
    }
    setOpen(false);
  };
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <>
      {bikeBySlug ? (
        <>
          <section className='overflow-hidden text-gray-600 body-font'>
            <div className='container px-5 py-10 mx-auto'>
              <div className='flex flex-wrap mx-auto lg:w-4/5'>
                <img
                  alt={bikeBySlug.name}
                  className='object-cover object-center w-full rounded h-60 sm:h-36 lg:w-1/2 lg:h-auto'
                  src={`${base_url}${bikeBySlug.image}`}
                />
                <div className='w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0'>
                  <h2 className='text-sm tracking-widest text-gray-500 title-font'>
                    Rent Now !!!
                  </h2>
                  <h1 className='mb-1 text-3xl font-medium text-gray-900 title-font'>
                    {bikeBySlug.name}
                  </h1>
                  <div className='text-justify'>{bikeBySlug.description}</div>
                  <h1 className='mb-1 text-xl font-normal text-gray-900'>
                    Rent per day :<span> Rs {bikeBySlug.price}</span>
                  </h1>
                  <div className='flex mb-4'>
                    <span className='flex items-center'>
                      <svg
                        fill='currentColor'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-4 h-4 text-orange'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                      </svg>
                      <svg
                        fill='currentColor'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-4 h-4 text-orange'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                      </svg>
                      <svg
                        fill='currentColor'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-4 h-4 text-orange'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                      </svg>
                      <svg
                        fill='currentColor'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-4 h-4 text-orange'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                      </svg>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-4 h-4 text-orange'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                      </svg>
                      <span className='ml-3 text-gray-600'>4 Reviews</span>
                    </span>
                  </div>
                  {/* <p className='leading-relaxed'>
                    The Pulsar 220 is a flagship model from Bajaj Auto is a
                    sporty, muscular-looking motorcycle. It has a five-speed
                    gearbox that offers smooth gear shifts. The bike also offers
                    good fuel efficiency, making it practical for longer
                    journeys.The bike also features front and rear disc brakes,
                    ensuring efficient braking performance.
                  </p> */}
                  <RangePicker
                    format='DD MMMM YYYY'
                    disabledDate={disabledDate}
                    onChange={selectTimeSlots}
                    className='mb-2'
                  />

                  <div className='font-semibold'>Total Days: {days}</div>
                  <div className='flex items-center'>
                    <span className='text-xl font-medium text-gray-900 title-font'>
                      Price :
                    </span>
                    <span
                      className='ml-2 text-xl font-medium title-font'
                      name='totalAmt'
                    >
                      Rs {totalamount}
                    </span>
                    {error && <Error>{error}</Error>}
                    <Button
                      onClick={showModal}
                      disabled={!to && !from}
                      className='flex items-center px-6 py-2 ml-6 text-white border-0 rounded bg-orange focus:outline-none hover:bg-black hover:text-white'
                    >
                      Rent Now
                    </Button>
                    <Modal
                      title='Confirm your rental order ?'
                      open={open}
                      onOk={submitModal}
                      onCancel={hideModal}
                      okText='Yes'
                      style={{
                        position: "relative",
                        top: "40%",
                      }}
                      cancelText='No'
                    ></Modal>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Order;
