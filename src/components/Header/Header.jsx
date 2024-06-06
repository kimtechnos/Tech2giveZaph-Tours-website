import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="Navbar">
      <span className="nav-logo">Z.a.p.h Tours</span>
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/destination" onClick={handleLinkClick}>
          Destination
        </Link>
        <Link to="/trips" onClick={handleLinkClick}>
          Trip types
        </Link>
        <Link to="/contact" onClick={handleLinkClick}>
          Contact
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;
