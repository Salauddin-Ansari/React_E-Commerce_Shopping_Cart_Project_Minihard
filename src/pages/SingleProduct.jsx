import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../assets/Loading4.webm";
import BreadCrums from "../components/BreadCrums";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const { addToCart } = useCart();

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json",
      );

      const product = res.data.find((item) => item.id == id);

      if (!product) {
        console.error("❌ Product not found");
        return;
      }

      const updatedProduct = {
        ...product,
        discount: (product.id % 30) + 10,
      };

      setSingleProduct(updatedProduct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  if (!singleProduct) {
    return (
      <div className="flex items-center justify-center h-screen">
        <video muted autoPlay loop>
          <source src={Loading} type="video/webm" />
        </video>
      </div>
    );
  }

  const originalPrice = Math.round(
    singleProduct.priceCents +
      (singleProduct.priceCents * singleProduct.discount) / 100,
  );

  return (
    <div className="px-4 pb-4 md:px-0">
      <BreadCrums title={singleProduct.name} />

      <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div className="w-full flex justify-center">
          <img
            src={singleProduct.image}
            alt={singleProduct.name}
            className="rounded-2xl w-[400px] h-[400px] object-contain"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col gap-6">
          <h1
            className="md:text-3xl text-xl font-bold"
            style={{ color: "var(--text-color)" }}
          >
            {singleProduct.name}
          </h1>

          <div style={{ color: "var(--text-color)" }} className="opacity-80">
            {(singleProduct.brand || "").toUpperCase()}{" "}
            {(singleProduct.category || "").toUpperCase()}{" "}
            {singleProduct.model || ""}
          </div>

          <p className="text-xl text-yellow-600 font-bold">
            ₹{singleProduct.priceCents}
            <span
              className="line-through ml-2"
              style={{ color: "var(--text-color)" }}
            >
              ₹{originalPrice}
            </span>
            <span
              className="
                bg-gradient-to-r from-yellow-400 to-yellow-900
                hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-400
                transition-all duration-300
                text-white px-4 py-2 rounded-full ml-2
              "
            >
              {singleProduct.discount}% OFF
            </span>
          </p>

          <p style={{ color: "var(--text-color)" }} className="opacity-80">
            {singleProduct.description || "No description available"}
          </p>

          {/* QUANTITY */}
          <div className="flex items-center gap-4">
            <label
              className="text-sm font-medium"
              style={{ color: "var(--text-color)" }}
            >
              Quantity
            </label>

            <input
              type="number"
              min={1}
              defaultValue={1}
              className="w-20 rounded-lg px-3 py-1 border"
              style={{
                backgroundColor: "var(--card-color)",
                color: "var(--text-color)",
                borderColor: "var(--border-color)",
              }}
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={() => addToCart(singleProduct)}
            className="
              px-6 flex items-center justify-center gap-2 py-2 text-lg
              bg-gradient-to-r from-yellow-400 to-yellow-900
              hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-400
              transition-all duration-300 transform hover:scale-105
              text-white rounded-md cursor-pointer
            "
          >
            <IoCartOutline className="w-6 h-6" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
