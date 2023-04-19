import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <>
    <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} /> 
        <Route path="/edit" element={<h1>Edit</h1>} />
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>
    </>
  );
}

export default App;
 