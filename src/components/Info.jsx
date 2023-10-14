import React from "react";
import Mag from "../assets/magnifying-glass.svg";
import connect from "../assets/connect.svg";
import research from "../assets/research.svg";
import hat from "../assets/hat.svg";
import chat from "../assets/Chatbubble.png";
import man from "../assets/guytext.png";
import chat2 from "../assets/chatbubble2.png";
import girl from "../assets/girtext.png";
import chat3 from "../assets/chat3.png";

const Info = () => {
  return (
    <div className="flex items-center justify-center lg:justify-center flex-col lg:flex-row">
      <div className="p-5 lg:p-20 w-full">
        <div className="">
          <h1 className="text-md lg:text-6xl font-bold">
            <span className="text-3xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-400 inline-block text-transparent bg-clip-text">
              {" "}
              All-in-One
            </span>{" "}
            platform <br />
            that Makes Easier
          </h1>
        </div>

        <div>
          <p className="w-[70%] text-black text-2xl font-normal leading-8 mt-5">
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals
          </p>
        </div>
        {/* third section */}
        <div className="flex flex-col justify-between">
          <div className="flex mt-8 items-center gap-2">
            <div className="flex items-center gap-5 w-full">
              <img src={Mag} alt="mag " className="w-10 h-10" />
              <p className="lg:w-[40%] text-black text-sm lg:text-base font-normal">
                <span className="text-black text-lg font-bold ">SEARCH</span>{" "}
                for vital company information{" "}
              </p>
            </div>
            <div className="flex items-center gap-5 w-full">
              <img src={connect} alt="mag " className="w-10 h-10" />
              <p className="lg:w-[40%] text-black text-sm lg:text-base font-normal">
                <span className="text-black text-lg font-bold ">Connect</span>{" "}
                the resources to meet your business needs
              </p>
            </div>
          </div>

          <div className="flex mt-8  items-center ">
            <div className="flex items-center gap-5 w-full">
              <img src={research} alt="mag " className="w-10 " />
              <p className="lg:w-[40%] text-black text-sm lg:text-base font-normal">
                <span className="text-black text-lg font-bold ">RESEARCH</span>{" "}
                and generate reports that drive growth{" "}
              </p>
            </div>
            <div className="flex items-center gap-5 w-full">
              <img src={hat} alt="mag " className="w-10 h-10" />
              <p className="lg:w-[40%] text-black text-sm lg:text-base font-normal">
                <span className="text-black text-lg font-bold ">ACADEMY</span>{" "}
                to give you the skills for success in your career
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}

      <div className=" flex gap-5 m-5 lg:m-20">
        <div>
          <img src={chat} alt="" className="mt-3" />
          <img src={chat} alt="" className="mt-3" />
          <img src={chat3} alt="" className="mt-3" />

          <div className="mt-10">
            <img src={chat2} alt="" className="mt-3" />
            <img src={chat2} alt="" className="mt-3" />
            <img src={girl} alt="" className="w-40" />
          </div>
        </div>
        <div>
          <img src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Info;
