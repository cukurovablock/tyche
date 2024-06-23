// src/components/SearchBar.tsx
"use client";

import React, { useState } from "react";

const SearchBar: React.FC<{ onSearch: (address: string) => void }> = ({
  onSearch,
}) => {
  const [address, setAddress] = useState("");

  const handleSearch = () => {
    onSearch(address);
  };

  return (
    <div className="flex w-full max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Cüzdan adresinizi giriniz!"
        className="p-2 border border-gray-300 rounded-l w-full"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-r"
      >
        Ara
      </button>
    </div>
  );
};

export default SearchBar;
