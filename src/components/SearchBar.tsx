"use client";

import React, { useState } from "react";

const SearchBar: React.FC<{ onSearch: (address: string) => void }> = ({
  onSearch,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <div className="flex items-center space-x-2 w-full">
      <input
        type="text"
        placeholder="Cüzdan adresinizi giriniz!"
        className="p-2 border border-gray-300 rounded w-full"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-tycheGreen text-white p-2 rounded"
      >
        Ara
      </button>
    </div>
  );
};

export default SearchBar;
