import "./register.css";
export default function Register() {
  return (
    <div className="registerContainer">
      <div className="registerHero text-center">
        <h1 className="text-3xl">Ready to take a free trial?</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
          impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, veritatis!
        </p>
      </div>
      <div className="registerDiv">
        <h1 className="registerHeader text-2xl text-center">
          Sign up for a free acount
        </h1>
        <form className="registerForm">
          <input
            className="firstName border-solid border-2 border-black rounded"
            type="text"
            name="firstName"
            placeholder="   First name"
            required
          />
          <input
            className="lastName border-solid border-2 border-black rounded"
            type="text"
            name="lastName"
            placeholder="   Last name"
            required
          />
          <input
            className="emailAddress border-solid border-2 border-black rounded"
            type="text"
            name="emailAddress"
            placeholder="   Email address"
            required
          />
          <input
            className="password border-solid border-2 border-black rounded"
            type="text"
            name="password"
            placeholder="   Create password"
            required
          />
          <button className="registerBtn bg-[--lightBlue] hover:bg-[--darkBlue]  py-2 px-6 rounded focus:outline-none focus:ring text-white w-28">
            Register
          </button>
          <div className="alreadyRegistered">
            <p>
              Already Registered?{" "}
              <span className="text-blue-700">Sign in here</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
