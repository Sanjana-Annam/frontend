export default function About() {
  return (
    <section className="container py-24">
      <h1 className="text-5xl font-extrabold text-gray-900 text-center">
        About WEEP
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
        WEEP (Women Entrepreneurship Empowerment Program) is dedicated to
        empowering women in rural & semi-urban communities by providing skills,
        mentorship, business knowledge, digital literacy, and marketplace access.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-20">
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md border hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To support women in transforming their talents and ideas into
            self-sustaining businesses that generate income and confidence.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md border hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">Our Vision</h2>
          <p className="text-gray-700">
            A world where every woman has the economic freedom and digital
            empowerment to thrive in society and lead with dignity.
          </p>
        </div>
      </div>
    </section>
  );
}
