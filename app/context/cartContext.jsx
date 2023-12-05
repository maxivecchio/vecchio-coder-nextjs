"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0, itemsTotal: 0 });
  const [fetchingCart, setFetchingCart] = useState(true);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setFetchingCart(false);
  }, []);

  useEffect(() => {
    if (!fetchingCart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const newTotal = cart.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    const newItemsTotal = cart.items.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setCart((currentCart) => ({
      ...currentCart,
      total: newTotal,
      itemsTotal: newItemsTotal,
    }));
  }, [cart.items]);

  const addToCart = (product, quantityToAdd) => {
    setCart((currentCart) => {
      const productIndex = currentCart.items.findIndex(
        (item) => item.product.slug === product.slug
      );

      if (productIndex > -1) {
        const newItems = currentCart.items.map((item, index) => {
          if (index === productIndex) {
            return { ...item, quantity: item.quantity + quantityToAdd };
          }
          return item;
        });
        return { ...currentCart, items: newItems };
      } else {
        const newItem = { product, quantity: quantityToAdd };
        return { ...currentCart, items: [...currentCart.items, newItem] };
      }
    });
  };

  const contextValue = {
    cart,
    setCart,
    fetchingCart,
    addToCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
