import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { login } from "../../_store";

export default function SignIn() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  // const onError = (errors, e) => console.log(errors, e);
  const onSubmit = ({ email, password }) => {
    debugger
    dispatch(login({ email, password }));
    navigate("/dashboard");
  };

  return (
    <section className="flex align-center justify-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-black dark:text-lightgray border-2">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-black dark:text-white">Sign in to access your account</p>
        </div>
        <form className="space-y-12 " onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                placeholder="info@editme.online"
                className={`form-control ${
                  errors.email ? "is-invalid" : ""
                } w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack`}
                {...register("email")}
              />
              <div className="text-red-400">{errors.email?.message}</div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link to="/forgot-password" className="text-xs hover:underline hover:text-coral dark:text-gray-400">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                placeholder="*****"
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                } w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack`}
                {...register("password")}
              />
              <div className="text-red-400">{errors.password?.message}</div>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full py-3 font-semibold rounded-md bg-coral hover:text-white hover:shadow-lg dark:bg-coral"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center">
              Don't have an account yet?
              <Link to="/register" className="hover:underline font-bold text-coral dark:text-coral">
                {" "}
                Sign up
              </Link>
              .
            </p>
            <p className="px-6 text-xs text-center mt-5 font-extrabold">
              You have token but not verified yet?
              <Link to="/verify-email-token" className="hover:underline font-bold text-coral dark:text-coral">
                {" "}
                Verify now
              </Link>
              !
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
