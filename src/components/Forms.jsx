import React from "react";

const Forms = ({ title, description, days, fees, whom }) => {
  return (
    <div className="mt-10 flex justify-evenly">
      <div className=" w-80 h-64 bg-white rounded-2xl shadow p-5">
        <p className="text-black text-xl font-bold ">{title}</p>
        <p className="text-base font-normal py-3">{description}</p>

        <div className="w-70 h-28 bg-zinc-100 rounded-lg p-3 flex justify-between items-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sky-600 text-base font-bold">Due Date</p>
            <p className="text-sm font-normal mt-3 leading-7">{days}</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-red-400 text-base font-bold ">Penalty Fees</p>
            <p className="text-sm font-bold mt-3">
              {fees} <span className="font-normal">{whom}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
