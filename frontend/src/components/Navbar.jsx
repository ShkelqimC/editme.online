import React from "react";
import { Link, NavLink } from "react-router-dom";
import Toggle from "./toggle";

export const Navbar = () => {
  const navItems = [
    {
      name: "",
      path: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-coral"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    { name: "Editor", path: "/edit", icon: "" },
    { name: "Get In Touch", path: "/getintouch", icon: "" },
  ];
  const navItems2 = [
    {
      name: "Sign In",
      path: "/signin",
      style:
        "text-blue py-2 px-6 rounded mx-5 border border-solid border-lightblue text-lightgray hover:text-white",
    },
    {
      name: "Register",
      path: "/register",
      style:
        "py-2 px-6 rounded  text-lightgray hover:text-white",
    },
  ];
  return (
    <nav className="bg-blue w-screen flex justify-between h-20 items-center shadow-md px-16 select-none">
      <div className="navbarLeftSide flex flex-row items-center">
        {/* <Link to="/" className="">
          Logo
        </Link>
        <Link to="/edit" className="px-20 text-editMe-onPrimary  hover:text-editMe-onSecondary font-semibold text-lg">
          Editor
        </Link>
        <Link to="/getintouch" className="text-editMe-onPrimary font-semibold text-lg hover:text-editMe-onSecondary">
          Get in Touch
        </Link> */}
        {navItems.map((item, index) => (
          <NavLink to={item.path} className={({ isActive }) => (isActive ? "active-state " : "inactive-state")} key={index}>
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="navbarRightSide flex items-center">
        {/* <Link
          to="/signin"
          className="loginBtn bg-editMe-onPrimary text-editMe-primary hover:bg-gray-300 py-2 px-6 rounded mx-5 border border-solid border-editMe-secondary hover:bg-editMe-onSecondary"
        >
          Log in
        </Link>
        <Link
          to="/register"
          className="registerBtn bg-editMe-onBackground hover:bg-editMe-secondary  py-2 px-6 rounded focus:outline-none focus:ring text-white"
        >
          Register
        </Link> */}
        <Toggle />
        {navItems2.map((item, index) => (
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? "active-state " : "inactive-state") + item.style}
            key={index}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
