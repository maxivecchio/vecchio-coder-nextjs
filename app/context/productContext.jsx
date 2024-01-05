"use client";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import {generateUniqueSlug } from '@/app/lib/hooks'
const ProductContext = createContext();


import { collection, getDocs, doc, getDoc, query, onSnapshot, updateDoc } from 'firebase/firestore';
import { FirestoreDatabase } from '@/firebase/config'


import { useRouter } from "next/navigation";

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
    setProductsLoading(true);
    const productsQuery = query(collection(FirestoreDatabase, 'products'));
    onSnapshot(productsQuery, async (snapshot) => {
      const productsData = await Promise.all(snapshot.docs.map(async (docSnapshot) => {
        const productData = docSnapshot.data();
        const categoryRef = doc(FirestoreDatabase, 'categories', productData.category);
        const categorySnapshot = await getDoc(categoryRef);
  
        if (!categorySnapshot.exists()) {
          return {
            id: docSnapshot.id,
            ...productData,
            category: { id: null, name: 'Unknown', slug: 'unknown' }
          };
        }
  
        const categoryData = categorySnapshot.data();
        return {
          id: docSnapshot.id,
          ...productData,
          category: { id: categorySnapshot.id, ...categoryData }
        };
      }));
  
      setProducts(productsData);
      setProductsLoading(false);
    }, (err) => {
      enqueueSnackbar({
        message: "Error fetching products.",
        variant: "error",
      });
      setProductsLoading(false);
    });
  };
  

  const editProductById = async (productId, productData) => {
    try {
      const productRef = doc(FirestoreDatabase, 'products', productId);
      await updateDoc(productRef, productData);
      enqueueSnackbar({
        message: "Product updated successfully.",
        variant: "success",
      });
    } catch (error) {
      console.error('Error updating product: ', error);
      enqueueSnackbar({
        message: "Error updating product.",
        variant: "error",
      });
    }
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
    } catch (error) {
      enqueueSnackbar({
        message: "Product not found.",
        variant: "error",
      });
    }
  };

  const uploadProduct = async (formData) => {
    try {
      formData["slug"] = await generateUniqueSlug(formData.name)
      await axios.post("/api/products", formData);
      enqueueSnackbar({
        message: "Product Uploaded Successfully",
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar({
        message: "Error uploading product.",
        variant: "error",
      });
      console.log(error)
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
    editProductById
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
