/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useCallback } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Toggle from "./toggle";
import { useEffect } from "react";
import { useRef } from "react";
import { logout } from "../_store";
import { history } from "../_helpers/history";
export const Navbar = () => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  // const user = useSelector((state) => state?.userData?.user);

  const auth = useSelector((x) => x.auth?.auth);
  // console.log("auth", auth);
  const dispatch = useDispatch();

  //check auth is exist or not
  useEffect(() => {
    if (auth) setIsLoggedin(true);
    else setIsLoggedin(false);
  }, [auth]);

  const handleLogOut = useCallback(() => {
    window.location.reload();
    dispatch(logout());
  }, [dispatch]);

  const outsideClick = useCallback((e) => {
    if (!ref.current?.contains(e.target) && ref.current) setDropdown(false);
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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
          <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
        </svg>
      ),
    },
    {
      name: "Logout",
      path: "/",
      style: "block px-4 py-2 text-sm dark:text-lightgray dark:hover:text-white",
      method: handleLogOut,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
          <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
          <rect width="32" height="64" x="256" y="232"></rect>
        </svg>
      ),
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
          {auth ? (
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
                  <span className="block text-sm dark:text-white">{auth?.firstName}</span>
                  <span className="block text-sm truncate dark:text-lightgray">{auth?.email}</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  {dropdownMenu.map((item, index) => (
                    <li key={index} onClick={item.method !== undefined || item.method !== null ? item.method : null}>
                      <NavLink
                        to={item.path}
                        className={item.style + " flex items-center p-2 space-x-3 rounded-md"}
                      >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
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
