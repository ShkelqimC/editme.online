import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate,useNavigate,useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Navbar } from "./components/Navbar";
import { Edit } from "./pages/Edit/Edit";
import SignIn from "./pages/account/SignIn";
import Register from "./pages/account/Register";
import GetInTouch from "./pages/GetInTouch/GetInTouch";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FromBottomToTop from "./components/FromBottomToTop";
import UserSettings from "./pages/UserSettings/UserSettings";
import Dashboard from "./pages/Dashboard/Dashboard";
import Alert from "./components/Alert";
import { history } from "./_helpers";
function App() {
  const auth = useSelector((x) => x.auth.value);

  // history.navigate = useNavigate();
  // history.location = useLocation();
  return (
    <div
      id="app"
      className="dark:bg-black dark:text-lightgray transition-all font-roboto selection:bg-coral selection:text-white relative"
    >
      <BrowserRouter>
        <div id="content-wrapper">
          <Navbar />
          <Alert />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            {auth && (
              <>
                <Route path="/usersettings" element={<UserSettings />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </>
            )}
            <Route path="/edit" element={<Edit />}>
              <Route index path=":id?" element={<Edit />} />
            </Route>
            <Route path="/getintouch" element={<GetInTouch />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <ScrollToTop />
          <FromBottomToTop />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
