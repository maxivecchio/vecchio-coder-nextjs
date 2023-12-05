"use client";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

import { useRouter, notFound } from "next/navigation";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products", {
        cache: "no-store",
        next: {
          revalidate: 3600,
        },
      })
      .then((res) => {
        setProducts(res.data);
        setProductsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const getProductBySlug = async (slug) => {
    setSelectedProduct(null)
    try {
      const response = await axios.get(
        `http://localhost:3000/api/products/${slug}`
      );
      setSelectedProduct(response.data[0]);
      return response.data[0];
    } catch (error) {
      router.push("/404");
    }
  };

  const contextValue = {
    products,
    productsLoading,
    selectedProduct,
    getProductBySlug,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw Error("useProducts must be used within an ProductProvider");
  }
  return context;
};

export { ProductProvider, useProducts };
