"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 text-white p-4 sm:p-6 text-bold">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Image */}
        <Link href="/">
          <Image
            src="/1.jpg"
            alt="Top Building Logo"
            width={230}
            height={50}
            className="rounded-full object-cover w-32 sm:w-40 md:w-48 lg:w-56"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4 text-bold">
          <Link href="/" className="hover:text-gray-300 text-3xl font-bold">
            Home
          </Link>
          <Link href="/About" className="hover:text-gray-300 text-3xl font-bold">
            About
          </Link>
          <Link href="/Contact" className="hover:text-gray-300 text-3xl font-bold">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={50} /> : <Menu size={50} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden space-y-2 text-center mt-10 ">
          <Link href="/" className="block hover:text-gray-300 text-2xl mb-5">
            Home
          </Link>
          <Link href="/About" className="block hover:text-gray-300 text-2xl mb-5">
            About
          </Link>
          <Link href="/Contact" className="block hover:text-gray-300 text-2xl mb-5">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};
