// src/components/SearchBar.tsx
import React from "react";

const SearchBar: React.FC = () => {
  return (
    <input
      type="text"
      placeholder="Cüzdan adresinizi giriniz!"
      className="p-2 border border-gray-300 rounded"
    />
  );
};

export default SearchBar;
