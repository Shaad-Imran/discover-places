import React from "react";
import Image from "next/image";

// Define a type for the props
type HeaderLinkProps = {
  text: string;
};

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <h2 className="text-2xl font-semibold hover:text-red-500 tracking-widest cursor-pointer">
              DISCOVER
            </h2>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 list-none">
            <HeaderLink text="Home" />
            <HeaderLink text="About Us" />
            <HeaderLink text="Contact Us" />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

// Use the defined type for HeaderLink props
const HeaderLink: React.FC<HeaderLinkProps> = ({ text }) => (
  <li className="text-lg hover:text-red-500 cursor-pointer">{text}</li>
);

export default Header;
