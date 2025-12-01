import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OtpLogin() {
  const [email, setEmail] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const sendOtp = async () => {
    if (!email) return alert("Enter email");

    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otp);

    try {
      const res = await fetch("https://backend-production-146f.up.railway.app/api/send-otp"
, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
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

  const verifyOtp = () => {
    if (userOtp === generatedOtp) {
      localStorage.setItem("userEmail", email);
      window.dispatchEvent(new Event("storage"));
      navigate("/dashboard");
    } else {
      alert("Invalid OTP ❌");
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
