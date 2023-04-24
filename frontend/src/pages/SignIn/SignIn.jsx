import { Link } from "react-router-dom";
import "./signin.css";
export default function SignIn() {
  return (
    <div className="signinContainer">
      <form>
        <div className="inputContainer flex flex-col gap-8">
          <h1 className="signinHeader text-center text-xl font-bold ">
            Sign in to your account
          </h1>
          <input
            className="border-solid border-2 border-black rounded-md"
            type="text"
            name="userName"
            placeholder="   Email address"
            required
          />
          <input
            className="passwordInput border-solid border-2 border-black rounded-md"
            type="text"
            name="password"
            placeholder="   Password"
            required
          />
          <div className="buttons flex justify-between">
            <button className=" bg-[--lightBlue] hover:bg-[--darkBlue]  py-2 px-6 rounded focus:outline-none focus:ring text-white">
              Login
            </button>
            <Link to="/register">
              <p>Create Account</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
