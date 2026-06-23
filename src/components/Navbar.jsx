import React, { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link, NavLink } from "react-router-dom";

import { MapPin, Sun, Moon } from "lucide-react"; // DARK MODE ADDED
import { FaCaretDown } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { useCart } from "../context/CartContext";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { useTheme } from "../context/ThemeContext"; // DARK MODE ADDED

const Navbar = ({ location, getLocation, openDropdown, setOpenDropdown }) => {
  const { cartItem } = useCart();
  const [openNav, setOpenNav] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div
      className="
      py-3 shadow-2xl px-4 md:px-0 
      sticky top-0 z-50 w-full  
      backdrop-blur-md

      bg-[var(--card-color)] 
      text-[var(--text-color)] 
    "
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* logo section */}
        <div className="flex gap-4 md:gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-xl md:text-2xl font-serif tracking-wider">
              <span className="text-2xl md:text-3xl text-red-500">MINI</span>
              hard
            </h1>
          </Link>

          {/* location */}
          <div className="md:flex items-center justify-center gap-2 hidden">
            <MapPin className="text-red-500" />
            <span className="font-semibold text-sm">
              {location ? (
                <div className="-space-y-2">
                  <p>{location.county}</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown className="cursor-pointer" onClick={toggleDropdown} />
          </div>

          {/* dropdown */}
          {openDropdown && (
            <div
              className="
              w-[90%] md:w-[250px] h-max shadow-2xl z-50 fixed
              top-20 left-1/2 -translate-x-1/2
              md:top-16 md:left-60 md:translate-x-0
              border p-5 rounded-md

              bg-[var(--card-color)] // DARK MODE ADDED
              border-[var(--border-color)] // DARK MODE ADDED
            "
            >
              <h1 className="font-semibold mb-4 text-xl flex justify-between items-center">
                Change Location
                <span onClick={toggleDropdown}>
                  <CgClose className="cursor-pointer" />
                </span>
              </h1>

              <button
                onClick={getLocation}
                className="
                w-full bg-gradient-to-r from-yellow-400 to-yellow-900 
                hover:from-yellow-900 hover:to-yellow-400 
                transition duration-300 hover:scale-105 
                text-white px-3 py-2 rounded-md
              "
              >
                Detect my location
              </button>
            </div>
          )}
        </div>

        {/* menu section */}
        <nav className="flex gap-4 md:gap-7 items-center">
          {/* links */}
          <ul className="md:flex gap-7 items-center text-lg md:text-xl font-semibold hidden">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-red-500" : ""}`
              }
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-red-500" : ""}`
              }
            >
              <li>Products</li>
            </NavLink>

            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-red-500" : ""}`
              }
            >
              <li>About</li>
            </NavLink>

            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-red-500" : ""}`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>

          {/* DARK MODE TOGGLE BUTTON */}
          <button
            onClick={toggleTheme}
            className="
            p-2 rounded-full border
            border-[var(--border-color)]
            hover:scale-110 transition
            cursor-pointer
          "
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* cart */}
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-6 w-6 md:h-7 md:w-7" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItem.length}
            </span>
          </Link>

          {/* auth */}
          <div className="hidden md:block">
            <SignedOut>
              <SignInButton className="bg-gradient-to-r from-yellow-400 to-yellow-900 text-white px-3 py-1 rounded-md" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* mobile menu icon */}
          {openNav ? (
            <HiMenuAlt3
              onClick={() => setOpenNav(false)}
              className="h-7 w-7 md:hidden"
            />
          ) : (
            <HiMenuAlt1
              onClick={() => setOpenNav(true)}
              className="h-7 w-7 md:hidden"
            />
          )}
        </nav>
      </div>

      {/* mobile menu */}
      <ResponsiveMenu
        openNav={openNav}
        setOpenNav={setOpenNav}
        location={location}
        toggleDropdown={toggleDropdown}
      />
    </div>
  );
};

export default Navbar;
