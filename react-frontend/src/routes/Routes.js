import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../Pages/AuthContext";
import "./Routes.css";
import DoctorRegister from "../Pages/DoctorRegister";
import DoctorSignin from "../Pages/DoctorSignin";
import ErrorPage from "../Pages/ErrorPage";
import PatientRegister from "../Pages/PatientRegister";
import DoctorProfile from "../Pages/DoctorProfile";
import Navbar from "../Pages/Navbar";
import Dashboard from "../Pages/Dashboard";
import PatientList from "../Pages/PatientList";
import PatientProfile from "../Pages/PatientProfile";

function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<DoctorRegister />} />
        <Route path="/doctor-register" element={<DoctorRegister />} />
        <Route path="/doctor-signin" element={<DoctorSignin />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route
          path="/patient-register"
          element={
            <div className="content">
              <Navbar />
              <div className="main-content">
                <PatientRegister />
              </div>
            </div>
          }
        />
        <Route
          path="/doctor-profile"
          element={
            <div className="content">
              <Navbar />
              <div className="main-content">
                <DoctorProfile />
              </div>
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div className="content">
              <Navbar />
              <div className="main-content">
                <Dashboard />
              </div>
            </div>
          }
        />
        <Route
          path="/patient-list"
          element={
            <div className="content">
              <Navbar />
              <div className="main-content">
                <PatientList />
              </div>
            </div>
          }
        />
        <Route
          path="/patient-profile"
          element={
            <div className="content">
              <Navbar />
              <div className="main-content">
                <PatientProfile />
              </div>
            </div>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default AppRoutes;
