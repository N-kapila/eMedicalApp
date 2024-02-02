import React from "react";
import "./DoctorProfile.css";
import userimg from "../assets/user.png";
import { MediumTextField } from "../Components/Textfeilds";

function DoctorProfile() {
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
            <MediumTextField />
          </div>
          <div className="field-container">
            <p>Doctor Id:</p>
            <MediumTextField />
          </div>
          <div className="field-container">
            <p>Speciality:</p>
            <MediumTextField />
          </div>
        </div>
        <div className="profile-textfield-container">
          <div className="field-container">
            <p>Email:</p>
            <MediumTextField />
          </div>
          <div className="field-container">
            <p>Mobile Number:</p>
            <MediumTextField />
          </div>
          <div className="field-container">
            <p>Hospital Name:</p>
            <MediumTextField />
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
