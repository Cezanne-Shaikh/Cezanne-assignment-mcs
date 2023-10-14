import React from "react";
import logo from "../assets/wlogo.png";
import whatsapp from "../assets/whatsapp logo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-sky-600 to-purple-400 p-5 ">
      <div className="flex items-center justify-evenly flex-col lg:flex-row">
        <div className="p-10">
          <img src={logo} alt="logo" />
          <p className="leading-relaxed w-[60%] text-white text-sm font-normal mt-8 opacity-80">
            India's first platform dedicated to simplifying partner search
          </p>
        </div>

        <div className="text-white cursor-pointer">
          <p className="text-sm font-bold capitalize hover:scale-110 transition-all">
            Comapny
          </p>
          <p className="text-base font-norma mt-3 hover:opacity-50">About</p>
          <p className="text-base font-norma mt-3 hover:opacity-50">Pricing</p>
          <p className="text-base font-norma mt-3 hover:opacity-50">Careers</p>
        </div>
        <div className="text-white mt-9">
          <p className="text-sm font-bold capitalize hover:scale-110 transition-all">
            Solutions
          </p>
          <p className="text-base font-norma mt-3 hover:opacity-50">Search</p>
          <p className="text-base font-norma mt-3 hover:opacity-50">Connect</p>
          <p className="text-base font-norma mt-3 hover:opacity-50">Research</p>
          <p className="text-base font-norma mt-3 hover:opacity-50">Academy</p>
        </div>
        <div className="text-white flex flex-col justify-center mb-8">
          <p className="text-sm font-bold capitalize hover:scale-110 transition-all">
            Resources
          </p>
          <p className="text-base font-norma mt-3 hover:opacity-50">Blogs</p>
          <p className="text-base font-norma mt-3 hover:opacity-50">Forms</p>
        </div>
        <div className="text-white mb-8">
          <p className="text-sm font-bold capitalize hover:scale-110 transition-all">
            Support
          </p>
          <p className="text-base font-norma mt-3 hover:opacity-50">Help</p>
          <p className="text-base font-norma mt-3 hover:opacity-50">
            Contact us
          </p>
        </div>
        <div className="text-white">
          <p className="text-sm font-bold capitalize hover:scale-110 transition-all">
            Legal
          </p>
          <p className="text-base font-norma mt-3 hover:opacity-50">Privacy</p>
          <p className="text-base font-norma mt-3 hover:opacity-50">Terms</p>
          <p className="text-base font-norma mt-3 hover:opacity-50">
            Accessibility
          </p>
        </div>
      </div>

      <div className="border border-white w-full mt-8 opacity-40" />

      <div className="flex justify-between items-center mt-10 p-5">
        <div>
          <p className="text-white text-sm font-normal opacity-75">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra{" "}
          </p>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <img
            src={facebook}
            alt="facebook"
            className="hover:scale-125 opacity-60 hover:opacity-95 transition-all"
          />
          <img
            src={instagram}
            alt="instagram"
            className="hover:scale-125 opacity-60 hover:opacity-95 transition-all"
          />
          <img
            src={whatsapp}
            alt="whatsapp"
            className="hover:scale-125 opacity-60 hover:opacity-95 transition-all"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
