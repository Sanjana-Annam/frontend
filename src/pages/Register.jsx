import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    program: "",
    skills: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // Save to registrations (dashboard purpose)
  const saved = JSON.parse(localStorage.getItem("registrations")) || [];
  saved.push(form);
  localStorage.setItem("registrations", JSON.stringify(saved));

  // Save to profile (profile page purpose)
  localStorage.setItem("profileData", JSON.stringify(form));

  alert("Registration submitted successfully!");
  setForm({
    name: "",
    phone: "",
    location: "",
    program: "",
    skills: "",
    message: ""
  });
};


  return (
    <section className="container py-24 max-w-3xl mx-auto">
      <h1 className="text-5xl font-extrabold text-center text-gray-900">Program Registration</h1>
      <p className="text-center text-gray-600 mt-4 text-lg">
        Enroll in Entrepreneurship & Skill Programs
      </p>

      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-lg mt-14 space-y-6">
        {["name", "phone", "location", "skills"].map((f) => (
          <input
            key={f}
            name={f}
            placeholder={f}
            value={form[f]}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />
        ))}

        <select
          name="program"
          value={form.program}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
          required
        >
          <option value="">Select Program</option>
          <option>Vocational Skills</option>
          <option>Entrepreneurship Training</option>
          <option>Digital Training</option>
          <option>Financial Planning</option>
        </select>

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="3"
          className="w-full border p-3 rounded-xl"
          placeholder="Message"
        />

        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl">
          Submit Registration
        </button>
      </form>
    </section>
  );
}
