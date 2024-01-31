import React from "react";
import "./Navbar.css";
import { FaHome, FaUser, FaClipboardList, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import userimg from "../assets/user.png";

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="navbar-container">
      <button className="toggle-nav-btn" onClick={toggleNavVisibility}>
        &#9776; {/* Unicode for the hamburger icon */}
      </button>
      <div
        className={`overlay ${isNavVisible ? "visible" : ""}`}
        onClick={toggleNavVisibility}
      ></div>

      <div className={`navbar-container-one ${isNavVisible ? "visible" : ""}`}>
        <img className="nav-image" src={userimg} alt="" />
        <h3 className="doctor-details">Dr: xxxxxx</h3>
        <h3 className="doctor-details">ID: 12345678</h3>
      </div>

      <div className={`navbar-container-two ${isNavVisible ? "visible" : ""}`}>
        <Link to="/dasboard" className="nav-link">
          <FaHome />
          Dashboard
        </Link>
        <Link to="/doctor-profile" className="nav-link">
          <FaUser />
          My Profile
        </Link>
        <Link to="/patient-register" className="nav-link">
          <FaClipboardList />
          Patient Registration
        </Link>
        <Link to="/list" className="nav-link">
          <FaList />
          Patient List
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
