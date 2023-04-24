import React from "react";
import { Link } from "react-router-dom";
// import "../index.css"

export const Navbar = () => {
  return (
    <div className="w-screen flex justify-between h-20 items-center shadow-md bg-[--primary] px-16" >
        <div className="navbarLeftSide flex flex-row items-center">          
            <Link to="/" className='text-3xl pr-20  text-[--onPrimary]'>Logo</Link>
            <Link to="/edit" className='px-20 text-[--onPrimary]  hover:text-[--onSecondary] font-semibold text-lg'>Editor</Link>
            <Link to="/getintouch" className='text-[--onPrimary] font-semibold text-lg hover:text-[--onSecondary]'>Get in Touch</Link>
        </div>
        <div className="navbarRightSide">
            <Link to="/signin" className='loginBtn bg-[--onPrimary] text-[--primary] hover:bg-gray-300 py-2 px-6 rounded mx-5 border border-solid border-[--secondary] hover:bg-[--onSecondary]'>Log in</Link>
            <Link to="/register" className='registerBtn bg-[--onBackground] hover:bg-[--secondary]  py-2 px-6 rounded focus:outline-none focus:ring text-white'>Register</Link>
        </div>


    </div>
  );
};
