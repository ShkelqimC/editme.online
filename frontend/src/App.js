import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Navbar } from "./components/Navbar";
import { Edit } from "./pages/Edit/Edit";
function App() {
  return (
    <>
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} /> 
        <Route path="/edit" element={<Edit />} >
          <Route index path=":id" element={<Edit />}/>
        </Route>
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>
    </>
  );
}

export default App;
 