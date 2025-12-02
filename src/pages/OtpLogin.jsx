import { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config";

export default function OtpLogin() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = async () => {
    if (!email) return alert("Enter email first");
    try {
      const res = await axios.post(`${API_BASE_URL}/send-otp`, { email });
      alert("OTP sent to email ✔");
      setOtpSent(true);
    } catch (err) {
      alert("❌ Failed to send OTP: " + (err.response?.data?.message || "Server error"));
    }
  };

  const verifyOtp = async () => {
    if (!email || !otp) return alert("Enter both email and OTP");
    try {
      const res = await axios.post(`${API_BASE_URL}/verify-otp`, { email, otp });
      alert("Login Success ✔");
      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      alert("❌ Invalid OTP");
    }
  };

  return (
    <div className="login-box">
      <h2>Login with OTP</h2>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {otpSent && (
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      )}

      {!otpSent ? (
        <button onClick={sendOtp}>Send OTP</button>
      ) : (
        <button onClick={verifyOtp}>Verify OTP</button>
      )}
    </div>
  );
}
