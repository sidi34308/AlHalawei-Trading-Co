"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-colors duration-300 p-4 px-9 sm:px-40  z-50 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
      style={{ direction: "ltr" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Logo"
              width={176}
              height={40}
              className="w-44"
            />
          </Link>
        </h1>
        <nav className="hidden md:flex space-x-4">
          <NavLink href="/">الرئيسية</NavLink>
          <NavLink href="/about">من نحن</NavLink>
          <NavLink href="/contact">تواصل معنا</NavLink>
        </nav>
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-64 bg-black shadow-lg transition-transform duration-300 ease-in-out z-20`}
      >
        <div
          className="flex flex-col space-y-4 p-4 mt-16"
          style={{ direction: "rtl" }}
        >
          <NavLink href="/" onClick={() => setIsOpen(false)}>
            الرئيسية
          </NavLink>
          <NavLink href="/about" onClick={() => setIsOpen(false)}>
            من نحن
          </NavLink>
          <NavLink href="/contact" onClick={() => setIsOpen(false)}>
            تواصل معنا
          </NavLink>
        </div>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}

function NavLink({ href, children, ...props }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-white/80 transition-colors duration-200 text-lg"
      {...props}
    >
      {children}
    </Link>
  );
}
