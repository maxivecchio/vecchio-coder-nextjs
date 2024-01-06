"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { FirestoreDatabase } from "@/firebase/config";
import { useUser } from "@/app/context/userContext";
import { enqueueSnackbar } from "notistack";

const CartContext = createContext();
const cartRef = collection(FirestoreDatabase, "carts");
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
    itemsTotal: 0,
    email: null,
    orderDetails: {
      shippingAddress: {
        first_name: null,
        last_name: null,
        address_1: null,
        address_2: null,
        city: null,
        province: null,
        country_code: "ar",
        postal_code: null,
        phone: null,
      },
      billingAddress: {
        first_name: null,
        last_name: null,
        address_1: null,
        address_2: null,
        city: null,
        province: null,
        country_code: null,
        postal_code: null,
        phone: null,
      },
      payment: {
        name_on_card: null,
        card_number: null,
        exp_month: null,
        exp_year: null,
        cvc: null,
        last4digits: null,
      },
    },
  });  const [fetchingCart, setFetchingCart] = useState(true);
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
      enqueueSnackbar({
          message: "Cart Updated",
          variant: "success",
        });
    setCart((currentCart) => {
      const newItems = currentCart.items.slice();
      const productIndex = newItems.findIndex(
        (item) => item.product.slug === product.slug
      );

      if (productIndex > -1) {
        newItems[productIndex] = {
          ...newItems[productIndex],
          quantity: newItems[productIndex].quantity + quantityToAdd,
        };
      } else {
        newItems.push({ product, quantity: quantityToAdd });
      }

      const itemsTotal = newItems.reduce((acc, item) => acc + item.quantity, 0);
      const total = newItems.reduce(
        (acc, item) => acc + item.quantity * item.product.price,
        0
      );

      return { ...currentCart, items: newItems, itemsTotal, total };
    });
  };

  const updateCartInFirebase = async () => {
    if (!user || !user.id || fetchingCart) return;

    const itemsTotal = cart.items.reduce((acc, item) => acc + item.quantity, 0);
    const total = cart.items.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0
    );

    const updatedCart = {
      ...cart,
      itemsTotal,
      total,
    };

    const cartDocRef = doc(FirestoreDatabase, "carts", user.id);

    try {
      await updateDoc(cartDocRef, updatedCart);
    } catch (error) {
      console.error("Error updating cart in Firebase:", error);
    }
  };

  const removeFromCart = (productSlug) => {
    enqueueSnackbar({
      message: "Item removed from cart",
      variant: "info",
    });
    setCart((currentCart) => {
      const newItems = currentCart.items.filter(
        (item) => item.product.slug !== productSlug
      );
  
      const itemsTotal = newItems.reduce((acc, item) => acc + item.quantity, 0);
      const total = newItems.reduce(
        (acc, item) => acc + item.quantity * item.product.price,
        0
      );
  
  
      return { ...currentCart, items: newItems, itemsTotal, total };
    });
  };

  useEffect(() => {
    if (cart && user) {
      updateCartInFirebase();
    }
  }, [cart, user]);

  const contextValue = {
    cart,
    setCart,
    fetchingCart,
    addToCart,
    removeFromCart
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
