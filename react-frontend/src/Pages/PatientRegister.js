import React from "react";
import "./PatientRegister.css";
import { LargeTextField } from "../Components/Textfeilds";
import { useState } from "react";
import { DiagnosisSearch } from "./DiagnosisSearch";

function PatientRegister() {
  const diseaseOptions = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  // State to manage the selected value
  const [selectedDisease, setSelectedDisease] = useState("");

  // Handler for the onChange event
  const handleDiseaseChange = (e) => {
    setSelectedDisease(e.target.value);
  };
  return (
    <div className="register-patient">
      <h1>Register Patient</h1>

      <div className="patient-container">
        <div className="patient-container-one">
          <p>Full Name:</p>
          <LargeTextField placeholder={"Enter your name"} />
          <br />
          <p>Age:</p>
          <LargeTextField placeholder={"Enter age"} /> <br />
          <p>Email:</p>
          <LargeTextField placeholder={"Enter email address"} /> <br />
          <p>Current Diseases</p>
          <DiagnosisSearch />
          <br />
          <p>Current Medication</p>
          <LargeTextField placeholder={"Enter medication"} /> <br />
          <br />
          <p>Current Treatments</p>
          <LargeTextField placeholder={"Enter treatments"} /> <br />
        </div>

        <div className="patient-container-one">
          <p>Gender:</p>
          <LargeTextField placeholder={"Gender"} /> <br />
          <p>Mobile Number:</p>
          <LargeTextField placeholder={"Enter mobile number"} /> <br />
          <p>Address:</p>
          <LargeTextField placeholder={"Enter address"} /> <br />
          <p>Register Date:</p>
          <LargeTextField placeholder={"Enter register date"} /> <br />
          <p>Past Diseases</p>
          <DiagnosisSearch />
          <br />
          <p>Next Appointment Date:</p>
          <LargeTextField placeholder={"Date"} />
        </div>
      </div>
      <div className="button-section">
        <button className="register-button">
          <h2>Register</h2>
        </button>
      </div>
    </div>
  );
}

export default PatientRegister;
