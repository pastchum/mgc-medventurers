"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

// Mock patient data
const mockPatients = [
  {
    id: "#10021",
    time: "10:42",
    bruitTrend: "↓ 18%",
    perfusion: 0.62,
    risk: "high",
  },
  {
    id: "#10007",
    time: "10:38",
    bruitTrend: "↑ 4%",
    perfusion: 0.81,
    risk: "low",
  },
  {
    id: "#10019",
    time: "10:35",
    bruitTrend: "↓ 7%",
    perfusion: 0.7,
    risk: "moderate",
  },
  {
    id: "#10015",
    time: "10:30",
    bruitTrend: "↑ 2%",
    perfusion: 0.85,
    risk: "low",
  },
  {
    id: "#10003",
    time: "10:25",
    bruitTrend: "→ 0%",
    perfusion: 0.78,
    risk: "low",
  },
  {
    id: "#10028",
    time: "10:20",
    bruitTrend: "↓ 12%",
    perfusion: 0.65,
    risk: "moderate",
  },
];

const riskStats = {
  low: {
    count: 24,
    label: "Low Risk",
    description: "Patients with stable AVF",
    color: "green",
  },
  moderate: {
    count: 5,
    label: "Moderate Risk",
    description: "Schedule ultrasound within 7 days",
    color: "amber",
  },
  high: {
    count: 2,
    label: "High Risk",
    description: "Immediate review required",
    color: "red",
  },
};

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "Dr. Demo" });
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem("avf_token");
    if (!token) {
      navigate("/");
      return;
    }

    const savedUser = localStorage.getItem("avf_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Update time every minute
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("avf_token");
    localStorage.removeItem("avf_user");
    navigate("/");
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="dashboard">
      <header className="topbar">
        <div className="topbar-left">
          <div className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="logo-text">AVF SmartBand</span>
          </div>
        </div>

        <div className="topbar-center">
          <div className="datetime">
            <span className="time">{formatTime(currentTime)}</span>
            <span className="date">{formatDate(currentTime)}</span>
          </div>
        </div>

        <div className="topbar-right">
          <div className="user-info">
            <div className="user-avatar">{user.name?.charAt(0) || "D"}</div>
            <div className="user-details">
              <span className="user-name">{user.name}</span>
              <span className="user-role">Nephrologist</span>
            </div>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
                fill="currentColor"
              />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </header>

      <main className="main-content">
        <div className="page-header">
          <h1>Patient Overview</h1>
          <p>Real-time arteriovenous fistula monitoring dashboard</p>
        </div>

        <section className="risk-cards">
          {Object.entries(riskStats).map(([key, stat]) => (
            <div key={key} className={`risk-card ${stat.color}`}>
              <div className="card-header">
                <div className={`status-indicator ${stat.color}`}></div>
                <h3>{stat.label}</h3>
              </div>
              <div className="card-body">
                <div className="stat-number">{stat.count}</div>
                <p className="stat-description">{stat.description}</p>
              </div>
              <div className="card-footer">
                <button className="view-btn">
                  View Patients
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </section>

        <section className="readings-section">
          <div className="section-header">
            <h2>Recent Readings</h2>
            <div className="section-actions">
              <button className="refresh-btn">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                    fill="currentColor"
                  />
                </svg>
                Refresh
              </button>
            </div>
          </div>

          <div className="table-container">
            <table className="readings-table">
              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Time</th>
                  <th>Bruit Trend</th>
                  <th>Perfusion Index</th>
                  <th>Risk Level</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockPatients.map((patient) => (
                  <tr key={patient.id} className={`row-${patient.risk}`}>
                    <td>
                      <span className="patient-id">{patient.id}</span>
                    </td>
                    <td>{patient.time}</td>
                    <td>
                      <span
                        className={`trend ${
                          patient.bruitTrend.includes("↓")
                            ? "down"
                            : patient.bruitTrend.includes("↑")
                            ? "up"
                            : "stable"
                        }`}
                      >
                        {patient.bruitTrend}
                      </span>
                    </td>
                    <td>
                      <div className="perfusion-cell">
                        <div className="perfusion-bar">
                          <div
                            className="perfusion-fill"
                            style={{ width: `${patient.perfusion * 100}%` }}
                          ></div>
                        </div>
                        <span>{patient.perfusion.toFixed(2)}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${patient.risk}`}>
                        {patient.risk.charAt(0).toUpperCase() +
                          patient.risk.slice(1)}
                      </span>
                    </td>
                    <td>
                      <button className="action-btn">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
