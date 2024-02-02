import React, { useState } from "react";
import "./Navbar.css";
import { FaHome, FaUser, FaClipboardList, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import userimg from "../assets/user.png";

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeNav = () => {
    setIsNavVisible(false);
  };

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
        <Link to="/dashboard" className="nav-link" onClick={closeNav}>
          <FaHome />
          Dashboard
        </Link>
        <Link to="/doctor-profile" className="nav-link" onClick={closeNav}>
          <FaUser />
          My Profile
        </Link>
        <Link to="/patient-register" className="nav-link" onClick={closeNav}>
          <FaClipboardList />
          Patient Registration
        </Link>
        <Link to="/patient-list" className="nav-link" onClick={closeNav}>
          <FaList />
          Patient List
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
