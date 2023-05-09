import React, { useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// TODO: edit user action store
import { userActions } from "../../../_store";
import ToastMessage from "../../../components/Alert";
const UserInfo = () => {
  const auth = useSelector((x) => x.auth?.auth);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const validationSchema = Yup.object().shape({
    firstName: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string(),
    password: Yup.string(),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const [user, setUser] = useState({
    firstName: auth?.firstName,
    lastName: auth?.lastName,
    role: auth?.role || "User",
    email: auth?.email,
    password: validationSchema.password || "",
    confirmPassword: validationSchema.confirmPassword || "",
  });
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  function onSubmit() {
    try {
      dispatch(userActions.update({ id: auth?.id, data: user }));
      dispatch(ToastMessage("success", "Updated successfully"));
    } catch (error) {
      dispatch(ToastMessage("error", error));
    }
  }

  return (
    <section className="flex align-center justify-center">
      <div className="flex flex-col dark:bg-black dark:text-lightgray">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Profile</h1>
          <p className="text-sm text-black dark:text-white">Edit your account</p>
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
                  value={user?.firstName}
                  onChange={(e) => onInputChange(e)}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  } w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack`}
                />
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
                  value={user?.lastName}
                  onChange={(e) => onInputChange(e)}
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
                disabled={true}
                value={auth?.email}
                placeholder="info@editme.online"
                onChange={(e) => onInputChange(e)}
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
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="*****"
                  onChange={(e) => onInputChange(e)}
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
                  {...register("confirmPassword")}
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="*****"
                  onChange={(e) => onInputChange(e)}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  } w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack`}
                />
                <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
              </div>
            </div>
            <div className="flex flex-row">
              {" "}
              <span className="block text-sm">Show Password ?</span>
              <label htmlFor="checkbox" className="mx-5 inline-flex items-center text-sm cursor-pointer">
                <span className="mx-2">No</span>
                <span className="relative">
                  <input id="checkbox" type="checkbox" className="hidden peer" />
                  <div
                    className="w-10 h-4 rounded-full shadow peer-checked:bg-coral peer-checked:dark:bg-coral bg-lightblack"
                    onClick={() => setShowPassword(!showPassword)}
                  ></div>
                  <div
                    className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-coral bg-coral"
                    onClick={() => setShowPassword(!showPassword)}
                  ></div>
                </span>
                <span className="ml-2">Yes</span>
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-coral dark:bg-coral hover:text-white">
                Update Profile
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserInfo;
