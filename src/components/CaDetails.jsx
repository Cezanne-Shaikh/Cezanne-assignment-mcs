import React from "react";
import { useParams } from "react-router-dom";
import { Ca_Data } from "../utils/data";
import star from "../assets/star-fill.svg";
import calender from "../assets/calender.svg";
import pagination from "../assets/pagination.svg";
import recc from "../assets/anti.png";

const CaDetails = () => {
  const { id } = useParams();
  const userData = Ca_Data?.filter((data) => data.id == id);

  return (
    <div className="lg:m-16 m-5  ">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* left side */}
        <div className=" lg:w-[40%]  p-5">
          <h1 className="text-4xl font-bold">{userData[0].name}</h1>
          <p className="mt-5 text-xl font-normal">{userData[0].intro}</p>
          <div className="flex items-center gap-2">
            <img src={star} alt="star" className="mt-5" />
            <p className="text-sky-600 text-xl font-bold mt-5">
              {userData[0].rating}{" "}
              <span className="text-black text-xl font-normal">
                {userData[0].reviewCount}
              </span>
            </p>
          </div>
          {/* first card */}
          <div className="shadow-lg rounded-xl p-5 mt-6 bg-white ">
            <div className="flex justify-between items-center">
              <p className="text-black text-xl font-semibold">
                Basic to complex tasks
              </p>
              <p className="text-2xl font-bold">{userData[0].price}</p>
            </div>
            <div className="flex gap-3 mt-5 ">
              <img src={calender} alt="calender" />
              <p>{userData[0].deliveryTime}</p>
            </div>
            <div className="flex  gap-28 mt-5">
              <button className="bg-blue-500 p-3 rounded-lg font-semibold">
                Request Proposal
              </button>
              <button className="bg-white text-blue-500 border border-blue-500 p-2 rounded-lg lg:font-semibold font-medium">
                Chat with me
              </button>
            </div>
          </div>
          {/* second card */}
          <div className="shadow-lg rounded-xl p-5 mt-6 bg-white">
            <p className="text-4xl font-bold">What people say?</p>
            <p className="text-xl font-normal mt-5">
              {userData[0].testimonial.text}
            </p>
            <p className="mt-2 text-base font-semibold">— {userData[0].testimonial.author}</p>
            <div className="mt-10 flex items-center justify-center">
              <img src={pagination} alt="pagination" />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="lg:w-[60%]  p-5">
          <div>
            <img
              src={userData[0].image}
              alt="image"
              className="w-[500px] rounded-xl"
            />
          </div>
          <p className="text-4xl font-bold mt-5">About {userData[0].name}</p>
          <div className="hidden lg:block">
          <div className=" flex flex-col lg:flex-row justify-between items-center mt-10 ">
            <div className="">
              <p className="text-neutral-400 text-base font-bold ">FROM</p>
              <p className="text-md font-normal mt-3">
                {userData[0].about.from}
              </p>
            </div>
            <div>
              <p className="text-neutral-400 text-base font-bold ">
                PARTNER SINCE
              </p>
              <p className="text-md font-normal mt-3">
                {userData[0].about.partnerSince}
              </p>
            </div>
            <div>
              <p className="text-neutral-400 text-base font-bold ">
                AVERAGE RESPONSE TIME
              </p>
              <p className="text-md font-normal mt-3">
                {userData[0].about.averageResponseTime}
              </p>
            </div>
          </div>
          </div>
          <p className="text-neutral-400 text-base font-bold mt-10">ABOUT</p>
          <p className="text-xl font-normal  leading-relaxed">
            {userData[0].about.description}
          </p>
          <div className="flex mt-10 justify-between">
            <div>
              <p className="text-neutral-400 text-base font-bold">
                SERVICES I OFFER
              </p>
              <ul className="">{userData[0]?.about?.services?.map((service)=>(
                <li>&bull; {service}</li>
              ))}</ul>
            </div>
            <div>
              <p className="text-neutral-400 text-base font-bold">WHY ME?</p>
              <ul className="">{userData[0]?.about?.benefits?.map((benefit)=>(
                <li>&bull; {benefit}</li>
              ))}</ul>
            </div>
          </div>
        </div>
      </div>
      {/* below section */}
      <div className="flex flex-col lg:flex-col gap-10 mt-10">
        <p className="text-black text-4xl font-bold">Recommended for you</p>

        <div className="flex flex-col lg:flex-row gap-5 justify-between">
          {/* 1 rec */}
          <div className=" shadow-lg rounded-xl p-2 mt-6 bg-white">
            <img src={recc} alt="rec" className="w-[360px]" />
            <div className="mt-5 flex justify-between">
              <p className="text-black text-xl font-bold">{userData[0].name}</p>
              <p className="text-xl font-bold">{userData[0].price}</p>
            </div>
            <p className=" text-base font-normal mt-3">I will do business evaluation and corporate services</p>
            <div className="flex items-center gap-2">
              <img src={star} alt="star" className="mt-5 w-[20px]" />
              <p className="text-sky-600 text-base font-bold mt-5">
                {userData[0].rating}{" "}
                <span className="text-black text-base font-normal">
                  {userData[0].reviewCount}
                </span>
              </p>
            </div>
            <div className="w-[100%] mt-5 flex items-center justify-center">
              <button className="bg-blue-500 p-4 rounded-lg">
                View Services
              </button>
            </div>
          </div>
          {/* 2 rec */}
          <div className="w-[full] shadow-lg rounded-xl p-2 mt-6 bg-white">
            <img src={recc} alt="rec" className="w-[360px]" />
            <div className="mt-5 flex justify-between">
              <p className="text-black text-xl font-bold">{Ca_Data[3].name}</p>
              <p className="text-xl font-bold">{Ca_Data[3].price}</p>
            </div>
            <p className="text-base font-normal mt-3">I will do business evaluation and corporate services</p>
            <div className="flex items-center gap-2">
              <img src={star} alt="star" className="mt-5 w-[20px]" />
              <p className="text-sky-600 text-base font-bold mt-5">
                {Ca_Data[3].rating}{" "}
                <span className="text-black text-base font-normal">
                  {Ca_Data[3].reviewCount}
                </span>
              </p>
            </div>
            <div className="w-[100%] mt-5 flex items-center justify-center">
              <button className="bg-blue-500 p-4 rounded-lg">
                View Services
              </button>
            </div>
          </div>
          {/* 3rec */}
          <div className="w-[full] shadow-lg rounded-xl p-2 mt-6 bg-white">
            <img src={recc} alt="rec" className="w-[360px]" />
            <div className="mt-5 flex justify-between">
              <p className="text-black text-xl font-bold">{Ca_Data[7].name}</p>
              <p className="text-xl font-bold">{Ca_Data[7].price}</p>
            </div>
            <p className="text-base font-normal mt-3">I will do business evaluation and corporate services</p>
            <div className="flex items-center gap-2">
              <img src={star} alt="star" className="mt-5 w-[20px]" />
              <p className="text-sky-600 text-base font-bold mt-5">
                {Ca_Data[7].rating}{" "}
                <span className="text-black text-base font-normal">
                  {Ca_Data[7].reviewCount}
                </span>
              </p>
            </div>
            <div className="w-[100%] mt-5 flex items-center justify-center">
              <button className="bg-blue-500 p-4 rounded-lg">
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaDetails;
