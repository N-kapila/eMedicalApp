import React from "react";
import "./PatientList.css";
import { FaSearch } from "react-icons/fa";

function PatientList() {
  const data = [
    {
      name: "John Doe",
      age: 45,
      currentDisease: "Fever",
      mobileNumber: 123456789,
      nextAppointmentDate: "2024-02-10",
    },
    {
      name: "Jane Smith",
      age: 25,
      currentDisease: "Cough",
      mobileNumber: 123456789,
      nextAppointmentDate: "2024-02-15",
    },
    {
      name: "Alice Johnson",
      age: 40,
      currentDisease: "Headache",
      mobileNumber: 123456789,
      nextAppointmentDate: "2024-02-18",
    },
    {
      name: "Bob Williams",
      age: 32,
      currentDisease: "Back Pain",
      mobileNumber: 123456789,
      nextAppointmentDate: "2024-02-22",
    },
    {
      name: "Eva Davis",
      age: 60,
      currentDisease: "Allergies",
      mobileNumber: 123456789,
      nextAppointmentDate: "2024-02-28",
    },

    {
      name: "",
      age: "",
      currentDisease: "",
      mobileNumber: "",
      nextAppointmentDate: "",
    },
    {
      name: "",
      age: "",
      currentDisease: "",
      mobileNumber: "",
      nextAppointmentDate: "",
    },
  ];
  return (
    <div className="list-container">
      <h1>Patient List</h1>
      <div className="list-container-one">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
      </div>

      <div className="list-container-two">
        <div className="patient-table-container">
          <table className="patient-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Current Disease</th>
                <th>Mobile Number</th>
                <th>Next Appointment Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td>{row.currentDisease}</td>
                  <td>+94 {row.mobileNumber}</td>
                  <td>{row.nextAppointmentDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PatientList;
