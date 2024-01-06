'use client'
import Link from "next/link";

import { doc, getDoc } from "firebase/firestore";
import { FirestoreDatabase } from "@/firebase/config";
import { useState, useEffect } from "react";
import {useRouter} from 'next/navigation'

const AddressDetails = ({ title, address }) => (
  <div>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-sm text-foreground/60">{address.address_1}</p>
    <p className="text-sm text-foreground/60">
      {address.city}, {address.province}
    </p>
    <p className="text-sm text-foreground/60">{address.postal_code}</p>
    <p className="text-sm text-foreground/60">{address.country_code}</p>
  </div>
);

const SuccessPage = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
    const router = useRouter()
  const fetchOrderFromLocalStorage = async (orderId) => {
    if (orderId) {
      const orderDetails = await getOrderById(orderId);
      if (orderDetails) {
        return orderDetails;
      } else {
        router.push('/')
      }
    }  else {
        router.push('/')
      }
  };

  const getOrderById = async (docId) => {
    try {
      const docRef = doc(FirestoreDatabase, "orders", docId);

      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        console.log("Document data:", docSnapshot.data());
        setLoading(false);
        setOrder(docSnapshot.data());
        return docSnapshot.data();
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error fetching document: ", error);
      throw error;
    }
  };

  const orderId = typeof window !== "undefined" ? localStorage.getItem("lastOrderId") : null;

  useEffect(() => {
    if (orderId !== null && orderId !== undefined) {
        fetchOrderFromLocalStorage(orderId);
    }
  }, [orderId]);

  if (loading) {
    return <>Loading</>;
  }

  if (!loading && !order) {
    return <>Order not found</>;
  }

  return (
    <div className="max-w-sm mx-auto mt-16">
      <h2 className="text-2xl text-center mb-2">
        Thank You. <br />
        Your Order:
      </h2>
      Order ID: #{orderId}
      <div className="p-4 bg-white shadow rounded-lg">
        <AddressDetails
          title="Shipping Details"
          address={order.orderDetails.shippingAddress}
        />
        <AddressDetails
          title="Billing Details"
          address={order.orderDetails.billingAddress}
        />
      </div>
      <ul role="list" className="divide-y divide-foreground/20">
        <h3>Items</h3>
        {order.items.map((product, productIdx) => (
          <li key={productIdx} className={`flex py-2`}>
            <div className="flex-shrink-0">
              <img
                src={`${product.product.thumbnail}`}
                alt={`${product.product.name} image`}
                className="h-12 aspect-square rounded-md object-cover object-center sm:h-12"
              />
            </div>
            <div className="ml-4 flex flex-1 flex-col justify-center sm:ml-6">
              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div>
                  <div className="flex flex-col justify-between">
                    <h3 className="text-sm">
                      x{product.quantity} {product.product.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-1 text-sm text-right font-medium text-foreground/90">
                  ${product.quantity * product.product.price}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-end">
        <p className="text-foreground/90 font-bold text-lg">
          Total: ${order.total}
        </p>
      </div>
      <div className="flex justify-center">
        <Link href="/">
          <button className="mt-4 bg-gray-600 mx-auto py-1 px-3 rounded-md text-white">
            Volver a la Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
