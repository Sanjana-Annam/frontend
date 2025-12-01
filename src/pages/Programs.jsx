export default function Programs() {
  const programs = [
    {
      title: "Vocational Skill Training",
      desc: "Tailoring, food processing, beauty services, arts & crafts."
    },
    {
      title: "Entrepreneurship Training",
      desc: "Branding, pricing, sales, customer engagement & business planning."
    },
    {
      title: "Digital Empowerment",
      desc: "UPI, WhatsApp Business, social media marketing, e-commerce."
    },
    {
      title: "Financial & Loan Support",
      desc: "Mudra loans, micro-financing, grants & fundraising guidance."
    },
  ];

  return (
    <section className="container py-24">
      <h1 className="text-5xl font-extrabold text-gray-900 text-center">
        Our Programs
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
        A learning + earning ecosystem designed to help women become
        self-sustainable entrepreneurs.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {programs.map((p, i) => (
          <div key={i}
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md border hover:-translate-y-2 hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">{p.title}</h2>
            <p className="text-gray-700">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
