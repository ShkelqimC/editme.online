import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
