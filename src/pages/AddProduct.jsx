import { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config";   // <-- using config.js

export default function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    desc: "",
    category: "",
    sellerName: "",
    sellerPhone: "",
  });
  const [image, setImage] = useState(null);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitProduct = async (e) => {
    e.preventDefault();
    if (!image) return alert("Upload an image");

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    data.append("image", image);

    try {
      const res = await axios.post(`${API_BASE_URL}/add-product`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 201) {
        alert("Product uploaded successfully 🎉");
      } else {
        alert("Upload failed ❌");
      }
    } catch (error) {
      alert("Server error ❌");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={submitProduct}
      className="max-w-2xl mx-auto p-8 space-y-5 bg-white shadow rounded-xl"
    >
      <h2 className="text-3xl font-bold text-purple-700 text-center mb-4">
        Add Product
      </h2>

      {["title", "price", "desc", "category", "sellerName", "sellerPhone"].map((field) => (
        <input
          key={field}
          name={field}
          required
          placeholder={field}
          onChange={handleInput}
          className="w-full border p-3 rounded-lg"
        />
      ))}

      <input
        type="file"
        required
        onChange={(e) => setImage(e.target.files[0])}
        className="w-full border p-3 rounded-lg"
      />

      <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold">
        Upload Product
      </button>
    </form>
  );
}
