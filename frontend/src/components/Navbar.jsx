/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState ,useCallback} from "react";
import { NavLink } from "react-router-dom";
import Toggle from "./toggle";
import { useEffect } from "react";
import { useRef } from "react";
export const Navbar = () => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const outsideClick = useCallback((e) => {
    if (!ref.current?.contains(e.target) && ref.current)  setDropdown(false);
  }, []);

  useEffect(() => {
    document.addEventListener("click", outsideClick);
    return () => {
      document.removeEventListener("click", outsideClick);
    };
  }, [outsideClick]);

  const navItems = [
    { name: "Editor", path: "/edit", style: "block py-2 pl-3 pr-4 md:p-0 hover:text-white" },
    { name: "Get In Touch", path: "/getintouch", style: "block py-2 pl-3 pr-4 md:p-0 hover:text-white" },
  ];
  const navItems2 = [
    {
      name: "Login",
      path: "/signin",
      style: "border border-2 hover:border-white focus:outline-none rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0",
    },
    {
      name: "Register",
      path: "/register",
      style: "hover:text-white px-4 py-2 text-center mr-3 md:mr-0 text-sm",
    },
  ];
  const dropdownMenu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      style: "block px-4 py-2 text-sm dark:text-lightgray dark:hover:text-white",
    },

    {
      name: "Settings",
      path: "/settings",
      style: "block px-4 py-2 text-sm dark:text-lightgray dark:hover:text-white",
    },
    {
      name: "Logout",
      path: "/logout",
      style: "block px-4 py-2 text-sm dark:text-lightgray dark:hover:text-white",
    },
  ];
  return (
    <nav className="bg-blue text-lightgray select-none">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src="/img/logo-line.png" className="h-10 mr-3 bg-lightgray hover:bg-white" alt="Editme.online Logo" />
          <span className="self-center text-2xl  whitespace-nowrap text-lightgray hover:text-white">
            <span className="font-extrabold font-montserrat">Edit</span>me
          </span>
        </a>
        <div className="flex md:order-2 items-center">
          <Toggle />
          {isLoggedin ? (
            <>
              <button
                type="button"
                className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4"
                onClick={() => setDropdown(!dropdown)}
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
                ref={ref}
              >
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="https://source.unsplash.com/40x40/?portrait?1" alt="user photo" />
              </button>
              <div
                className={`absolute top-14 right-4 mt-2 z-50 my-4 text-lightblack list-none bg-white border-2 divide-y divide-lightblack rounded-lg shadow dark:bg-black dark:divide-lightgray ${
                  dropdown ? "block" : "hidden"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm dark:text-white">Bonnie Green</span>
                  <span className="block text-sm truncate dark:text-lightgray">name@flowbite.com</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  {dropdownMenu.map((item, index) => (
                    <li key={index}>
                      <NavLink to={item.path} className={item.style}>
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            navItems2.map((item, index) => (
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active-state " : "inactive-state") + item.style}
                key={index}
              >
                {item.name}
              </NavLink>
            ))
          )}

          <button
            type="button"
            className="inline-flex items-center p-2 text-sm rounded-lg md:hidden hover:text-white "
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isOpen === true ? "hidden" : ""} w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? "active-state " : "inactive-state") + item.style}
                  aria-current="page"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
