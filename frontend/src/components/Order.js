import { Button, DatePicker, Modal, Space } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Error from "../Helper/Error";
import Spinner from "../Helper/Spinner";
import { getBikeBySlug } from "../redux/features/Bikes/bikeAction";
import { AddOrder } from "../redux/features/Order/orderAction";
import { clearFields } from "../redux/features/Order/orderSlice";
// import { clearFields } from "../redux/features/Order/orderSlice";

const { RangePicker } = DatePicker;
const Order = () => {
  const base_url = process.env.REACT_APP_API_URL;
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

  useEffect(() => {
    if (error) {
      setError("");
      navigate("/login");
    }
  }, [error]);
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
              <div className='flex flex-col gap-8 mx-auto lg:w-4/5 lg:flex-row lg:items-start'>
                <div className='w-full lg:w-1/2 rounded-lg overflow-hidden shadow-sm bg-gray-100 aspect-[4/3]'>
                  <img
                    alt={bikeBySlug.name}
                    className='object-cover object-center w-full h-full'
                    src={`${base_url}/api/v1/bike/bike-photo/${bikeBySlug._id}`}
                  />
                </div>
                <div className='w-full space-y-3 lg:w-1/2 lg:pl-10 lg:py-2'>
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
                    className='w-full mb-2 sm:w-auto'
                  />

                  <div className='font-semibold'>Total Days: {days}</div>
                  <div className='flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:flex-wrap'>
                    <div className='flex items-center gap-2 text-xl font-medium text-gray-900 title-font'>
                      <span>Price :</span>
                      <span className='text-xl font-medium title-font' name='totalAmt'>
                        Rs {totalamount}
                      </span>
                    </div>

                    <Button
                      onClick={showModal}
                      disabled={!to && !from}
                      className='flex items-center px-6 py-2 text-white border-0 rounded bg-orange focus:outline-none hover:bg-black hover:text-white'
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
                  {error && (
                    <span className='flex justify-start mt-3 ml-10'>
                      <Error>{error}</Error>
                    </span>
                  )}
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
