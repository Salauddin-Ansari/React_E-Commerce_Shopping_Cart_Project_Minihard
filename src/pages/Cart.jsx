import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import emptyCart from "../assets/empty-cart.png";

const Cart = ({ location, getLocation }) => {
  const { cartItem, updateQuantity, deleteItem } = useCart();
  const navigate = useNavigate();

  // Total price with quantity
  const subtotal = cartItem.reduce(
    (total, item) => total + item.priceCents * item.quantity,
    0,
  );

  const deliveryCharge = 0;
  const handlingCharge = 5;

  // Promo code
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyPromo = () => {
    if (promoCode.toUpperCase() === "SAVE10") {
      setDiscount(Math.round(subtotal * 0.1));
    } else if (promoCode.toUpperCase() === "FIXED20") {
      setDiscount(20);
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };

  const grandTotal = subtotal + deliveryCharge + handlingCharge - discount;

  // Delivery Form
  const [delivery, setDelivery] = useState({
    fullName: "",
    address: "",
    state: "",
    postcode: "",
    country: "",
    phone: "",
  });

  // Populate location automatically
  useEffect(() => {
    if (location) {
      setDelivery((prev) => ({
        ...prev,
        address: location.county || "",
        state: location.state || "",
        postcode: location.postcode || "",
        country: location.country || "",
      }));
    }
  }, [location]);

  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;

    setDelivery((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitDelivery = (e) => {
    e.preventDefault();

    console.log("Delivery info submitted:", delivery);
    alert("Delivery info saved!");
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5 px-4 md:px-0">
      {cartItem.length > 0 ? (
        <div>
          <h1 className="font-bold text-2xl dark:text-[var(--text-color)]">
            My Cart ({cartItem.length})
          </h1>

          {/* Cart Items */}
          <div className="mt-10">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="
                  bg-gray-100
                  dark:bg-[var(--card-color)]
                  dark:text-[var(--text-color)]
                  p-5 rounded-md flex items-center justify-between mt-3 w-full
                "
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-md object-contain"
                  />

                  <div>
                    <h1 className="md:w-[300px] line-clamp-3">{item.name}</h1>

                    <p className="text-yellow-600 font-semibold text-lg">
                      ₹{item.priceCents}
                    </p>
                  </div>
                </div>

                <div className="flex items-center sm:ml-20 gap-50">
                  <div
                    className="
                      bg-gradient-to-r from-yellow-400 to-yellow-900
                      hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-400
                      transition-all duration-300
                      transform text-white flex items-center gap-4
                      p-2 rounded-md font-bold text-xl
                    "
                  >
                    <button
                      onClick={() => updateQuantity(item.id, "decrease")}
                      className="cursor-pointer"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, "increase")}
                      className="cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <span
                  onClick={() => deleteItem(item.id)}
                  className="
                    hover:bg-white/60
                    dark:hover:bg-slate-700
                    transition-all rounded-full p-3 hover:shadow-2xl
                  "
                >
                  <FaRegTrashAlt className="text-yellow-400 text-2xl cursor-pointer" />
                </span>
              </div>
            ))}
          </div>
          
          {/* Delivery Info & Bill Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
            {/* Delivery Form */}
            <form
              onSubmit={handleSubmitDelivery}
              className="
                bg-gray-100
                dark:bg-[var(--card-color)]
                dark:text-[var(--text-color)]
                rounded-md p-7 mt-4 space-y-2
              "
            >
              <h1 className="text-gray-800 dark:text-[var(--text-color)] font-bold text-xl">
                Delivery Info
              </h1>

              <div className="flex flex-col space-y-1">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={delivery.fullName}
                  onChange={handleDeliveryChange}
                  placeholder="Enter your name"
                  className="p-2 rounded-md dark:bg-[var(--bg-color)] dark:text-[var(--text-color)]"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={delivery.address}
                  onChange={handleDeliveryChange}
                  placeholder="Enter your address"
                  className="p-2 rounded-md dark:bg-[var(--bg-color)] dark:text-[var(--text-color)]"
                />
              </div>

              <div className="flex w-full gap-5">
                <div className="flex flex-col space-y-1 w-full">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={delivery.state}
                    onChange={handleDeliveryChange}
                    placeholder="Enter your state"
                    className="p-2 rounded-md w-full dark:bg-[var(--bg-color)] dark:text-[var(--text-color)]"
                  />
                </div>

                <div className="flex flex-col space-y-1 w-full">
                  <label>Post Code</label>
                  <input
                    type="text"
                    name="postcode"
                    value={delivery.postcode}
                    onChange={handleDeliveryChange}
                    placeholder="Enter your postcode"
                    className="p-2 rounded-md w-full dark:bg-[var(--bg-color)] dark:text-[var(--text-color)]"
                  />
                </div>
              </div>

              <div className="flex w-full gap-5">
                <div className="flex flex-col space-y-1 w-full">
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    value={delivery.country}
                    onChange={handleDeliveryChange}
                    placeholder="Enter your country"
                    className="p-2 rounded-md w-full dark:bg-[var(--bg-color)] dark:text-[var(--text-color)]"
                  />
                </div>

                <div className="flex flex-col space-y-1 w-full">
                  <label>Phone No</label>
                  <input
                    type="text"
                    name="phone"
                    value={delivery.phone}
                    onChange={handleDeliveryChange}
                    placeholder="Enter your Number"
                    className="p-2 rounded-md w-full dark:bg-[var(--bg-color)] dark:text-[var(--text-color)]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="
                  bg-gradient-to-r from-yellow-400 to-yellow-900
                  hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-400
                  transition-all duration-300 transform hover:scale-105
                  text-white px-3 py-2 rounded-md mt-3 cursor-pointer
                "
              >
                Submit
              </button>

              <div className="flex items-center justify-center w-full text-gray-700 dark:text-gray-300 mb-3">
                ----------OR----------
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={getLocation}
                  className="
                    bg-gradient-to-r from-yellow-400 to-yellow-900
                    hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-400
                    transition-all duration-300 transform hover:scale-105
                    text-white px-3 py-2 rounded-md cursor-pointer
                  "
                >
                  Detect Location
                </button>
              </div>
            </form>

            {/* Bill Details */}
            <div
              className="
                bg-white
                text-gray-800
                dark:bg-[var(--card-color)]
                dark:text-[var(--text-color)]
                border border-gray-100
                dark:border-[var(--border-color)]
                shadow-xl rounded-md p-7 mt-4 space-y-2 h-max
              "
            >
              <h1 className="text-gray-800 dark:text-[var(--text-color)] font-bold text-xl">
                Bill Details
              </h1>

              <div className="flex justify-between items-center">
                <span className="flex gap-1 items-center">
                  <LuNotebookText />
                  Items total
                </span>
                <p>₹{subtotal}</p>
              </div>

              <div className="flex justify-between items-center">
                <span className="flex gap-1 items-center">
                  <MdDeliveryDining />
                  Delivery Charge
                </span>

                <p className="text-yellow-600 font-semibold">
                  <span className="text-gray-600 dark:text-gray-400 line-through">
                    ₹25
                  </span>{" "}
                  Free
                </p>
              </div>

              <div className="flex justify-between items-center">
                <span className="flex gap-1 items-center">
                  <GiShoppingBag />
                  Handling Charge
                </span>

                <p className="text-yellow-600 font-semibold">
                  ₹{handlingCharge}
                </p>
              </div>

              {discount > 0 && (
                <div className="flex justify-between items-center text-green-600 dark:text-green-400">
                  <span>Promo Discount</span>
                  <p>- ₹{discount}</p>
                </div>
              )}

              <hr className="text-gray-200 dark:text-[var(--border-color)] mt-2" />

              <div className="flex justify-between items-center font-bold text-lg">
                <h1>Grand Total</h1>
                <p>₹{grandTotal}</p>
              </div>

              <div>
                <h1 className="font-semibold mb-3 mt-7">Apply Promo Code</h1>

                <div className="flex gap-3">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code (e.g. SAVE10)"
                    className="p-2 rounded-md w-full dark:bg-[var(--bg-color)] dark:text-[var(--text-color)]"
                  />

                  <button
                    type="button"
                    onClick={applyPromo}
                    className="
                      bg-white
                      dark:bg-[var(--bg-color)]
                      text-black
                      dark:text-[var(--text-color)]
                      border border-gray-200
                      dark:border-[var(--border-color)]
                      px-4 cursor-pointer py-1 rounded-md
                    "
                  >
                    Apply
                  </button>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="
                  bg-gradient-to-r from-yellow-400 to-yellow-900
                  hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-400
                  transition-all duration-300 transform hover:scale-105
                  text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3
                "
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 justify-center items-center h-[600px]">
          <h1 className="text-yellow-600 dark:text-yellow-400 font-bold text-5xl">
            Oh no! Your Cart is empty
          </h1>

          <img src={emptyCart} alt="Empty cart" className="w-[400px]" />

          <button
            onClick={() => navigate("/products")}
            className="
              bg-gradient-to-r from-yellow-400 to-yellow-900
              hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-400
              transition-all duration-300 transform hover:scale-105
              text-white px-3 py-2 rounded-md cursor-pointer
            "
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
