import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { verifyEmail } from "../../_store";

const VerifyEmailToken = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // form validation rules
  const validationSchema = Yup.object().shape({
    token: Yup.string().min(10).required("Token is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  // const onError = (errors, e) => console.log(errors, e);
  const onSubmit = ({ token }) => {
    dispatch(verifyEmail({ token }));
    setTimeout(() => {
      navigate("/signin");
    }, 2000);
  };

  return (
    <section className="flex align-center justify-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-black dark:text-lightgray border-2">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Validate Account</h1>
          <p className="text-sm text-black dark:text-white">Validate your account with token from email</p>
        </div>
        <form className="space-y-12 " onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Token
              </label>
              <input
                type="text"
                placeholder="Enter your token here!"
                className={`form-control ${
                  errors.email ? "is-invalid" : ""
                } w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack`}
                {...register("token")}
              />
              <div className="text-red-400">{errors.token?.message}</div>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-coral dark:bg-coral">
                Validate
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default VerifyEmailToken;
