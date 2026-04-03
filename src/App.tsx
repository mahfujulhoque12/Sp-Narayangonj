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
import Vowgolik from "./pages/Vowgolik";
import KPI from "./pages/KPI";
import Gallery from "./pages/Gallery";
import GalleryItem from "./components/gallery/GalleryItem";

import PoliceClerence from "./pages/PoliceClerence";
import JobVarifacition from "./pages/JobVarifacition";
import Kormo from "./pages/Kormo";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noc" element={<NOC />} />
        <Route path="/ameder-khota" element={<AmederKhota />} />
        <Route path="/kormosompadon" element={<Kormo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/khobor" element={<Khobor />} />
        <Route path="/kpi" element={<KPI />} />

        <Route path="/police-lines" element={<PoliceLines />} />
        <Route path="/vowgolik" element={<Vowgolik />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/police-clerence" element={<PoliceClerence />} />
        <Route path="/national-important-event" element={<PoliceClerence />} />

        <Route path="/job-varifacition" element={<JobVarifacition />} />
        <Route path="/oporad" element={<JobVarifacition />} />
        <Route path="/orjon" element={<JobVarifacition />} />

        <Route path="/event-management" element={<JobVarifacition />} />
        <Route path="/lost-and-found" element={<JobVarifacition />} />
        <Route path="/nikhoj-bekti" element={<JobVarifacition />} />

        <Route path="/osonaktokrito-mritodeho" element={<JobVarifacition />} />

        <Route path="/womens-support-center" element={<JobVarifacition />} />
        <Route path="/passport-varifacition" element={<JobVarifacition />} />

        <Route path="/gallery/:id" element={<GalleryItem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
