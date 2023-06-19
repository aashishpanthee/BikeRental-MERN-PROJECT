import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BikeAll } from "../redux/features/Bikes/bikeAction";
import { addToCart } from "../redux/features/Cart/cartSlice";
import Layout from "./Layout";

const BikeRentSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => {
    dispatch(BikeAll());
  }, []);
  const { bikes } = useSelector((state) => state.bike);
  const base_url = "http://localhost:5000";
  const handleCart = (bike) => {
    dispatch(addToCart(bike));
  };
  return (
    <Layout title={"Bike rental made easy"}>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {bikes &&
              bikes.length !== 0 &&
              bikes.map((bike) => (
                <div className='w-full p-4 lg:w-1/4 md:w-1/2' key={bike._id}>
                  <div className='relative block overflow-hidden rounded h-50'>
                    <img
                      alt='ecommerce'
                      className='object-cover object-center w-full h-full'
                      src={`${base_url}/api/v1/bike/bike-photo/${bike._id}`}
                    />
                  </div>
                  <div className='mt-4'>
                    <h2 className='text-lg font-medium text-gray-900 title-font'>
                      {bike.name}
                    </h2>
                    <p className='mt-1'>Price per day: {bike.price}</p>
                  </div>
                  <div className='flex justify-between mt-3'>
                    <button
                      className='flex px-6 py-2 text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-black'
                      onClick={() => handleCart(bike)}
                    >
                      Add to cart
                    </button>
                    <Link
                      className='inline-flex items-center px-3 py-2 text-white border-0 rounded bg-orange focus:outline-none hover:bg-black'
                      to={`/order/${bike.slug}`}
                    >
                      Enquire Now
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                      >
                        <path d='M5 12h14M12 5l7 7-7 7'></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BikeRentSection;
