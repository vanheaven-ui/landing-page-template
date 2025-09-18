"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Disable background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Products", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Company", href: "#" },
    { name: "Login", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 bg-gray-950/50 backdrop-blur-md transition-colors duration-300">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.9 5.9a6 6 0 118.2 8.2 6 6 0 01-8.2-8.2zM10 0a10 10 0 100 20 10 10 0 000-20z"
              clipRule="evenodd"
              fillRule="evenodd"
            />
          </svg>
          <span className="text-white text-lg font-bold font-inter">Logo</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
            >
              {link.name}
            </a>
          ))}
          <button className="px-5 py-2 text-sm font-semibold text-gray-900 bg-green-400 rounded-lg hover:bg-green-500 transition-colors duration-200">
            Get Appointed
          </button>
        </div>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-white p-2 focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 flex flex-col lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-5 right-5 text-green-400 p-2 focus:outline-none"
          >
            <X size={28} />
          </button>

          <div className="px-6 pt-16 space-y-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.9 5.9a6 6 0 118.2 8.2 6 6 0 01-8.2-8.2zM10 0a10 10 0 100 20 10 10 0 000-20z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
              <span className="text-white text-xl font-bold font-inter">
                Logo
              </span>
            </Link>

            {/* Menu Links */}
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-lg font-medium hover:text-green-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 text-lg font-semibold text-gray-900 bg-green-400 rounded-lg hover:bg-green-500 transition-colors duration-200"
            >
              Get Appointed
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
