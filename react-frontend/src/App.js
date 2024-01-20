import React from "react";
import "./App.css";
import DoctorRegister from "./Pages/DoctorRegister";

function App() {
  return (
    <div className="App">
      {/* <h1 style={{ color: "var(--primary-color)" }}>
        Welcome to the eMedical App
      </h1> */}
      <DoctorRegister />
    </div>
  );
}

export default App;
