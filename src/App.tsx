import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import AmederKhota from "./pages/AmederKhota";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ameder-khota" element={<AmederKhota />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
