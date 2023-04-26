import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [checkPassword, setCheckPassword] = useState(false);

  
  return (
    <section className="flex align-center justify-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-black dark:text-lightgray border-2">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm text-black dark:text-white">Sign up for a free account!</p>
        </div>
        <form className="space-y-12 ">
          <div className="space-y-4">
            <div className="flex flex-row">
              <div>
                <label for="name" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John"
                  className="w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack"
                />
              </div>
              <div>
                <label for="surname" className="block mb-2 text-sm">
                  Surname
                </label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  placeholder="Doe"
                  className="w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack"
                />
              </div>
            </div>

            <div>
              <label for="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="info@editme.online"
                className="w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack"
              />
            </div>
            <div className="flex flex-row">
              <div>
                <div className="flex justify-between mb-2">
                  <label for="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="repassword"
                  placeholder="*****"
                  className="w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label for="password" className="text-sm">
                    Re-Password
                  </label>
                </div>
                <input
                  type="password"
                  name="repassword"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack"
                />
              </div>
            </div>
            <div className="flex flex-row">
              {" "}
              <span className="block text-sm">Generate Password ?</span>
              <label for="checkbox" className="mx-5 inline-flex items-center text-sm cursor-pointer">
                <span className="mx-2">No</span>
                <span className="relative">
                  <input id="checkbox" type="checkbox" className="hidden peer" />
                  <div className="w-10 h-4 rounded-full shadow peer-checked:bg-coral peer-checked:dark:bg-coral bg-lightblack"></div>
                  <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-coral bg-coral"></div>
                </span>
                <span className="ml-2">Yes</span>
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-coral dark:bg-coral">
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center">
              Already Registered?{" "}
              <Link to="/login" className="hover:underline font-bold text-coral dark:text-coral">
                {" "}
                Sign in here
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
