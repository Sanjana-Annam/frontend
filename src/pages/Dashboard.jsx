import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!email) navigate("/login");

    const saved = JSON.parse(localStorage.getItem("registrations")) || [];
    const filtered = saved.filter((r) => r.owner === email);
    setData(filtered);
  }, []);

  return (
    <section className="container py-24">
      <h1 className="text-5xl font-extrabold text-center text-gray-900">
        My Program Registrations
      </h1>

      {data.length === 0 ? (
        <p className="text-center mt-10 text-gray-500 text-lg">
          No registrations found yet.
        </p>
      ) : (
        <div className="overflow-x-auto mt-12">
          <table className="w-full border rounded-xl shadow text-center">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Location</th>
                <th className="p-3">Program</th>
                <th className="p-3">Skills</th>
                <th className="p-3">Message</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i} className="border-b hover:bg-purple-50 transition">
                  <td className="p-3">{d.name}</td>
                  <td className="p-3">{d.phone}</td>
                  <td className="p-3">{d.location}</td>
                  <td className="p-3">{d.program}</td>
                  <td className="p-3">{d.skills}</td>
                  <td className="p-3">{d.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
