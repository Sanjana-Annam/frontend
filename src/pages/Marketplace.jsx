import { useState, useEffect } from "react";

export default function Marketplace() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("https://backend-production-146f.up.railway.app/products")


      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtered = products.filter((p) => {
    const matchesCategory = category === "All" || p.category.toLowerCase() === category.toLowerCase();
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ["All", "Handicraft", "Clothing", "Food", "Home Decor", "Accessories"];

  // Replace with the business WhatsApp number (with country code)
  const WHATSAPP_NUMBER = "917028858162"; // example: 91 + mobile number

  const sendToWhatsApp = (product) => {
    const msg = `Hello, I am interested in buying this product:\n\n🛍 *${product.title}*\n💰 Price: ₹${product.price}\n📦 Category: ${product.category}\n\nMore details: ${product.desc}\n\nPlease guide me for ordering.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="container py-20">
      <h1 className="text-5xl font-extrabold text-center text-purple-700 mb-12">
        Marketplace 🛍
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-1/2 px-6 py-3 rounded-xl border border-purple-300 shadow focus:ring-4 ring-purple-300 outline-none text-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-14">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-6 py-2 rounded-full text-sm md:text-base font-semibold transition
              ${
                category === c
                  ? "bg-purple-600 text-white shadow-md scale-105"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">No matching products found 🔍</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-12">
          {filtered.map((p, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-5 hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <img
                src={p.image}
                alt={p.title}
                className="rounded-xl h-64 w-full object-cover shadow"
              />
              <h3 className="text-2xl font-bold mt-4 text-purple-700">{p.title}</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">{p.desc}</p>

              <div className="flex justify-between items-center mt-4">
                <div className="mt-3 text-gray-700 text-sm">
                    👩 Seller: <span className="font-semibold text-purple-700">{p.sellerName}</span>
                  </div>
                  <div className="text-gray-700 text-sm">
                    📞 Contact: <span className="font-semibold">{p.sellerPhone}</span>
                  </div>

                <span className="text-xl font-semibold text-gray-900">₹ {p.price}</span>
                <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  {p.category}
                </span>
              </div>

              {/* WhatsApp Order Button */}
              <button
                onClick={() => sendToWhatsApp(p)}
                className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-lg font-semibold flex justify-center gap-2 items-center transition focus:ring-4 ring-green-300"
              >
                <span>📩 Order on WhatsApp</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
