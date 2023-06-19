import React, { useEffect } from "react";
import WhyUs from "./WhyUs";
import Categories from "./Categories";
import Testimonial from "./Testimonial";
import Main from "./Main";
import Contact from "./Contact";
import Layout from "./Layout";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout className='bg-slate-50'>
      <Main />
      <Categories />
      <WhyUs />
      <Testimonial />
      <Contact />
    </Layout>
  );
};

export default Home;
