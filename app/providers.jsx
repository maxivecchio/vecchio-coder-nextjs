"use client";

import { ProductProvider } from "@/app/context/productContext";
import { CartProvider } from "@/app/context/cartContext";
import { UserProvider } from "@/app/context/userContext";
import { SnackbarProvider } from "notistack";

const Providers = ({ children }) => {
  return (
    <ProductProvider>
      <UserProvider>
        <CartProvider>
          <SnackbarProvider
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            autoHideDuration={3000}
            maxSnack={3}
          >
            {children}
          </SnackbarProvider>
        </CartProvider>
      </UserProvider>
    </ProductProvider>
  );
};

export default Providers;
