import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import NOC from "./pages/NOC";
import AmederKhota from "./pages/AmederKhota";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noc" element={<NOC />} />
        <Route path="/ameder-khota" element={<AmederKhota />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
