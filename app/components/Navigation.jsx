"use client";
import React, {useState, useEffect} from "react";
import Cart from "./Cart";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";

import { useRouter } from "next/navigation";

import Link from "next/link";

import { useCart } from "@/app/context/cartContext";

import { useUser } from "@/app/context/userContext";

export default function App() {
  const router = useRouter();
  const { user, logout } = useUser();
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const menuItems = ["Home", "Dashboard"];

  return (
    <>
      <Navbar
        position="sticky"
        className="fixed top-0 bg-black/40"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-white">ACME</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link 
              className="text-white font-bold hover:text-secondary"
              href="/">
              Admin
              </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              className="text-white font-bold hover:text-secondary"
              href="/shop/all">
              Shop
              </Link>
          </NavbarItem>
          {
            user && user.role === 'admin' && 
          <NavbarItem>
            <Link 
              className="text-white font-bold hover:text-secondary"
              href="/dashboard">
              Admin
              </Link>
          </NavbarItem>
              }
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <button
              onClick={openCart}
              className="text-center text-black transition relative"
            >
              <div className="hover:text-secondary">
                Cart ({cart?.itemsTotal})
              </div>
            </button>
          </NavbarItem>
          <NavbarItem>
            {user ? (
              <div>{user.email}</div>
            ) : (
              <Button
                onClick={() => {
                  router.push("/register");
                }}
                className="font-bold"
                color="secondary"
                variant="shadow"
              >
                Sign Up
              </Button>
            )}
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className=" text-white">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <Cart isOpen={isCartOpen} closeCart={closeCart} />
    </>
  );
}
