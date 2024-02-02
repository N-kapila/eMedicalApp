import React from "react";
import "./PatientProfile.css";
import { MediumTextField } from "../Components/Textfeilds";

function PatientProfile() {
  return (
    <div className="patient-profile-container">
      <h1>Patient Profile</h1>

      <div className="patient-profile-container-one">
        <div className="profile-textfield-container">
          <div className="field-container">
            <p>Full Name:</p>
            <MediumTextField />
          </div>
          <div className="field-container">
            <p>Age:</p>
            <MediumTextField />
          </div>
          <div className="field-container">
            <p>Email:</p>
            <MediumTextField />
          </div>
          <div className="field-container">
            <p>Mobile Number:</p>
            <MediumTextField />
          </div>
          <div className="field-container">
            <p>Address:</p>
            <MediumTextField />
          </div>
          <div className="field-container">
            <p>Register Date:</p>
            <MediumTextField />
          </div>
        </div>
        <div className="profile-textfield-container">
          <div className="field-container">
            <p>Gender:</p>
            <MediumTextField />
          </div>
          <div className="field-container">
            <p>Current Diseases:</p>
            <MediumTextField />
          </div>
          <div className="field-container">
            <p>Current Medication:</p>
            <MediumTextField />
          </div>
          <div className="field-container">
            <p>Current Treatments:</p>
            <MediumTextField />
          </div>
          <div className="field-container">
            <p>Past Diseases:</p>
            <MediumTextField />
          </div>
          <div className="field-container">
            <p>Next Appoinment Date:</p>
            <MediumTextField />
          </div>
        </div>
      </div>

      <div className="patient-profile-container-two">
        <button className="edit-button">
          <h2>Edit Details</h2>
        </button>
        <button className="signout-button">
          <h2>Save</h2>
        </button>
        <button className="delete-button">
          <h2>Delete account</h2>
        </button>
      </div>
    </div>
  );
}

export default PatientProfile;
