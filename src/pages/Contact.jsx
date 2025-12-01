export default function Contact() {
  return (
    <section className="container py-24 max-w-3xl mx-auto">
      <h1 className="text-5xl font-extrabold text-gray-900 text-center">
        Contact Us
      </h1>

      <p className="text-center text-gray-600 mt-5 text-lg">
        We’d love to hear from you! Fill out the form and our team will connect soon.
      </p>

      <form className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-lg border mt-14 space-y-6">
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Full Name</label>
          <input className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none" />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Email</label>
          <input type="email" className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none" />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Message</label>
          <textarea rows="4" className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-purple-600 outline-none"></textarea>
        </div>

        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
