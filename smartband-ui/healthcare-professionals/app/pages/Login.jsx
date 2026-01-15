"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock authentication - simulate API call
    setTimeout(() => {
      localStorage.setItem("avf_token", "demo-jwt-token");
      localStorage.setItem(
        "avf_user",
        JSON.stringify({ name: "Dr. Demo", email })
      );
      navigate("/dashboard");
    }, 800);
  };

  return (
    <div className="login-container">
      <div className="login-bg-pattern"></div>

      <div className="login-card">
        <div className="login-header">
          <div className="logo-container">
            <div className="logo-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1>AVF SmartBand</h1>
          </div>
          <p className="tagline">Haemodialysis Access Surveillance</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  fill="currentColor"
                />
              </svg>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="doctor@hospital.com"
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
                  fill="currentColor"
                />
              </svg>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={4}
                autoComplete="current-password"
              />
            </div>
          </div>

          <button
            type="submit"
            className={`login-btn ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="spinner"></span>
            ) : (
              <>
                <span>Sign In</span>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
                    fill="currentColor"
                  />
                </svg>
              </>
            )}
          </button>
        </form>

        <div className="login-footer">
          <p>Protected health information. Authorized personnel only.</p>
        </div>
      </div>

      <div className="login-features">
        <div className="feature">
          <div className="feature-icon acoustic">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span>Acoustic Bruit Sensing</span>
        </div>
        <div className="feature">
          <div className="feature-icon infrared">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span>Infrared Perfusion Index</span>
        </div>
        <div className="feature">
          <div className="feature-icon ml">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span>ML Risk Scoring</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
