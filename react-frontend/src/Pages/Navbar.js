import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaHome, FaUser, FaClipboardList, FaList } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import userimg from "../assets/user.png";

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeNav = () => {
    setIsNavVisible(false);
  };

  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="navbar-container">
      <button className="toggle-nav-btn" onClick={toggleNavVisibility}>
        &#9776;
      </button>
      <div
        className={`overlay ${isNavVisible ? "visible" : ""}`}
        onClick={closeNav}
      ></div>

      <div className={`navbar-container-one ${isNavVisible ? "visible" : ""}`}>
        <img className="nav-image" src={userimg} alt="" />
        <h3 className="doctor-details">Dr: xxxxxx</h3>
        <h3 className="doctor-details">ID: 12345678</h3>
      </div>

      <div className={`navbar-container-two ${isNavVisible ? "visible" : ""}`}>
        <NavLink
          to="/dashboard"
          className={`nav-link ${
            activeLink === "/dashboard" ? "active-link" : ""
          }`}
          onClick={closeNav}
        >
          <FaHome />
          Dashboard
        </NavLink>
        <NavLink
          to="/doctor-profile"
          className={`nav-link ${
            activeLink === "/doctor-profile" ? "active-link" : ""
          }`}
          onClick={closeNav}
        >
          <FaUser />
          My Profile
        </NavLink>
        <NavLink
          to="/patient-register"
          className={`nav-link ${
            activeLink === "/patient-register" ? "active-link" : ""
          }`}
          onClick={closeNav}
        >
          <FaClipboardList />
          Patient Registration
        </NavLink>
        <NavLink
          to="/patient-list"
          className={`nav-link ${
            activeLink === "/patient-list" ? "active-link" : ""
          }`}
          onClick={closeNav}
        >
          <FaList />
          Patient List
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
