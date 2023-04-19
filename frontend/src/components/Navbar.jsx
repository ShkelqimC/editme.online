import React from 'react'
import { Link } from 'react-router-dom'
// import "../index.css"

export const Navbar = () => {
  return (
    <div className="container flex justify-between px-20 h-20 items-center shadow-md bg-[--background]" >
        <div className="navbarLeftSide flex flex-row items-center">
          
            <h1 className='text-3xl pr-20'>Logo</h1>
            <Link to="/" className='px-20 text-[--lightBlue] font-semibold text-lg'>Features</Link>
            <Link to="/" className='text-[--lightBlue] font-semibold text-lg'>Get in Touch</Link>
        </div>
        <div className="navbarRightSide">
            <button className='loginBtn bg-white text-[--lightBlue] hover:bg-gray-300 py-2 px-6 rounded mx-5 border border-solid border-[--lightBlue]'>Log in</button>
            <button className='registerBtn bg-[--lightBlue] hover:bg-[--darkBlue]  py-2 px-6 rounded focus:outline-none focus:ring text-white'>Register</button>
        </div>


    </div>
   
  )
}
