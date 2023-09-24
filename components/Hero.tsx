"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import category from "@/data/category";

function Hero({ userInput }: any) {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    userInput(searchInput);
  };

  return (
    <div className="text-center relative bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 text-white py-16">
      {/* Background Image */}
      <Image
        src="/bg.png"
        alt="hero-image"
        width={800}
        height={200}
        className="w-full absolute top-0 left-0"
      />

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-2">Discover</h2>
        <h2 className="text-2xl mb-6">Your Amazing City</h2>

        {/* Search Input */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <input
            type="text"
            onChange={handleInputChange}
            value={searchInput}
            placeholder="Search Anything"
            className="bg-white text-gray-800 rounded-full px-5 py-3 w-72 shadow-lg focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-red-600 text-white rounded-full px-4 py-3 hover:bg-red-700 transition-colors focus:outline-none"
          >
            Search
          </button>
        </div>

        {/* Browse Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {category.map((item, index) => (
            <div
              key={index}
              onClick={() => userInput(item.name)}
              className="bg-white rounded-xl p-4 cursor-pointer hover:shadow-md transform hover:scale-105 transition-transform"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={40}
                height={40}
                className="mx-auto"
              />
              <p className="text-sm mt-2 text-gray-600">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
