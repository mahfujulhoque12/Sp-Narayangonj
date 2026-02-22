import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import NOC from "./pages/NOC";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noc" element={<NOC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
