import React from "react";
import { Routes, Route } from "react-router-dom";
import DoctorRegister from "../Pages/DoctorRegister";
import DoctorSignin from "../Pages/DoctorSignin";
import ErrorPage from "../Pages/ErrorPage";
import Navbar from "../Pages/Navbar";
import PatientRegister from "../Pages/PatientRegister";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DoctorRegister />} />
      <Route path="/doctor-register" element={<DoctorRegister />} />
      <Route path="/doctor-signin" element={<DoctorSignin />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/patient-register" element={<PatientRegister />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRoutes;
