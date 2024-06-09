import "./assets/globals.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Destinations from "./pages/Destination/Destinations";
import TripTypes from "./pages/TripType/TripType";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Header/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/trips" element={<TripTypes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
