import React from "react";
import Toggle from "./toggle";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-blue text-lightgray dark:bg-blue dark:text-lightgray select-none">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
        <Link href="/" className="flex items-center ">
          <img src="/img/logo-line.png" className="h-10 mr-3 bg-lightgray hover:bg-white" alt="Editme.online Logo" />
          <span className="self-center text-2xl  whitespace-nowrap text-lightgray hover:text-white"><span className="font-extrabold font-montserrat">Edit</span>me</span>
        </Link>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <Link to="/edit" className="hover:text-white">
                Editor
              </Link>
            </li>
            <li>
              <Link to="/getintouch" className="hover:text-white">
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8 items-center">
          <li>© Editme.Online. 2023. From school projekt to live!</li>
          <li>
            <Toggle />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
