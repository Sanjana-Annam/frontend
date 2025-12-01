import { useState, useEffect } from "react";

export default function Marketplace() {
  const API_BASE = import.meta.env.VITE_BACKEND_URL;

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products ❌");
        setLoading(false);
      });
  }, []);

  const filtered = products.filter((p) => {
    const matchCategory = category === "All" || p.category?.toLowerCase() === category.toLowerCase();
    const matchSearch =
      p.title?.toLowerCase().includes(search.toLowerCase()) ||
      p.desc?.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const categories = ["All", "Handicraft", "Clothing", "Food", "Home Decor", "Accessories"];
  const WHATSAPP_NUMBER = "917028858162";

  const sendToWhatsApp = (product) => {
    const msg = `Hello, I am interested in buying this product:\n\n🛍 ${product.title}\n💰 ₹${product.price}\n📦 ${product.category}\n👩 ${product.sellerName}\n📞 ${product.sellerPhone}\n\nMore: ${product.desc}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="container py-20">
      <h1 className="text-5xl font-extrabold text-center text-purple-700 mb-12">Marketplace 🛍</h1>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-1/2 px-6 py-3 rounded-xl border shadow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-6 py-2 rounded-full ${
              category === c ? "bg-purple-600 text-white" : "bg-purple-200 text-purple-700"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Results */}
      {loading && <p className="text-center text-xl">Loading ⏳...</p>}
      {error && <p className="text-center text-red-500 text-xl">{error}</p>}

      {!loading && !error && (
        filtered.length === 0 ? (
          <p className="text-center text-gray-600 text-xl">No matching products found 🔍</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-12">
            {filtered.map((p, idx) => (
              <div key={idx} className="bg-white shadow rounded-2xl p-5">
                <img src={p.image} alt={p.title} className="rounded-xl h-64 w-full object-cover" />
                <h3 className="text-2xl font-bold mt-4 text-purple-700">{p.title}</h3>
                <p className="text-gray-600 mt-2">{p.desc}</p>
                <div className="mt-3 text-gray-700 text-sm">
                  👩 {p.sellerName} • 📞 {p.sellerPhone}
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xl font-semibold">₹ {p.price}</span>
                  <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
                <button
                  onClick={() => sendToWhatsApp(p)}
                  className="mt-5 w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
                >
                  Order on WhatsApp
                </button>
              </div>
            ))}
          </div>
        )
      )}
    </section>
  );
}
