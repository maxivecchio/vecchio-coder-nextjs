"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { FirestoreDatabase } from "@/firebase/config";
import { useUser } from "@/app/context/userContext";

const CartContext = createContext();
const cartRef = collection(FirestoreDatabase, "carts");
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0, itemsTotal: 0 });
  const [fetchingCart, setFetchingCart] = useState(true);
  const { user } = useUser();

  const fetchCart = async (userId) => {
    const cartDoc = doc(cartRef, userId);
    const docSnap = await getDoc(cartDoc);
    if (docSnap.exists()) {
      setCart(docSnap.data());
    } else {
      await setDoc(cartDoc, cart);
    }
    setFetchingCart(false);
  };

  useEffect(() => {
    if (user) {
      fetchCart(user.id);
    }
  }, [user]);

  const updateFirebaseCart = async (userId) => {
    if (!fetchingCart) {
      const cartDoc = doc(cartRef, userId);
      await setDoc(cartDoc, cart);
    }
  };

  useEffect(() => {
    if (user) {
      updateFirebaseCart(user.id);
    }
  }, [cart, user, fetchingCart]);

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

  useEffect(() => {
    const updateCartInFirebase = async () => {
      if (!user || !user.id) return;
  
      const cartDocRef = doc(FirestoreDatabase, "carts", user.id);
  
      try {
        await updateDoc(cartDocRef, { items: cart.items });
      } catch (error) {
        console.error("Error updating cart in Firebase:", error);
      }
    };
  
    if (cart && user) {
      updateCartInFirebase();
    }
  }, [cart, user]);

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
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
