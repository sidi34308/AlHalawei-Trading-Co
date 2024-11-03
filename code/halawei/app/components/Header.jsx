"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header({ language = "en" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to add background color
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Toggle language based on the current page version
  const toggleLanguage = () => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.endsWith(".ar")
      ? currentPath.replace(".ar", ".en")
      : currentPath.replace(".en", ".ar");
    window.location.href = newPath;
  };

  // Generate the correct link path based on language
  const getLocalizedPath = (path) =>
    `${path}${language === "ar" ? ".ar" : ".en"}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-colors duration-300 p-4 px-9 sm:px-40 z-50 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
      style={{ direction: "ltr" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link
            href={getLocalizedPath("/home")}
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={176}
              height={40}
              className="w-44"
            />
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <NavLink href={getLocalizedPath("/home")}>
            {language === "ar" ? "الرئيسية" : "Home"}
          </NavLink>
          <NavLink href={getLocalizedPath("/about")}>
            {language === "ar" ? "من نحن" : "About Us"}
          </NavLink>
          <NavLink href={getLocalizedPath("/contact")}>
            {language === "ar" ? "تواصل معنا" : "Contact"}
          </NavLink>
          <button
            onClick={toggleLanguage}
            className="ml-4 px-3 py-1 border border-white rounded text-white"
          >
            {language === "en" ? "العربية" : "English"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
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

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-64 bg-black shadow-lg transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="flex flex-col space-y-4 p-4 mt-16">
          <NavLink
            href={getLocalizedPath("/")}
            onClick={() => setIsOpen(false)}
          >
            {language === "ar" ? "الرئيسية" : "Home"}
          </NavLink>
          <NavLink
            href={getLocalizedPath("/about")}
            onClick={() => setIsOpen(false)}
          >
            {language === "ar" ? "من نحن" : "About Us"}
          </NavLink>
          <NavLink
            href={getLocalizedPath("/contact")}
            onClick={() => setIsOpen(false)}
          >
            {language === "ar" ? "تواصل معنا" : "Contact"}
          </NavLink>
          <button
            onClick={() => {
              toggleLanguage();
              setIsOpen(false);
            }}
            className="px-3 py-2 mt-4 border border-white rounded text-white"
          >
            {language === "en" ? "العربية" : "English"}
          </button>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}

// NavLink component with hover effect
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
