"use client";
import React from "react";
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

import {useRouter} from 'next/navigation'

import Link from 'next/link'

import { useCart } from "@/app/context/cartContext";

export default function App() {
  const router = useRouter()
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCartOpen, setCartOpen] = React.useState(false);

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const menuItems = [
    "Home",
    "Dashboard",
  ];

  return (
    <>
      <Navbar position="sticky" className="fixed top-0 bg-black/40" onMenuOpenChange={setIsMenuOpen}>
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
            <Link href="/" className="text-white font-bold hover:text-secondary">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/shop" className="text-white font-bold hover:text-secondary">
              Shop
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/dashboard" className="text-white font-bold hover:text-secondary">
              Admin (TODO)
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <button
              onClick={openCart}
              className="text-center text-black transition relative"
            >
              <div className="hover:text-secondary">Cart ({cart?.itemsTotal})</div>
            </button>
          </NavbarItem>
          <NavbarItem>
            <Button className="font-bold" as={Link} color="secondary" href="#" variant="shadow">
              Sign Up
            </Button>
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
