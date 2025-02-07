"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/searchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-black to-slate-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="flex space-x-2 text-2xl font-extrabold tracking-wide items-center">
          <Image
            src="/images/logo.jpeg"
            alt="pizza logo"
            width={77.23}
            height={70.79}
            className="transition-transform duration-300 hover:scale-110 rounded"
          />
          🌿 Food <span className="text-orange-500">Hub</span>
        </h1>

        {/* Desktop Navigation Links & SearchBar */}
        <div className="hidden md:flex space-x-6 items-center">
          <ul className="flex space-x-4">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/chefs", label: "Chefs" },
              { href: "/food", label: "Menu" },
              { href: "/#shop-details", label: "Shop" },
              { href: "/FAQ", label: "FAQ" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-[16px] leading-[24px] text-[#FFFFFF] hover:text-orange-400">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Search Bar */}
          <div className="ml-4">
            <SearchBar />
          </div>
          
          {/* Icons */}
          <div className="flex items-center gap-4">
            <Image src="/images/User.png" alt="User" width={24} height={24} className="hover:scale-110 transition-transform duration-200" />
            <Image src="/images/Tote.png" alt="Tote" width={24} height={24} className="hover:scale-110 transition-transform duration-200" />
          </div>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white py-4 shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-4">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/chefs", label: "Chefs" },
              { href: "/food", label: "Menu" },
              { href: "/#shop-details", label: "Shop" },
              { href: "/FAQ", label: "FAQ" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-[16px] leading-[24px] text-[#FFFFFF] hover:text-orange-400" onClick={() => setIsOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
