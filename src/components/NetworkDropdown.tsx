// src/components/NetworkDropdown.tsx
"use client";

import React from "react";

const NetworkDropdown: React.FC<{
  onNetworkChange: (network: string) => void;
}> = ({ onNetworkChange }) => {
  return (
    <select
      className="p-2 border border-gray-300 rounded"
      onChange={(e) => onNetworkChange(e.target.value)}
    >
      <option value="ethereum">Ethereum</option>
      <option value="bitcoin">Bitcoin</option>
      <option value="bnb">BNB Smart Chain</option>
      <option value="avalanche">Avalanche</option>
      <option value="solana">Solana</option>
      <option value="cosmos">Cosmos</option>
    </select>
  );
};

export default NetworkDropdown;
