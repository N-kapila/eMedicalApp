import React from "react";
import img1 from "../assets/image1.png";

function DoctorRegister() {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          display: "flex",
          width: "30%",
        }}
      >
        <img src={img1} alt="Image Description" />
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
            padding: 15,
          }}
        >
          <h4 style={{ marginRight: 5 }}>Already have an account?</h4>
          <a href="#">Sign in</a>
        </div>

        <div style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
          <h1 style={{ color: "var(--primary-color)" }}>Doctor Sign Up</h1>
        </div>
      </div>
    </div>
  );
}

export default DoctorRegister;
