import { useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Navbar } from "./components/Navbar";
import { Edit } from "./pages/Edit/Edit";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import GetInTouch from "./pages/GetInTouch/GetInTouch";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      id="app"
      className="dark:bg-black dark:text-lightgray transition-all font-roboto selection:bg-coral selection:text-white relative"
    >
      <BrowserRouter>
        <div id="content-wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/edit" element={<Edit />}>
              <Route index path=":id?" element={<Edit />} />
            </Route>
            <Route path="/getintouch" element={<GetInTouch />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
