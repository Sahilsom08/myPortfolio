import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className={`${showNavbar && "active"}`}>
            <li>
              <NavLink to="/" className="links">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="projects" className="links">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="skills" className="links">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" className="links">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? <RxCross2 size={25} /> : <HiMenu size={25} />}
        </div>
      </div>
    </nav>
  );
}

export default Header;
