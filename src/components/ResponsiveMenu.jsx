import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const ResponsiveMenu = ({ openNav, setOpenNav, location, toggleDropdown }) => {
  const { user } = useUser();

  return (
    <div
      className={`
        ${openNav ? "left-0" : "-left-[100%]"}
        fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between
        px-8 pb-16 pt-16 md:hidden rounded-r-xl shadow-md transition-all duration-300

        bg-[var(--card-color)]   // DARK MODE ADDED
        text-[var(--text-color)] // DARK MODE ADDED
      `}
    >
      <div>
        {/* USER */}
        <div className="flex items-center justify-start gap-3">
          {user ? <UserButton size={50} /> : <FaUserCircle size={50} />}
          <div>
            <h1>Hello, {user?.firstName || "Guest"}</h1>
            <h1 className="text-sm text-gray-500">Premium User</h1>
          </div>
        </div>

        {/* LOCATION */}
        <div
          className="
          mt-6 flex items-center gap-2 p-3 rounded-lg border

          border-[var(--border-color)] // DARK MODE ADDED
        "
        >
          <MapPin className="text-red-500" />
          <div className="flex-1">
            {location ? (
              <div className="-space-y-1 text-sm">
                <p>{location.county}</p>
                <p className="text-gray-500">{location.state}</p>
              </div>
            ) : (
              <p className="font-semibold">Add Address</p>
            )}
          </div>
          <FaCaretDown className="cursor-pointer" onClick={toggleDropdown} />
        </div>

        {/* NAV LINKS */}
        <nav className="mt-10">
          <ul className="flex flex-col gap-7 text-xl font-semibold">
            <Link to={"/"} onClick={() => setOpenNav(false)}>
              <li className="hover:text-red-500 transition">Home</li>{" "}
              {/* DARK MODE ADDED */}
            </Link>

            <Link to={"/products"} onClick={() => setOpenNav(false)}>
              <li className="hover:text-red-500 transition">Products</li>
            </Link>

            <Link to={"/about"} onClick={() => setOpenNav(false)}>
              <li className="hover:text-red-500 transition">About</li>
            </Link>

            <Link to={"/contact"} onClick={() => setOpenNav(false)}>
              <li className="hover:text-red-500 transition">Contact</li>
            </Link>
          </ul>
        </nav>
      </div>

      {/* OPTIONAL FOOTER (mobile UX better) */}
      <div className="text-sm text-center text-gray-500">
        © 2026 Minihard {/* DARK MODE ADDED */}
      </div>
    </div>
  );
};

export default ResponsiveMenu;
