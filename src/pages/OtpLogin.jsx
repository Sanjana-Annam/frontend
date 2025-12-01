import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OtpLogin() {
  const [email, setEmail] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const API_BASE = "https://backend-production-3e7d.up.railway.app";

  const sendOtp = async () => {
    if (!email) return alert("Enter email");

    try {
      const res = await fetch(`${API_BASE}/api/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.status === 200) {
        alert("OTP sent successfully 📩");
        setStep(2);
      } else {
        alert(`Failed to send OTP ❌ \nReason: ${data.message}`);
      }
    } catch (error) {
      alert("Server error ❌");
    }
  };

  const verifyOtp = async () => {
    if (!userOtp) return alert("Enter OTP");

    try {
      const res = await fetch(`${API_BASE}/api/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: userOtp }),
      });

      const data = await res.json();

      if (res.status === 200) {
        localStorage.setItem("userEmail", email);
        window.dispatchEvent(new Event("storage"));
        navigate("/dashboard");
      } else {
        alert("Invalid OTP ❌");
      }
    } catch (error) {
      alert("Server error ❌");
    }
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-purple-100">
      <div className="bg-white p-8 shadow-xl rounded-xl w-[90%] max-w-md">
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-5">Login with OTP</h2>

        {step === 1 && (
          <>
            <input
              type="email"
              className="w-full border p-3 rounded-lg mb-4"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={sendOtp} className="w-full bg-purple-600 text-white py-3 rounded-lg">
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="number"
              className="w-full border p-3 rounded-lg mb-4"
              placeholder="Enter OTP"
              onChange={(e) => setUserOtp(e.target.value)}
            />
            <button onClick={verifyOtp} className="w-full bg-purple-600 text-white py-3 rounded-lg">
              Verify OTP
            </button>
          </>
        )}
      </div>
    </section>
  );
}
