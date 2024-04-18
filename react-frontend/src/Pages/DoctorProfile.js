import React, { useState, useEffect } from "react";
import "./DoctorProfile.css";
import userimg from "../assets/user.png";
import { doc, getDoc } from "firebase/firestore";
import { MediumTextField } from "../Components/Textfeilds";
import { db } from "../firebase-config";

function DoctorProfile() {
  const [doctorDetails, setDoctorDetails] = useState({
    fullName: "",
    doctorId: "",
    speciality: "",
    email: "",
    mobileNumber: "",
    hospitalName: "",
  });

  useEffect(() => {
    // Function to fetch doctor details from Firestore
    const fetchDoctorDetails = async () => {
      try {
        const doctorRef = doc(db, "react-doctor-details", "doctorId");
        const doctorSnap = await getDoc(doctorRef);
        if (doctorSnap.exists()) {
          const data = doctorSnap.data();
          setDoctorDetails(data);
        } else {
          console.log("No doctor details found");
        }
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      }
    };

    // Call fetchDoctorDetails function when component mounts
    fetchDoctorDetails();
  }, []);

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-container-one">
        <img className="user-image" src={userimg} alt="" />
      </div>

      <div className="profile-container-two">
        <div className="profile-textfield-container">
          <div className="field-container">
            <p>Full Name:</p>
            <MediumTextField value={doctorDetails.fullName} readOnly />
          </div>
          <div className="field-container">
            <p>Doctor Id:</p>
            <MediumTextField value={doctorDetails.doctorId} readOnly />
          </div>
          <div className="field-container">
            <p>Speciality:</p>
            <MediumTextField value={doctorDetails.speciality} readOnly />
          </div>
        </div>
        <div className="profile-textfield-container">
          <div className="field-container">
            <p>Email:</p>
            <MediumTextField value={doctorDetails.email} readOnly />
          </div>
          <div className="field-container">
            <p>Mobile Number:</p>
            <MediumTextField value={doctorDetails.mobileNumber} readOnly />
          </div>
          <div className="field-container">
            <p>Hospital Name:</p>
            <MediumTextField value={doctorDetails.hospitalName} readOnly />
          </div>
        </div>
      </div>

      <div className="profile-container-three">
        <button className="edit-button">
          <h2>Edit Details</h2>
        </button>
        <button className="save-button">
          <h2>Save</h2>
        </button>
        <button className="signout-button">
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
