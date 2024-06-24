// src/components/SearchBar.tsx
"use client";

import React, { useState } from "react";

const SearchBar: React.FC<{ onSearch: (address: string) => void }> = ({
  onSearch,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      onSearch(searchValue);
    } else {
      alert("Lütfen geçerli bir cüzdan adresi girin.");
    }
  };

  return (
    <div className="flex w-full">
      <input
        type="text"
        placeholder="Cüzdan adresinizi giriniz"
        className="p-2 border border-gray-300 rounded-l w-full"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
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
