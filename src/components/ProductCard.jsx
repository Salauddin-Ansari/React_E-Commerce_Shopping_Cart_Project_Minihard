import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div
      className="
      ml-1 relative rounded-2xl cursor-pointer p-2 h-max
      transition-all hover:scale-105 hover:shadow-2xl

      bg-[var(--card-color)] // DARK MODE ADDED
      border border-[var(--border-color)] // DARK MODE ADDED
    "
    >
      <div
        className="
        w-full h-[200px] flex items-center justify-center

        bg-[var(--bg-color)] 
      "
      >
        <img
          onClick={() => navigate(`/products/${product.id}`)}
          src={product.image}
          alt=""
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <h1 className="line-clamp-1 min-h-[48px] p-1 font-semibold">
        {product.name}
      </h1>

      <p
        className="
        my-1 text-lg font-bold

        text-[var(--text-color)] // DARK MODE ADDED
      "
      >
        ₹{product.priceCents}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="
        bg-gradient-to-r from-yellow-400 to-yellow-900 
        hover:from-yellow-900 hover:to-yellow-400 
        transition-all duration-300 transform hover:scale-105 
        px-3 py-2 md:text-lg text-xl rounded-md text-white w-full
        flex gap-1 items-center justify-center font-semibold
      "
      >
        <IoCartOutline className="w-6 h-6" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
