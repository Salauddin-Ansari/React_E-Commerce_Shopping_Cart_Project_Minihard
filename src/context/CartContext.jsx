import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  // Add To Cart
  const addToCart = (product) => {
    const itemInCart = cartItem.find((item) => item.id === product.id);

    if (itemInCart) {
      const updatedCart = cartItem.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );

      setCartItem(updatedCart);
      toast.success("Product quantity increased");
    } else {
      setCartItem([
        ...cartItem,
        {
          ...product,
          quantity: 1,
        },
      ]);

      toast.success("Product added to cart");
    }
  };

  // Update Quantity
  const updateQuantity = (id, action) => {
    const updatedCart = cartItem
      .map((item) => {
        if (item.id === id) {
          let newQuantity = item.quantity;

          if (action === "increase") {
            newQuantity += 1;
          }

          if (action === "decrease") {
            newQuantity -= 1;
          }

          return newQuantity > 0
            ? {
                ...item,
                quantity: newQuantity,
              }
            : null;
        }

        return item;
      })
      .filter(Boolean);

    setCartItem(updatedCart);

    if (action === "increase") {
      toast.success("Quantity increased");
    }

    if (action === "decrease") {
      toast.success("Quantity decreased");
    }
  };

  // Delete Item
  const deleteItem = (id) => {
    const updatedCart = cartItem.filter((item) => item.id !== id);

    setCartItem(updatedCart);
    toast.success("Product removed from cart");
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        addToCart,
        updateQuantity,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
