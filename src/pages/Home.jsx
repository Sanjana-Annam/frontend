export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-pink-200 via-purple-200 to-pink-100 pt-24 pb-32 overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl"></div>

        <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Text Block */}
          <div>
            <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
              Empowering Women to Build <br />
              <span className="text-purple-700">Sustainable Businesses</span>
            </h1>

            <p className="mt-6 text-gray-700 text-lg">
              Skill training × entrepreneurial mindset × digital empowerment.
              WEEP helps women turn inspiration into income and leadership.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="/programs"
                className="px-7 py-3 rounded-xl bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 hover:shadow-xl hover:scale-[1.03] transition"
              >
                Explore Programs
              </a>

              <a
                href="/contact"
                className="px-7 py-3 rounded-xl border-2 border-purple-600 text-purple-700 font-semibold hover:bg-purple-50 hover:scale-[1.03] transition"
              >
                Become a Partner
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <img
              src="/img.png"
              alt="Women Training"
              className="rounded-3xl shadow-2xl w-full max-h-[450px] object-cover border-4 border-white"
            />
          </div>

        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="container py-28">
        <h2 className="text-center text-4xl font-extrabold text-gray-900">
          What We Offer
        </h2>

        <p className="text-center text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          A complete ecosystem to help women start, grow & sustain businesses with confidence.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {[
            { title: "Vocational Training", desc: "Tailoring, food processing, beauty services & more." },
            { title: "Entrepreneurship Skills", desc: "Branding, pricing, customer engagement & business planning." },
            { title: "Digital Literacy", desc: "UPI, online banking, WhatsApp catalog & e-commerce skills." },
            { title: "Funding Support", desc: "Microloans, Mudra loans & financial coaching." },
            { title: "Mentorship", desc: "Guidance from inspiring and successful women entrepreneurs." },
            { title: "Marketplace Access", desc: "Sell women-made products confidently online." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-md p-7 rounded-2xl shadow-md border hover:shadow-2xl hover:-translate-y-2 transition cursor-pointer"
            >
              <h3 className="text-purple-700 text-2xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
              

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
