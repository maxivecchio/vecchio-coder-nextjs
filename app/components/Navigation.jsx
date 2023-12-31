"use client";
import React, { useState, useEffect } from "react";
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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";

import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

import Link from "next/link";

import { useUser } from "@/app/context/userContext";
import { useCart } from "@/app/context/cartContext";

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

  const menuItems = ["Home", "Shop"];

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
          <Link href="/">
            <NavbarBrand>
              <AcmeLogo />
              <p className="font-bold text-white">MVSHOP</p>
            </NavbarBrand>
          </Link>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link
              className="text-white font-bold hover:text-secondary"
              href="/"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-white font-bold hover:text-secondary"
              href="/shop/all"
            >
              Shop
            </Link>
          </NavbarItem>
          {user && user.role === "admin" && (
            <NavbarItem>
              <Link
                className="text-white font-bold hover:text-secondary"
                href="/dashboard"
              >
                Admin
              </Link>
            </NavbarItem>
          )}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="">
            <button
              onClick={openCart}
              className="text-center text-white transition relative"
            >
              <div className="hover:text-secondary flex items-center gap-1">
                <FaShoppingCart className="text-xl" /> ({cart?.itemsTotal})
              </div>
            </button>
          </NavbarItem>
          <NavbarItem className="text-white">
            {user ? (
              <Dropdown>
                <DropdownTrigger>
                  <Button className="text-white" variant="bordered">
                    {user.email}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem
                    onClick={logout}
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
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
        <NavbarMenu className=" text-black">
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

          {user && user.role === "admin" && (
            <NavbarMenuItem>
              <Link color="danger" className="w-full" href="#" size="lg">
                Admin
              </Link>
            </NavbarMenuItem>
          )}
        </NavbarMenu>
      </Navbar>

      <Cart isOpen={isCartOpen} closeCart={closeCart} />
    </>
  );
}
