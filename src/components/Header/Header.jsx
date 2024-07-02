// import { Link } from "react-router-dom";
// import React, { useState } from "react";z
// import "./header.css";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="Navbar">
//       <span className="nav-logo">Z.a.p.h Tours</span>
//       <div className={`nav-items ${isOpen ? "open" : ""}`}>
//         <Link to="/" onClick={handleLinkClick}>
//           Home
//         </Link>
//         <Link to="/destination" onClick={handleLinkClick}>
//           Destination
//         </Link>
//         <Link to="/trips" onClick={handleLinkClick}>
//           Trip types
//         </Link>
//         <Link to="/contact" onClick={handleLinkClick}>
//           Contact
//         </Link>
//       </div>
//       <div
//         className={`nav-toggle ${isOpen ? "open" : ""}`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <div className="bar"></div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "./header.css";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      const sticky = window.scrollY > 0;
      if (sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <HeaderContainer ref={headerRef} className="Navbar">
      <span className="nav-logo">Z.a.p.h Tours</span>
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/destination" onClick={handleLinkClick}>
          Destination
        </Link>
        <Link to="/trips" onClick={handleLinkClick}>
          Trip Types
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
    </HeaderContainer>
  );
};

export default Header;
