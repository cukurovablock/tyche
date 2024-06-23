"use client";

import React from "react";

const NetworkDropdown: React.FC<{
  onNetworkChange: (network: string) => void;
}> = ({ onNetworkChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onNetworkChange(e.target.value);
  };

  return (
    <select
      className="p-2 border border-gray-300 rounded"
      onChange={handleChange}
    >
      <option value="ethereum">Ethereum</option>
      <option value="bitcoin">Bitcoin</option>
      <option value="bnb">BNB Smart Chain</option>
      {/* Diğer ağ seçenekleri */}
    </select>
  );
};

export default NetworkDropdown;
