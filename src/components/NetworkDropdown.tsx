// NetworkDropdown.tsx
import React from 'react';

const NetworkDropdown: React.FC = () => {
  return (
    <select className="p-2 border border-gray-300 rounded">
      <option value="ethereum">Ethereum</option>
      <option value="bitcoin">Bitcoin</option>
      <option value="bnb">BNB Smart Chain</option>
      {/* Diğer ağ seçenekleri */}
    </select>
  );
};

export default NetworkDropdown;
