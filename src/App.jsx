import "./assets/globals.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import TripTypes from "./pages/TripType/TripType";
import Contact from "./pages/Contact/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/trips" element={<TripTypes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
