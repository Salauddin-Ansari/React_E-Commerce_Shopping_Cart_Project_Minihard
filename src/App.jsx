import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct.jsx";
import CategoryProduct from "./pages/CategoryProduct.jsx";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { useCart } from "./context/CartContext.jsx";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { theme } = useTheme();

  const [location, setLocation] = useState();
  const [openDropdown, setOpenDropdown] = useState(false);

  const { cartItem, setCartItem } = useCart();

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

      try {
        const response = await axios.get(url);
        const exactLocation = response.data.address;

        setLocation(exactLocation);
        setOpenDropdown(false);
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");

    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <BrowserRouter>
        <Navbar
          location={location}
          getLocation={getLocation}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />

          <Route path="/products/:id" element={<SingleProduct />} />

          <Route path="/category/:category" element={<CategoryProduct />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          
          <Route
            path="/cart"
            element={<Cart location={location} getLocation={getLocation} />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
