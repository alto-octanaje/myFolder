import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route exact path="/myFolder" element={<Home />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;