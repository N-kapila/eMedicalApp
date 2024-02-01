import img1 from "../assets/image1.png";
import { LargeTextField, PasswordInput } from "../Components/Textfeilds";
import { useState } from "react";
import "./DoctorRegister.css";
import { Link } from "react-router-dom";

function DoctorRegister() {
  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container">
      <div className="container-one">
        <img src={img1} alt="" />
      </div>

      <div className="container-two">
        <div className="signup-header">
          <h4 style={{ marginRight: 5 }}>Already have an account?</h4>
          <Link to="/doctor-signin">Sign in</Link>
        </div>

        <div className="header">
          <h1 style={{ color: "var(--primary-color)", fontSize: "50px" }}>
            Doctor Sign Up
          </h1>
        </div>

        <div className="textField-container">
          <div className="textField-container-one">
            <p>Full Name:</p>
            <LargeTextField placeholder={"Enter your name"} />
            <br />
            <p>Doctor Id:</p>
            <LargeTextField placeholder={"Enter your Id"} /> <br />
            <p>Speciality:</p>
            <LargeTextField placeholder={"Enter speciality"} /> <br />
          </div>

          <div className="textField-container-one">
            <p>Email:</p>
            <LargeTextField placeholder={"Enter email address"} /> <br />
            <p>Mobile Number:</p>
            <LargeTextField placeholder={"Enter mobile number"} /> <br />
            <p>Hospital Name:</p>
            <LargeTextField placeholder={"Enter hospital name"} /> <br />
          </div>
        </div>

        <div className="textField-container">
          <div className="textField-container-one">
            <p>Password:</p>
            <PasswordInput placeholder={"Enter password"} />
          </div>

          <div className="textField-container-one">
            <p>Confirm Password:</p>
            <PasswordInput placeholder={"Re-enter password"} />
          </div>
        </div>

        <div className="containers">
          <div className="profile-section">
            {profilePic && (
              <div>
                <div className="profile-pic-container">
                  <img src={profilePic} alt="Profile" className="profile-pic" />
                </div>
              </div>
            )}
            <div>
              <div className="label-container">
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <label htmlFor="fileInput">Choose profile picture</label>
              </div>
            </div>
          </div>

          <div className="button-section">
            <button className="signup-button">
              <h2>Sign Up</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorRegister;
