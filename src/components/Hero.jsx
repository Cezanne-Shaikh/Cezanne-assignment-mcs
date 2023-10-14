import React from "react";
import Pic1 from "../assets/Picture1.png";
import Pic2 from "../assets/Picture2.png";
import Pic3 from "../assets/Picture3.png";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row">
      {/* left side */}
      <div className="px-5 lg:px-20 mt-28 lg:max-w-[50%] ">
        <h1 className="text-black text-3xl lg:text-6xl font-bold leading-tight ">
          Find{" "}
          <span className="text-sky-600 text-3xl lg:text-6xl font-bold leading-10">
            Partners
          </span>
          (CAs) <br />
          available online
        </h1>

        <p className="w-[80%] text-zinc-600 text-md lg:text-xl font-normal leading-normal mt-8">
          <span className="text-zinc-600 text-md lg:text-xl font-bold  leading-snug">
            CONNECT
          </span>{" "}
          with us where your services are listed and visible to a myriad of
          businesses seeking CA's for compliance support
        </p>

        {/* Search bar */}
        <SearchBar />
      </div>

      {/* Right Side  */}
      <div className="flex gap-5 mt-5 lg:mt-32 p-5">
        <img
          src={Pic1}
          alt="pic1"
          className="hover:translate-y-20 transition-all ease-out duration-700 w-[100px] lg:w-[200px]"
        />
        <img
          src={Pic2}
          alt="pic2"
          className="hover:-translate-y-24  transition-all ease-out duration-700 w-[100px] lg:w-[200px]"
        />
        <img
          src={Pic3}
          alt="pic3"
          className="hover:translate-y-28  transition-all ease-out duration-700 w-[100px] lg:w-[200px]"
        />
      </div>
    </div>
  );
};

export default Hero;
