import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Navbar } from "./components/Navbar";
import { Edit } from "./pages/Edit/Edit";
import SignIn from "./pages/account/SignIn";
import Register from "./pages/account/Register";
import GetInTouch from "./pages/GetInTouch/GetInTouch";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FromBottomToTop from "./components/FromBottomToTop";
import Dashboard from "./pages/Dashboard/Dashboard";
import Alert from "./components/Alert";
import { history } from "./_helpers";
import TotalStats from "./pages/Dashboard/admin/TotalStats";
import Graph from "./pages/Dashboard/admin/Graph";
import ListUsers from "./pages/Dashboard/admin/ListUsers";
import AddEditUser from "./pages/Dashboard/admin/AddEditUser";
import UserStats from "./pages/Dashboard/user/UserStats";
import UserInfo from "./pages/Dashboard/user/UserProfile";
import UserGallery from "./pages/Dashboard/user/UserGallery";
import SettingsDetails from "./pages/Dashboard/user/SettingsDetails";
function App() {
  const auth = useSelector((x) => x.auth?.auth);
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
                <Route path="/dashboard" element={<Dashboard />}>
                  {auth?.role === "Admin" ? (
                    <>
                      <Route path="/dashboard/index" element={<TotalStats />} />
                      <Route path="/dashboard/graph" element={<Graph />} />
                      <Route path="/dashboard/listuser" element={<ListUsers />} />
                      <Route path="/dashboard/addedituser" element={<AddEditUser />} />
                    </>
                  ) : (
                    <>
                      <Route path="/dashboard/index" element={<UserStats />} />
                      <Route path="/dashboard/profile" element={<UserInfo />} />
                      <Route path="/dashboard/usergallery" element={<UserGallery />} />
                      <Route path="/dashboard/settings" element={<SettingsDetails />} />
                    </>
                  )}
                </Route>
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
