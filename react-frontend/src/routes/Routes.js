import React from "react";
import { Routes, Route } from "react-router-dom";
import DoctorRegister from "../Pages/DoctorRegister";
import DoctorSignin from "../Pages/DoctorSignin";
import ErrorPage from "../Pages/ErrorPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DoctorRegister />} />
      <Route path="/doctor-register" element={<DoctorRegister />} />
      <Route path="/doctor-signin" element={<DoctorSignin />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRoutes;
