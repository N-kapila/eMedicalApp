import React from "react";
import { Routes, Route } from "react-router-dom";
import DoctorRegister from "../Pages/DoctorRegister";
import DoctorSignin from "../Pages/DoctorSignin";
import ErrorPage from "../Pages/ErrorPage";
import PatientRegister from "../Pages/PatientRegister";
import DoctorProfile from "../Pages/DoctorProfile";
import Navbar from "../Pages/Navbar";
import Dashboard from "../Pages/Dashboard";
import PatientList from "../Pages/PatientList";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DoctorRegister />} />
      <Route path="/doctor-register" element={<DoctorRegister />} />
      <Route path="/doctor-signin" element={<DoctorSignin />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route
        path="/patient-register"
        element={
          <div style={{ display: "flex" }}>
            <Navbar />
            <div style={{ flex: 1, padding: "20px" }}>
              <PatientRegister />
            </div>
          </div>
        }
      />
      <Route
        path="/doctor-profile"
        element={
          <div style={{ display: "flex" }}>
            <Navbar />
            <div style={{ flex: 1, padding: "30px" }}>
              <DoctorProfile />
            </div>
          </div>
        }
      />
      <Route
        path="/dashboard"
        element={
          <div style={{ display: "flex" }}>
            <Navbar />
            <div style={{ flex: 1, padding: "30px" }}>
              <Dashboard />
            </div>
          </div>
        }
      />
      <Route
        path="/patient-list"
        element={
          <div style={{ display: "flex" }}>
            <Navbar />
            <div style={{ flex: 1, paddingBottom: "30px" }}>
              <PatientList />
            </div>
          </div>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRoutes;
