import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Register from "./Register";
import SignIn from "./SignIn";
// import { SignIn, Register } from './';

export { AccountLayout };

function AccountLayout() {
  const auth = useSelector((x) => x.auth.value);

  // redirect to home if already logged in
  if (auth) {
    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="signin" element={<SignIn />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}
