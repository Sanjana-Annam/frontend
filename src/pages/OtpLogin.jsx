import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./OtpLogin.css"; // ← styling file if you had it earlier

export default function OtpLogin() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [sentOtp, setSentOtp] = useState("");
  const [step, setStep] = useState(1);

  const backend = "https://backend-3kr7.onrender.com";

  const sendOtp = async () => {
    if (!email) {
      Swal.fire("Error", "Please enter your email", "error");
      return;
    }

    const generatedOtp = Math.floor(100000 + Math.random() * 900000);
    setSentOtp(generatedOtp);

    try {
      await axios.post(`${backend}/api/send-otp`, {
        email,
        otp: generatedOtp
      });

      Swal.fire("Success", "OTP sent to your email", "success");
      setStep(2);
    } catch (error) {
      console.error(error);
      Swal.fire("Failed", "Failed to send OTP: Server error", "error");
    }
  };

  const verifyOtp = () => {
    if (otp === String(sentOtp)) {
      Swal.fire("Success", "OTP Verified Successfully", "success");
      // redirect or login code
    } else {
      Swal.fire("Error", "Incorrect OTP", "error");
    }
  };

  return (
    <div className="otp-container">
      <h1 className="otp-title">WEEP</h1>
      <div className="otp-card">
        <h2 className="otp-heading">
          {step === 1 ? "Login with OTP" : "Verify OTP"}
        </h2>

        {step === 1 && (
          <>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="otp-btn" onClick={sendOtp}>
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label>Enter OTP</label>
            <input
              type="number"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className="otp-btn" onClick={verifyOtp}>
              Verify OTP
            </button>

            <p className="resend" onClick={sendOtp}>
              Resend OTP
            </p>
          </>
        )}
      </div>
    </div>
  );
}
