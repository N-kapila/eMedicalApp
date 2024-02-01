import React from "react";
import "./Dashboard.css";
import Calendar from "react-calendar";
import userimg from "../assets/user.png";
import chart from "../assets/chart.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const data = [
    {
      name: "John Doe",
      currentDisease: "Fever",
      nextAppointmentDate: "2024-02-10",
    },
    {
      name: "Jane Smith",
      currentDisease: "Cough",
      nextAppointmentDate: "2024-02-15",
    },
    {
      name: "Alice Johnson",
      currentDisease: "Headache",
      nextAppointmentDate: "2024-02-18",
    },
    {
      name: "Bob Williams",
      currentDisease: "Back Pain",
      nextAppointmentDate: "2024-02-22",
    },
    {
      name: "Eva Davis",
      currentDisease: "Allergies",
      nextAppointmentDate: "2024-02-28",
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-container-one">
        <div>
          <h1>Good morning, Dr. xxxxx</h1>
          <p>
            You have 7 patients remaining today! <br /> Remember to record your
            details today.
          </p>
        </div>
        <div className="dashboard-user-image">
          <img src={userimg} alt="User" />
        </div>
      </div>

      <div className="dashboard-container-two">
        <img src={chart} alt="Chart" />
        <div className="calendar-container">
          <Calendar onChange={handleDateChange} value={date} />
        </div>
      </div>

      <div className="dashboard-container-three">
        <div className="dashboard-header">
          <h2>Recent Patient List</h2>
          <Link to="/patient-list">View All</Link>
        </div>
        <div className="patient-table-container">
          <table className="patient-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Current Disease</th>
                <th>Next Appointment Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.currentDisease}</td>
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

export default Dashboard;
