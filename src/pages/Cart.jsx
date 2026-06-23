import React from "react";
import { useCart } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import emptyCart from "../assets/empty-cart.png";

const Cart = ({ location, getLocation }) => {
  const { cartItem, updateQuantity, deleteItem } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.priceCents,
    0,
  );

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5 px-4 md:px-0">
      {cartItem.length > 0 ? (
        <div>
          <h1 className="font-bold text-2xl dark:text-[var(--text-color)]">
            My Cart ({cartItem.length})
          </h1>

          <div>
            <div className="mt-10">
              {cartItem.map((item, index) => {
                return (
                  <div
                    key={index}
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
                        <h1 className="md:w-[300px] line-clamp-3">
                          {item.name}
                        </h1>

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
                          onClick={() =>
                            updateQuantity(cartItem, item.id, "decrease")
                          }
                          className="cursor-pointer"
                        >
                          -
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            updateQuantity(cartItem, item.id, "increase")
                          }
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
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
              <div
                className="
                  bg-gray-100
                  dark:bg-[var(--card-color)]
                  dark:text-[var(--text-color)]
                  rounded-md p-7 mt-4 space-y-2
                "
              >
                <h1
                  className="
                    text-gray-800
                    dark:text-[var(--text-color)]
                    font-bold text-xl
                  "
                >
                  Delivery Info
                </h1>

                <div className="flex flex-col space-y-1">
                  <label className="mt-1">Full Name</label>

                  <input
                    type="text"
                    value={user?.fullName}
                    placeholder="Enter your name"
                    className="p-2 rounded-md"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="mt-1">Address</label>

                  <input
                    type="text"
                    value={location?.county}
                    placeholder="Enter your address"
                    className="p-2 rounded-md"
                  />
                </div>

                <div className="flex w-full gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label className="mt-1">State</label>

                    <input
                      type="text"
                      value={location?.state}
                      placeholder="Enter your state"
                      className="p-2 rounded-md w-full"
                    />
                  </div>

                  <div className="flex flex-col space-y-1 w-full">
                    <label className="mt-1">Post Code</label>

                    <input
                      type="text"
                      value={location?.postcode}
                      placeholder="Enter your postcode"
                      className="p-2 rounded-md w-full"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="" className="mt-1">
                      Country
                    </label>
                    <input
                      type="text"
                      value={location?.country}
                      placeholder="Enter your country"
                      className="p-2 rounded-md w-full"
                    />
                  </div>

                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="" className="mt-1">
                      Phone No
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Number"
                      className="p-2 rounded-md w-full"
                    />
                  </div>
                </div>

                <button
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
                    className="
                      bg-gradient-to-r from-yellow-400 to-yellow-900
                      hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-400
                      transition-all duration-300 transform hover:scale-105
                      text-white px-3 py-2 rounded-md cursor-pointer
                    "
                    onClick={getLocation}
                  >
                    Detect Location
                  </button>
                </div>
              </div>

              <div
                className="
                  bg-white
                  dark:bg-[var(--card-color)]
                  dark:text-[var(--text-color)]
                  border border-gray-100
                  dark:border-[var(--border-color)]
                  shadow-xl rounded-md p-7 mt-4 space-y-2 h-max
                "
              >
                <h1
                  className="
                    text-gray-800
                    dark:text-[var(--text-color)]
                    font-bold text-xl
                  "
                >
                  Bill Details
                </h1>

                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700 dark:text-gray-300">
                    <span className="flex gap-1 items-center justify-center">
                      <LuNotebookText />
                      <span>Items total</span>
                    </span>
                  </h1>
                  <p>₹{totalPrice}</p>
                </div>

                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700 dark:text-gray-300">
                    <span>
                      <MdDeliveryDining />
                    </span>
                    <span>Delivery Charge</span>
                  </h1>

                  <p className="text-yellow-600 font-semibold">
                    <span className="text-gray-600 dark:text-gray-400 line-through">
                      ₹25
                    </span>
                    Free
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700 dark:text-gray-300">
                    <span>
                      <GiShoppingBag />
                    </span>
                    Handling Charge
                  </h1>

                  <p className="text-yellow-600 font-semibold">₹5</p>
                </div>

                <hr className="text-gray-200 dark:text-[var(--border-color)] mt-2" />

                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-lg">Grand Total</h1>
                  <p>₹{totalPrice + 5}</p>
                </div>

                <div>
                  <h1 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 mt-7">
                    Apply Promo Code
                  </h1>

                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="p-2 rounded-md w-full"
                    />

                    <button
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
        </div>
      ) : (
        <div className="flex flex-col gap-3 justify-center items-center h-[600px]">
          <h1
            className="
              text-yellow-600
              dark:text-yellow-400
              font-bold text-5xl
            "
          >
            Oh no! Your Cart is empty
          </h1>

          <img src={emptyCart} alt="" className="w-[400px]" />

          <button
            onClick={() => navigate("/products")}
            className="
              bg-gradient-to-r from-yellow-400 to-yellow-900
              hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-400
              transition-all duration-300 transform hover:scale-105
              text-white px-3 py-2 rounded-md cursor-pointer
            "
          >
            Continue Shipping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
