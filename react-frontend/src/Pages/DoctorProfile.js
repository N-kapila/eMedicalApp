import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorProfile.css";
import userimg from "../assets/user.png";
import { MediumTextField } from "../Components/Textfeilds";
import { useAuth } from "./AuthContext";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";
import { auth } from "../firebase-config";

function DoctorProfile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const { userUid } = useAuth();

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
  }, [userUid]);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log("User signed out successfully.");
      alert("Sign out successfully");
      navigate("/doctor-signin");
      // Redirect to the sign-in page or any other page after sign-out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-container-one">
        <img className="user-image" src={userimg} alt="" />
      </div>

      {userData && (
        <div className="profile-container-two">
          <div className="profile-textfield-container">
            <div className="field-container">
              <p>Full Name:</p>
              <MediumTextField value={userData.fullName} />
            </div>
            <div className="field-container">
              <p>Doctor Id:</p>
              <MediumTextField value={userData.doctorId} />
            </div>
            <div className="field-container">
              <p>Speciality:</p>
              <MediumTextField value={userData.speciality} />
            </div>
          </div>
          <div className="profile-textfield-container">
            <div className="field-container">
              <p>Email:</p>
              <MediumTextField value={userData.email} />
            </div>
            <div className="field-container">
              <p>Mobile Number:</p>
              <MediumTextField value={userData.mobileNumber} />
            </div>
            <div className="field-container">
              <p>Hospital Name:</p>
              <MediumTextField value={userData.hospitalName} />
            </div>
          </div>
        </div>
      )}

      <div className="profile-container-three">
        <button className="edit-button">
          <h2>Edit Details</h2>
        </button>
        <button className="save-button">
          <h2>Save</h2>
        </button>
        <button className="signout-button" onClick={handleSignOut}>
          <h2>Sign Out</h2>
        </button>
        <button className="delete-button">
          <h2>Delete account</h2>
        </button>
      </div>
    </div>
  );
}

export default DoctorProfile;
