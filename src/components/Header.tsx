// src/components/Header.tsx
"use client";

import React from "react";
import SearchBar from "./SearchBar";
import NetworkDropdown from "./NetworkDropdown";
import Settings from "./Settings";
import Image from "next/image";

const Header: React.FC<{ onSearch: (address: string) => void; onNetworkChange: (network: string) => void }> = ({ onSearch, onNetworkChange }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-tycheWhite shadow">
      <div className="flex items-center space-x-4">
        <div className="relative h-8 w-8">
          <Image
            src="/tyche.png"
            alt="Tyche Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="flex items-center space-x-4">
        <NetworkDropdown onNetworkChange={onNetworkChange} />
        <Settings />
      </div>
    </header>
  );
};

export default Header;
