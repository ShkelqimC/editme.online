import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../_store";
import { history } from "../../../_helpers";
import ToastMessage from "../../../components/Alert";

// TODO: delete/user/id store action
const SettingsDetails = () => {
  const dispatch = useDispatch();
  const auth = useSelector((x) => x.auth?.auth);
  // form validation rules
  const validationSchema = Yup.object().shape({
    delete: Yup.boolean().required("Checkbox must checked"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  // const onError = (errors, e) => console.log(errors, e);
  const onSubmit = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");

    if (confirmDelete) {
      dispatch(userActions._delete(auth?.id));
      ToastMessage("Warning", "Account deleted successfully");
      history.navigate("/");
    }
  };

  return (
    <section className="grid justify-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-black dark:text-lightgray text-center">
        <h1 className="my-3 text-4xl font-bold">Settings</h1>
        <div className="mb-8 text-center"></div>
        <form className="space-y-12 " onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="flex items-center  border-2 border-red-500 p-4">
              <input
                {...register("delete")}
                type="checkbox"
                className={`form-control ${
                  errors.delete ? "is-invalid" : ""
                } w-4 h-4 text-blue-600 bg-gray border-black rounded focus:ring-coral focus:ring-2 `}
              />
              <label htmlFor="acceptTerms" className="ml-2 text-sm font-medium ">
                Delete my account
              </label>
            </div>
            <div className="text-red-400">{errors.delete?.message}</div>
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
