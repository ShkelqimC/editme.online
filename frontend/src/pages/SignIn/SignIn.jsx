import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updatePassword, updateUserName, login } from "../../features/userSlice";
import { useCallback } from "react";

export default function SignIn() {
  const email = useSelector((state) => state?.userData?.email);
  const password = useSelector((state) => state?.userData?.password);
  const dispatch = useDispatch();

  const handleEmailChange = useCallback(
    (e) => {
      dispatch(updateUserName(e.target.value));
    },
    [dispatch]
  );

  const handlePasswordChange = useCallback(
    (e) => {
      dispatch(updatePassword(e.target.value));
    },
    [dispatch]
  );
  
  const handleLogin = useCallback(() => dispatch(login()), [dispatch]);

  return (
    <section className="flex align-center justify-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-black dark:text-lightgray border-2">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-black dark:text-white">Sign in to access your account</p>
        </div>
        <form className="space-y-12 " onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div>
              <label for="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
              value={email}
                type="email"
                name="email"
                id="email"
                placeholder="info@editme.online"
                className="w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack"
                onChange={(e) => handleEmailChange(e)}
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label for="password" className="text-sm">
                  Password
                </label>
                <Link to="/forgotpassword" className="text-xs hover:underline hover:text-coral dark:text-gray-400">
                  Forgot password?
                </Link>
              </div>
              <input
              value={password}
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border border-black text-lightgray placeholder:text-lightgray rounded-md dark:border-lightblack"
                onChange={(e) => handlePasswordChange(e)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-coral dark:bg-coral" onClick={() => handleLogin()}>
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
          </div>
        </form>
      </div>
    </section>
  );
}
