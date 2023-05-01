import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { registerUser } from "../../_store";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().uppercase(),
    lastName: Yup.string().uppercase(),
    email: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms & Conditions is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = ({ firstName, lastName, email, password, confirmPassword, acceptTerms }) => {
    dispatch(registerUser({ firstName, lastName, email, password, confirmPassword, acceptTerms }));
    navigate("/verify-email-token");
  };

  return (
    <section className="flex align-center justify-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-black dark:text-lightgray border-2">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm text-black dark:text-white">Sign up for a free account!</p>
        </div>
        <form className="space-y-12 " onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="flex flex-row">
              <div>
                <label htmlFor="firstName" className="block mb-2 text-sm">
                  First Name
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  name="firstName"
                  id="name"
                  placeholder="John"
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  } w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack`}
                />
                <div className="text-red-400">{errors.firstName?.message}</div>
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2 text-sm">
                  Last Name
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  name="lastName"
                  id="surname"
                  placeholder="Doe"
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  } w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
                placeholder="info@editme.online"
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                } w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack`}
              />
              <div className="text-red-400">{errors.email?.message}</div>
            </div>
            <div className="flex flex-row">
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  } w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack`}
                />
                <div className="text-red-400">{errors.password?.message}</div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="confirmPassword" className="text-sm">
                    Re-Password
                  </label>
                </div>
                <input
                  {...register("confirmPassword")}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="*****"
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  } w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack`}
                />
                <div className="text-red-400">{errors.confirmPassword?.message}</div>
              </div>
            </div>
            <div className="flex flex-row">
              {" "}
              <span className="block text-sm">Generate Password ?</span>
              <label htmlFor="checkbox" className="mx-5 inline-flex items-center text-sm cursor-pointer">
                <span className="mx-2">No</span>
                <span className="relative">
                  <input id="checkbox" type="checkbox" className="hidden peer" />
                  <div className="w-10 h-4 rounded-full shadow peer-checked:bg-coral peer-checked:dark:bg-coral bg-lightblack"></div>
                  <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-coral bg-coral"></div>
                </span>
                <span className="ml-2">Yes</span>
              </label>
            </div>
            <div>
              <div className="flex items-center">
                <input
                  {...register("acceptTerms")}
                  name="acceptTerms"
                  type="checkbox"
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  } w-4 h-4 text-blue-600 bg-gray border-black rounded focus:ring-coral focus:ring-2 `}
                />
                <label htmlFor="acceptTerms" className="ml-2 text-sm font-medium ">
                  I agree with the{" "}
                  <Link to="/" className="hover:underline">
                    terms and conditions
                  </Link>
                  .
                </label>
              </div>
              <div className="text-red-400">{errors.acceptTerms?.message}</div>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="submit" className="w-full py-3 font-semibold rounded-md bg-coral hover:text-white hover:shadow-lg dark:bg-coral">
                Sign up
              </button>
            </div>
            <p className="px-6 text-sm text-center">
              Already Registered?{" "}
              <Link to="/signin" className="hover:underline font-bold text-coral dark:text-coral">
                {" "}
                Sign in here
              </Link>
              .
            </p>
            <p className="px-6 text-xs text-center mt-5 font-extrabold">
              You registered but forgot token?
              <Link to="/resend-verify-token" className="hover:underline font-bold text-coral dark:text-coral">
                {" "}
                Resend Verify Token
              </Link>
              !
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
