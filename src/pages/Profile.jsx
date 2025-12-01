import { useEffect, useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("profileData"));
    setProfile(data);
  }, []);

  if (!profile) {
    return (
      <section className="container py-24 text-center">
        <h2 className="text-3xl font-bold text-gray-700">No Profile Found</h2>
        <p className="mt-2 text-gray-500">
          Please complete the registration form first.
        </p>
      </section>
    );
  }

  return (
    <section className="container py-24 max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold text-purple-700 text-center mb-10">
        User Profile 👤
      </h1>

      <div className="bg-white/80 backdrop-blur p-10 rounded-3xl shadow-md space-y-4 text-lg">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
       
      </div>
    </section>
  );
}
