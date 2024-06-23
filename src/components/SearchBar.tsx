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
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Cüzdan adresinizi giriniz!"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Ara
      </button>
    </div>
  );
};

export default SearchBar;
