// import { Link } from "react-router-dom";
// import React, {useState} from "react";
// import "./header.css";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="Navbar">
//       <span className="nav-logo">Z.a.p.h Tours</span>
//       <div className={`nav-items ${isOpen && "open"}`}>
//         <a href="/home">Home</a>
//         <a href="/about">Destination</a>
//         <a href="/service">Trip types</a>
//         <a href="/contact">Contact</a>
//       </div>
//       <div
//         className={`nav-toggle ${isOpen && "open"}`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <div className="bar"></div>
//       </div>
//     </div>
//   );
// };
// export default Header;
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="nav-logo">Z.a.p.h Tours</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/">Home</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/trips">Trip types</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;
