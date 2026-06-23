import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductListView = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // ✅ ADD THIS (same as SingleProduct.jsx)
  const originalPrice = Math.round(
    product.priceCents + (product.priceCents * (product.discount || 0)) / 100,
  );
  return (
    <div className="space-y-4 mt-2 rounded-md">
      <div className="bg-gray-100 flex gap-7 items-center p-2 rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="md:h-60 md:w-60 h-25 w-25 object-contain rounded-md cursor-pointer"
          onClick={() => navigate(`/products/${product.id}`)}
        />
        <div className="space-y-2">
          <h1 className="font-bold md:text-xl text-lg line-clamp-3 hover:text-red-400 md:w-full w-[220px]">
            {product.name}
          </h1>
          {/* <p className="font-semibold flex items-center text-lg">
            <span>₹{product.priceCents}</span>({product.discount}% off)
          </p> */}
          <p className="font-semibold flex items-center md:text-lg text-sm">
            <span className="md:text-3xl text-2xl">₹{product.priceCents}</span>
            <span className="line-through text-gray-500 ml-2">
              ₹{originalPrice}
            </span>
            <span className="text-yellow-600 ml-2">
              ({product.discount || 0}% OFF)
            </span>
          </p>

          <p className="font-semibold text-sm">
            FREE delivery <span className="font-semibold">Fri, 31 Apr</span>
            <br />
            Or fastest delivery{" "}
            <span className="font-semibold">Tomorrow, 30 Apr</span>
          </p>
          <button
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-yellow-400 to-yellow-900 
  hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-400 
  transition-all duration-300 transform hover:scale-105 text-white px-3 py-1 rounded-md cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
