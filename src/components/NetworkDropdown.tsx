// src/components/NetworkDropdown.tsx
"use client";

import React from "react";

const NetworkDropdown: React.FC<{ onNetworkChange: (network: string) => void; className?: string }> = ({ onNetworkChange, className }) => {
  return (
    <select className={`p-2 border border-gray-300 rounded ${className}`} onChange={(e) => onNetworkChange(e.target.value)}>
      <option value="ethereum">Ethereum</option>
      <option value="bitcoin">Bitcoin</option>
      <option value="bnb">BNB Smart Chain</option>
      {/* Diğer ağ seçenekleri */}
    </select>
  );
};

export default NetworkDropdown;
