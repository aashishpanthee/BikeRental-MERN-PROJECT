import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  BikeAll,
  FilterBikes,
  // getBikeList,
  // getTotal,
} from "../redux/features/Bikes/bikeAction";
import { CategoryAll } from "../redux/features/Category/categoryAction";
import { addToCart } from "../redux/features/Cart/cartSlice";
import { Checkbox, Radio } from "antd";
import Layout from "./Layout";
import { Prices } from "../Helper/Prices";

const BikeRentSection = () => {
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => {
    dispatch(CategoryAll());
  }, []);
  useEffect(() => {
    if (!radio.length || !checked.length) {
      dispatch(BikeAll());
    }
  }, [!radio, !checked]);
  useEffect(() => {
    if (radio.length || checked.length)
      dispatch(FilterBikes({ radio, checked }));
  }, [checked, radio]);

  const { bikes } = useSelector((state) => state.bike);
  const { categories } = useSelector((state) => state.category);
  const base_url = "http://localhost:5000";
  const handleCart = (bike) => {
    dispatch(addToCart(bike));
  };
  const handleFilter = (values, id) => {
    let all = [...checked];
    if (values) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  // const clearFilter = () => {
  //   console.log("hello");
  //   setChecked([]);
  //   setRadio([]);
  //   navigate("/bikerentsection");
  // };

  return (
    <Layout title={"Bike rental made easy"}>
      <section className='flex h-full'>
        <div className='w-1/5 border-r-2 border-orange'>
          <div className='container px-5 mx-auto mt-3'>
            <h1 className='text-xl font-bold text-left'>Filter by Category</h1>
            <div className='flex flex-col gap-2 mt-2 ml-2 text-base font-semibold'>
              {categories?.map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
          </div>
          <div className='container px-5 mx-auto mt-3'>
            <h1 className='text-xl font-bold text-left'>Filter by Price</h1>
            <div className='flex flex-col gap-2 ml-2 text-base font-semibold'>
              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                {Prices?.map((p) => (
                  <div className='flex flex-col gap-2 mt-2 text-base font-semibold'>
                    <Radio value={p.array}>{p.name}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
          </div>

          <button
            onClick={() => window.location.reload()}
            className='rounded-md bg-black px-3.5 py-1.5  ml-10 text-sm font-semibold text-white shadow-sm hover:bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6'
          >
            Clear Filter
          </button>
        </div>
        <div className='w-4/5'>
          {" "}
          <div className='container px-5 mx-auto'>
            <div className='flex flex-wrap -m-4'>
              {bikes && bikes.length !== 0 ? (
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
                    <div className='flex justify-between w-full h-10 mt-3'>
                      <button
                        className='px-4 py-1 text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-black'
                        onClick={() => handleCart(bike)}
                      >
                        Add to cart
                      </button>
                      <Link
                        className='flex items-center px-4 py-1 text-white border-0 rounded bg-orange focus:outline-none hover:bg-black'
                        to={`/order/${bike.slug}`}
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <main className='grid w-full min-h-full px-6 py-24 place-items-center sm:py-32 lg:px-8'>
                  <div className='text-center'>
                    <h1 className='mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                      Bikes not available
                    </h1>
                    <p className='mt-6 text-base leading-7 text-gray-600'>
                      Sorry, we couldn’t find the bikes you’re looking for.
                    </p>
                    <div className='flex items-center justify-center mt-10 gap-x-6'>
                      <Link
                        className='rounded-md bg-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        to='/'
                      >
                        Go back home
                      </Link>
                    </div>
                  </div>
                </main>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BikeRentSection;
