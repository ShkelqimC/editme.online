import React from "react";
import Toggle from "./toggle";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="px-4 py-8 mt-10 bg-blue text-lightgray dark:bg-blue dark:text-lightgray ">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-coral">
            Logo
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/edit">
                Editor
              </Link>
            </li>
            <li>
              <Link to="/getintouch">
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
