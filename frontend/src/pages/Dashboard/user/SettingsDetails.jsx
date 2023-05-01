import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

// TODO: delete/user/id store action
import { verifyEmail } from "../../../_store";

const SettingsDetails = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // form validation rules
  const validationSchema = Yup.object().shape({
    delete: Yup.boolean().required("Checkbox must checked"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  // const onError = (errors, e) => console.log(errors, e);
  const onSubmit = ({ token }) => {
    dispatch(verifyEmail({ token }));
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <section className="flex justify-center">
      <h1 className="my-3 text-4xl font-bold">Settings</h1>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-black dark:text-lightgray border-2 border-red-500">
        <div className="mb-8 text-center">
          <p className="text-sm text-black dark:text-white">Delete My Account</p>
        </div>
        <form className="space-y-12 " onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label htmlFor="delete" className="mb-2 text-sm">
                Delete
              </label>
              <input
                type="checkbox"
                className={`${
                  errors.delete ? "is-invalid" : ""
                } px-3 py-2 border border-black text-lightgray  rounded-md dark:border-lightblack`}
                {...register("delete")}
              />
              <div className="text-red-400">{errors.delete?.message}</div>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-red-500 dark:bg-coral">
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SettingsDetails;
