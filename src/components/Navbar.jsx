import React from "react";
import logo from '../assets/logo.png';
import arrow from "../assets/downarrow.svg"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div  className="flex justify-between">
        <div className="flex gap-5 px-8 lg:px-16 lg:p-5 p-2 items-center justify-center">
         <Link to={'/'} ><img src={logo} alt="logo"   className="cursor-pointer " /></Link>
            
            <div className="hidden lg:block">
               <div className="flex gap-5 px-16 p-5 items-center justify-center " >
            <p className="flex items-center justify-center text-black text-lg font-bold gap-1 hover:scale-110 transition-all duration-300 cursor-pointer">Solutions <img src={arrow} alt="arrow" /></p>
            <p className="flex items-center justify-center text-black text-lg font-bold gap-1 hover:scale-110 transition-all duration-300 cursor-pointer">Features <img src={arrow} alt="arrow" /></p>
            <p className="flex items-center justify-center text-black text-lg font-bold gap-1 hover:scale-110 transition-all duration-300 cursor-pointer">Blogs <img src={arrow} alt="arrow" /></p>
            <p className="flex items-center justify-center text-black text-lg font-bold gap-1 hover:scale-110 transition-all duration-300 cursor-pointer">About <img src={arrow} alt="arrow" /></p>
            </div>
            </div>
           
        </div>
        <div className="flex gap-5 px-2 lg:px-16 p-5 items-center justify-center">
        <Button variant="outlined">Login</Button>
        <Button variant="contained">Register</Button>
        </div>
    </div>
  )
};

export default Navbar;
