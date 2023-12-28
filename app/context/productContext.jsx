"use client";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const ProductContext = createContext();

import { useRouter, notFound } from "next/navigation";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categories, setCategories] = useState([]);

  const router = useRouter();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = () => {
    axios
      .get("/api/products", {
        cache: "no-store",
        next: {
          revalidate: 3600,
        },
      })
      .then((res) => {
        setProducts(res.data);
        setProductsLoading(false);
      })
      .catch((err) => {
        enqueueSnackbar({
          message: "Error fetching products.",
          variant: "error",
        });
      });
  };

  const fetchCategories = () => {
    axios
      .get("/api/categories", {
        cache: "no-store",
        next: {
          revalidate: 3600,
        },
      })
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        enqueueSnackbar({
          message: "Error fetching categories.",
          variant: "error",
        });
      });
  };

  const getProductBySlug = async (slug) => {
    setSelectedProduct(null);
    try {
      const response = await axios.get(`/api/products/${slug}`);
      setSelectedProduct(response.data);
      return response.data;
    } catch (error) {
      router.push("/404");
    }
  };

  const getProductsByCategory = async (slug) => {
    console.log(slug);
    try {
      const response = await axios.get(`/api/categories/${slug}`);
      return response.data;
    } catch (error) {
      router.push("/404");
    }
  };

  const deleteProduct = async (slug) => {
    try {
      await axios.delete(`/api/products/${slug}`);
      fetchProducts();
    } catch (error) {
      enqueueSnackbar({
        message: "Product not found.",
        variant: "error",
      });
    }
  };

  const uploadProduct = async (formData) => {
    const { slug } = formData;

    try {
      const slugExists = await checkSlugExists(slug);
      if (slugExists) {
        enqueueSnackbar({
          message: "A product with this slug already exists.",
          variant: "error",
        });
        return;
      }

      await axios.post("/api/products", formData);
      enqueueSnackbar({
        message: "Product Uploaded Successfully",
        variant: "success",
      });
      fetchProducts();
    } catch (error) {
      enqueueSnackbar({
        message: "Error uploading product.",
        variant: "error",
      });
    }
  };

  const checkSlugExists = async (slug) => {
    try {
      const response = await axios.get(`/api/products/${slug}`);
      return response.data.length > 0;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return false;
      }
      throw error; 
    }
  };

  const contextValue = {
    products,
    categories,
    productsLoading,
    selectedProduct,
    getProductBySlug,
    getProductsByCategory,
    deleteProduct,
    uploadProduct,
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
