import React from "react";

export default function CardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
}) {
  return (
    <>
      <div className='relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg xl:mb-0'>
        <div className='flex-auto p-4'>
          <div className='flex flex-wrap'>
            <div className='relative flex-1 flex-grow w-full max-w-full pr-4'>
              <h5 className='text-xs font-bold uppercase text-blueGray-400'>
                {statSubtitle}
              </h5>
              <span className='text-xl font-semibold text-blueGray-700'>
                {statTitle}
              </span>
            </div>
            <div className='relative flex-initial w-auto pl-4'>
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <i className={statIconName}></i>
              </div>
            </div>
          </div>
          <p className='mt-4 text-sm text-blueGray-400'>
            <span className={statPercentColor + " mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              {statPercent}%
            </span>
            <span className='whitespace-nowrap'>{statDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
}
