import React from 'react'
import { Link } from 'react-router-dom'
// import "../index.css"

export const Navbar = () => {
  return (
    <div className="container flex justify-between px-20 h-20 items-center shadow-md bg-white" >
        <div className="navbarLeftSide flex flex-row items-center">
          
            <h1 className='text-3xl pr-20'>Logo</h1>
            <Link to="/" className='px-20 text-blue-500 font-semibold text-lg'>Features</Link>
            <Link to="/" className='text-blue-500 font-semibold text-lg'>Get in Touch</Link>
        </div>
        <div className="navbarRightSide">
            <button className='loginBtn bg-white text-blue-500 py-2 px-6 rounded mx-5 border border-solid border-blue-500'>Log in</button>
            <button className='registerBtn bg-blue-500 hover:bg-blue-700  py-2 px-6 rounded focus:outline-none focus:ring text-white'>Register</button>
        </div>


    </div>
   
  )
}
