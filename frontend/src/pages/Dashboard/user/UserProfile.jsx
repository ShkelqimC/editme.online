import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch,useSelector } from "react-redux";

// TODO: edit user action store
import { userActions } from "../../../_store";
import ToastMessage  from "../../../components/Alert";
const UserInfo = () => {
  const auth = useSelector((x) => x.auth?.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
      // form validation rules
      const validationSchema = Yup.object().shape({
        email: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
        repassword: Yup.string()
          .required("Confirm Password is required")
          .oneOf([Yup.ref("password"), null], "Passwords must match"),
      });
      const formOptions = { resolver: yupResolver(validationSchema) };
    
      // get functions to build form with useForm() hook
      const { register, handleSubmit, formState } = useForm(formOptions);
      const { errors, isSubmitting } = formState;
    
      async function onSubmit(data) {
        try {
          await dispatch(userActions.register(data)).unwrap();
    
          // redirect to login page and display success alert
          navigate("/login");
          dispatch(ToastMessage("success","Registration successful", ));
        } catch (error) {
          dispatch(ToastMessage("error",error));
        }
      }

  return (
    <section className="flex align-center justify-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-black dark:text-lightgray border-2">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm text-black dark:text-white">Sign up htmlFor a free account!</p>
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
                <div className="invalid-feedback">{errors.firstName?.message}</div>
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
                required
                placeholder="info@editme.online"
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                } w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
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
                  required
                  placeholder="*****"
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  } w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack`}
                />
                <div className="invalid-feedback">{errors.password?.message}</div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="repassword" className="text-sm">
                    Re-Password
                  </label>
                </div>
                <input
                  {...register("repassword")}
                  type="password"
                  name="repassword"
                  id="repassword"
                  required
                  placeholder="*****"
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  } w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack`}
                />
                <div className="invalid-feedback">{errors.repassword?.message}</div>
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
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                // disabled={isSubmitting}
                className="w-full px-8 py-3 font-semibold rounded-md bg-coral dark:bg-coral"
              >
                {/* {isSubmitting && (
                  <button type="button" className="bg-indigo-500 ..." disabled>
                    <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
                    Submitting...
                  </button>
                )} */}
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
};

export default UserInfo;
