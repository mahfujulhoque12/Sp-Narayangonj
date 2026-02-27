import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import NOC from "./pages/NOC";
import AmederKhota from "./pages/AmederKhota";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollTop";
import Contact from "./pages/Contact";
import Khobor from "./pages/Khobor";
import PoliceLines from "./pages/PoliceLines";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noc" element={<NOC />} />
        <Route path="/ameder-khota" element={<AmederKhota />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/khobor" element={<Khobor />} />
        <Route path="/police-lines" element={<PoliceLines />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
