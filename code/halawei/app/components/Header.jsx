"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NavLink = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors hover:text-white ${
        isActive ? "text-white" : "text-white/60"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default function Header({ language = "en" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleLanguage = () => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.endsWith(".ar")
      ? currentPath.replace(".ar", ".en")
      : currentPath.replace(".en", ".ar");
    window.location.href = newPath;
  };

  const getLocalizedPath = (path) =>
    `${path}${language === "ar" ? ".ar" : ".en"}`;

  const navItems = [
    {
      href: getLocalizedPath("/home"),
      label: language === "ar" ? "الرئيسية" : "Home",
    },
    {
      href: getLocalizedPath("/about"),
      label: language === "ar" ? "من نحن" : "About Us",
    },
    {
      href: getLocalizedPath("/contact"),
      label: language === "ar" ? "تواصل معنا" : "Contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 px-40 py-4 z-50 ${
        isScrolled
          ? "bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/85"
          : "bg-transparent"
      } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
      style={{ direction: "ltr" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href={getLocalizedPath("/home")}
          className="flex items-center space-x-2"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={176}
            height={40}
            className="w-44"
          />
          <span className="sr-only">Home</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-white rounded-md hover:bg-white hover:text-black transition-colors"
          >
            {language === "en" ? "العربية" : "English"}
          </button>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              animate={isMobileMenuOpen ? "open" : "closed"}
              initial="closed"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={{
                  closed: { d: "M4 6h16M4 12h16M4 18h16" },
                  open: { d: "M6 18L18 6M6 6l12 12" },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              ref={mobileMenuRef}
              className="absolute top-full left-0 right-0 bg-black p-4 md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col text-center space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <button
                    onClick={() => {
                      toggleLanguage();
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-white rounded-md hover:bg-white hover:text-black transition-colors"
                  >
                    {language === "en" ? "العربية" : "English"}
                  </button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
