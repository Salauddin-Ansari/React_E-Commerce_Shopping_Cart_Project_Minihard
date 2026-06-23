import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    const itemInCart = cartItem.find((item) => item.id === product.id);
    if (itemInCart) {
      // Increase quantity if already in cart
      const updateCart = cartItem.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setCartItem(updateCart);
      toast.success("Product Quantity increased");
    } else {
      // Add new item with quantity
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
      toast.success("Product is added to your cart!");
    }
  };

  const updateQuantity = (cartItem, id, action) => {
    setCartItem(
      cartItem
        .map((item) => {
          if (item.id === id) {
            let newUnit = item.quantity;
            if (action === "increase") {
              newUnit = newUnit + 1;
              toast.success("Quantity is increased");
            } else if (action === "decrease") {
              newUnit = newUnit - 1;
              toast.success("Quantity is decreased");
            }
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter((item) => item != null), // remove item quantity 0
    );
  };

  const deleteItem = (id) => {
    setCartItem(cartItem.filter((item) => item.id !== id));
    toast.success("Product removed from your Cart");
  };
  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
