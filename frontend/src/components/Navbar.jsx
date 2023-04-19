import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"

export const Navbar = () => {
  return (
    <div className="container">
        <div className="navbarLeftSide">
            <h1>Logo</h1>
            <Link to="/">Features</Link>
            <Link to="/">Get in Touch</Link>
        </div>
        <div className="navbarRightSide">
            <button className='loginBtn'>Log in</button>
            <button className='registerBtn'>register</button>
        </div>


    </div>
   
  )
}
