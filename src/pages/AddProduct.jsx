import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [sellerName, setSellerName] = useState("");
  const [sellerPhone, setSellerPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("desc", desc);
    formData.append("category", category);
    formData.append("sellerName", sellerName);
    formData.append("sellerPhone", sellerPhone);
    formData.append("image", image);

    await fetch("https://backend-production-24e7.up.railway.app/add-product"
, {

      method: "POST",
      body: formData,
    });

    alert("Product Added Successfully! 🎉 Redirecting...");
    navigate("/marketplace");
  };

  const inputClass =
    "w-full mt-2 p-3 border border-purple-300 rounded-xl bg-white/60 backdrop-blur-md shadow-sm " +
    "focus:ring-2 focus:ring-purple-400 focus:border-purple-500 outline-none transition-all duration-300";

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 flex justify-center items-center">
      <div className="w-[95%] max-w-2xl bg-white/40 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/40">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 drop-shadow mb-10">
          Add New Product ✨
        </h1>

        <form onSubmit={handleSubmit} className="space-y-7">
          <div>
            <label className="text-lg font-medium text-gray-800">Seller Name</label>
            <input
              type="text"
              className={inputClass}
              value={sellerName}
              onChange={(e) => setSellerName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-lg font-medium text-gray-800">Seller Mobile Number</label>
            <input
              type="text"
              className={inputClass}
              value={sellerPhone}
              onChange={(e) => setSellerPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-lg font-medium text-gray-800">Product Title</label>
            <input
              type="text"
              className={inputClass}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-lg font-medium text-gray-800">Price (₹)</label>
            <input
              type="number"
              className={inputClass}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-lg font-medium text-gray-800">Category</label>
            <input
              type="text"
              className={inputClass}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-lg font-medium text-gray-800">Description</label>
            <textarea
              className={inputClass}
              rows="3"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <label className="text-lg font-medium text-gray-800">Product Image</label>
            <input
              type="file"
              accept="image/*"
              className={inputClass}
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>

          <button
            className="w-full py-3 text-xl font-semibold rounded-2xl bg-purple-600 text-white 
                       hover:bg-purple-700 hover:shadow-xl active:scale-95 transition-all duration-300"
          >
            🚀 Upload Product
          </button>
        </form>
      </div>
    </section>
  );
}
