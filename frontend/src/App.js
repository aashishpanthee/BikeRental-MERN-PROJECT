import { FloatButton } from "antd";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import App1 from "./components/App1";
import Loading from "./components/Loading";
import Dashboard from "./dashboard/Dashboard";
import Private from "./Helper/Private";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='bg-slate-50'>
          <Routes>
            <Route path='/*' element={<App1 />} />
            <Route
              path='/dashboard/*'
              element={
                <Private>
                  <Dashboard />
                </Private>
              }
            ></Route>
          </Routes>
          <FloatButton.BackTop type='primary' visibilityHeight={50} />
        </div>
      )}
    </>
  );
}

export default App;
