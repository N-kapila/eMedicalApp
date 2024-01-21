import img1 from "../assets/image1.png";
import { LargeTextField, PasswordInput } from "../Components/Textfeilds";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

function DoctorRegister() {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          display: "flex",
          width: "30%",
        }}
      >
        <img src={img1} alt="" />
      </div>

      <div
        style={{
          width: "70%",
          borderLeft: "1px solid #ccc",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: 10,
          }}
        >
          <h4 style={{ marginRight: 5 }}>Already have an account?</h4>
          <a href="#">Sign in</a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            paddingLeft: 15,
          }}
        >
          <h1 style={{ color: "var(--primary-color)", fontSize: "50px" }}>
            Doctor Sign Up
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1, paddingLeft: 50 }}>
            <div
              style={{
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
                paddingLeft: 20,
              }}
            >
              <p>Full Name:</p>
              <LargeTextField placeholder={"Enter your name"} />
              <br />
              <p>Email:</p>
              <LargeTextField placeholder={"Enter email address"} /> <br />
              <p>Speciality:</p>
              <LargeTextField placeholder={"Enter speciality"} /> <br />
              <p>Password:</p>
              <PasswordInput placeholder={"Enter password"} />
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div
              style={{
                alignItems: "flex-start",

                display: "flex",
                flexDirection: "column",
                paddingLeft: 30,
              }}
            >
              <p>Doctor Id:</p>
              <LargeTextField placeholder={"Enter your Id"} /> <br />
              <p>Mobile Number:</p>
              <LargeTextField placeholder={"Enter mobile number"} /> <br />
              <p>Hospital Name:</p>
              <LargeTextField placeholder={"Enter hospital name"} /> <br />
              <p>Confirm Password:</p>
              <PasswordInput placeholder={"Re-enter password"} />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1, paddingLeft: 50 }}>
            <div
              style={{
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
                paddingLeft: 20,
              }}
            >
              {/* pofile pic */}
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 50,
                display: "flex",
              }}
            >
              <button
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "white",
                  padding: "1px 50px 1px 50px",
                  border: 0,
                  borderRadius: "10px",
                }}
              >
                {" "}
                <h2> Sign Up</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorRegister;
