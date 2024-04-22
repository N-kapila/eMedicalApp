import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaHome, FaUser, FaClipboardList, FaList } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import userimg from "../assets/user.png";
import { useAuth } from "./AuthContext";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { firebaseConfig } from "../firebase-config";

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  const { userUid } = useAuth();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeNav = () => {
    setIsNavVisible(false);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userUid) {
          const firebaseApp = initializeApp(firebaseConfig);
          const db = getFirestore(firebaseApp);

          const q = query(
            collection(db, "react-doctor-details"),
            where("uid", "==", userUid)
          );
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();
            console.log("Dashboard User Name:", userData.fullName);
            setUserData(userData);
          } else {
            console.log("User document not found for UID:", userUid);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userUid]); // Run effect whenever userUid changes

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

      {userData && (
        <div
          className={`navbar-container-one ${isNavVisible ? "visible" : ""}`}
        >
          <img className="nav-image" src={userimg} alt="" />
          <h3 className="doctor-details">Dr: {userData.fullName}</h3>
          <h3 className="doctor-details">ID: {userData.doctorId}</h3>
        </div>
      )}

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
