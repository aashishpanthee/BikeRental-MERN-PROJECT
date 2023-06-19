import React, { useEffect } from "react";
import CardStats from "./CardStats";
import { useDispatch, useSelector } from "react-redux";
import { BikeAll } from "../../redux/features/Bikes/bikeAction";
import { userAll } from "../../redux/features/User/authAction";
const Headerstats = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(BikeAll());
  }, []);
  useEffect(() => {
    dispatch(userAll());
  }, []);
  const { bikes } = useSelector((state) => state.bike);
  const { users } = useSelector((state) => state.auth);
  let totalbikes = bikes ? bikes.length : `No bikes available`;
  let totalUsers = users ? users.length : `No users currently`;

  return (
    <>
      {/* Header */}
      <div className='relative pt-12 pb-32 bg-orange md:pt-32'>
        <div className='w-full px-4 mx-auto md:px-10'>
          <div>
            {/* Card stats */}
            <div className='flex flex-wrap'>
              <div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
                <CardStats
                  statSubtitle='Users'
                  statTitle={totalUsers}
                  statArrow='up'
                  statPercent='3.48'
                  statPercentColor='text-emerald-500'
                  statDescripiron='Since last month'
                  statIconName='far fa-chart-bar'
                  statIconColor='bg-red-500'
                />
              </div>
              <div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
                <CardStats
                  statSubtitle='Total Bikes'
                  statTitle={totalbikes}
                  statArrow='down'
                  statPercent='3.48'
                  statPercentColor='text-red-500'
                  statDescripiron='Since last week'
                  statIconName='fas fa-chart-pie'
                  statIconColor='bg-cyan-900'
                />
              </div>
              <div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
                <CardStats
                  statSubtitle='Available Bikes'
                  statTitle='20'
                  statArrow='down'
                  statPercent='1.10'
                  statPercentColor='text-orange-500'
                  statDescripiron='Since yesterday'
                  statIconName='fas fa-users'
                  statIconColor='bg-pink-500'
                />
              </div>
              <div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
                <CardStats
                  statSubtitle='Rented Bikes'
                  statTitle='3'
                  statArrow='up'
                  statPercent='12'
                  statPercentColor='text-emerald-500'
                  statDescripiron='Since last month'
                  statIconName='fas fa-percent'
                  statIconColor='bg-teal-400'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headerstats;
