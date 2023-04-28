import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Navbar } from "./components/Navbar";
import { Edit } from "./pages/Edit/Edit";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
function App() {
  return (
    <>
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} /> 
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/edit" element={<Edit />} >
          <Route index path=":id" element={<Edit />}/>
        </Route>
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>
    </>
  );
}

export default App;
 