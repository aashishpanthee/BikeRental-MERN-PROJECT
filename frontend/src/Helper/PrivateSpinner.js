import React, { useState, useEffect } from "react";
import { Space, Spin } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const PrivateSpinner = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 && navigate("/");
    return () => clearInterval(interval);
  }, [count, navigate]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "8px",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Space size='middle'>
        <Spin size='large' style={{ color: "black" }} />
      </Space>
      <h1 className='text-center text-lg font-extrabold'>
        Redirecting to you in {count} second !!!
      </h1>
    </div>
  );
};

export default PrivateSpinner;
