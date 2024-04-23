import img1 from "../assets/image1.png";
import { LargeTextField, PasswordInput } from "../Components/Textfeilds";
import { useState } from "react";
import "./DoctorRegister.css";
import { Link } from "react-router-dom";
import { db, auth } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

function DoctorRegister() {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (!fullName || !email || !doctorId || !password || !confirmPassword) {
        setError("All fields are required");
        alert("All fields are required!");
        return;
      }

      // Check if password and confirmPassword match
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        console.log("Password does not match");
        alert("Password does not match");
        setLoading(false);
        return;
      }

      // Create user with email and password
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await addDoc(collection(db, "react-doctor-details"), {
        uid: user.uid,
        fullName,
        doctorId,
        speciality,
        email,
        mobileNumber,
        hospitalName,
      });

      console.log("User registered successfully:", user.uid);

      // Reset form fields
      setFullName("");
      setDoctorId("");
      setSpeciality("");
      setEmail("");
      setMobileNumber("");
      setHospitalName("");
      setPassword("");
      setConfirmPassword("");
      setProfilePic(null);

      setLoading(false);

      alert("Registration successful!");
      window.location.href = "/doctor-signin";
    } catch (error) {
      console.error("Error registering user: ", error);
      alert("Failed to register. Please try again.");
      setError("Failed to register. Please try again.");
      setLoading(false);
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

        <form onSubmit={handleSubmit}>
          <div className="textField-container">
            <div className="textField-container-one">
              <p>Full Name:</p>
              <LargeTextField
                placeholder={"Enter your name"}
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <br />
              <p>Doctor Id:</p>
              <LargeTextField
                placeholder={"Enter your Id"}
                type="text"
                value={doctorId}
                onChange={(e) => setDoctorId(e.target.value)}
              />{" "}
              <br />
              <p>Speciality:</p>
              <LargeTextField
                placeholder={"Enter speciality"}
                type="text"
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
              />{" "}
              <br />
            </div>

            <div className="textField-container-one">
              <p>Email:</p>
              <LargeTextField
                placeholder={"Enter email address"}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />{" "}
              <br />
              <p>Mobile Number:</p>
              <LargeTextField
                placeholder={"Enter mobile number"}
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />{" "}
              <br />
              <p>Hospital Name:</p>
              <LargeTextField
                placeholder={"Enter hospital name"}
                type="text"
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
              />{" "}
              <br />
            </div>
          </div>

          <div className="textField-container">
            <div className="textField-container-one">
              <p>Password:</p>
              <PasswordInput
                placeholder={"Enter password"}
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="textField-container-one">
              <p>Confirm Password:</p>
              <PasswordInput
                placeholder={"Re-enter password"}
                type="text"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="footer-container">
            <div className="profile-section">
              {profilePic && (
                <div>
                  <div className="profile-pic-container">
                    <img
                      src={profilePic}
                      alt="Profile"
                      className="profile-pic"
                    />
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
              <button className="signup-button" type="submit">
                <h2>Sign Up</h2>
              </button>
            </div>
          </div>
        </form>
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default DoctorRegister;
