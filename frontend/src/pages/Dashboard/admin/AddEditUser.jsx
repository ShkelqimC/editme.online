import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

// TODO: register/edit user action store
// TODO: find user if edit user(check history path) if not create new user
import { registerUser } from "../../../_store";

const AddEditUser = () => {
  const auth = useSelector((x) => x.auth?.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  console.log("navigate(-1)", navigate(-1));
  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().uppercase(),
    lastName: Yup.string().uppercase(),
    email: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    repassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    role: Yup.array(),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = ({ firstName, lastName, email, password, repassword, role }) => {
    // TODO change register with user/register
    dispatch(registerUser({ firstName, lastName, email, password, repassword, role }));
    // TODO: tostify success
  };
  return (
    <section className="flex justify-center">
      <div className="flex flex-col max-w-md  dark:bg-black dark:text-lightgray">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Create New User</h1>
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
                placeholder="info@editme.online"
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                } w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div>
              <label htmlFor="Role" className="block mb-2 text-sm">
                Role
              </label>
              <select
                name="role"
                id="role"
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                } w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack`}
                {...register("role")}
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
              <div className="invalid-feedback">{errors.role?.message}</div>
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
                  placeholder="*****"
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  } w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack`}
                />
                <div className="invalid-feedback">{errors.repassword?.message}</div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-coral dark:bg-coral">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddEditUser;
