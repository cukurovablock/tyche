// src/components/Header.tsx
"use client";

import React from "react";
import SearchBar from "./SearchBar";
import NetworkDropdown from "./NetworkDropdown";
import Settings from "./Settings";
import Image from "next/image";

const Header: React.FC<{
  onSearch: (address: string) => void;
  onNetworkChange: (network: string) => void;
}> = ({ onSearch, onNetworkChange }) => {
  return (
    <header className="p-4 bg-tycheWhite shadow flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center justify-between mb-4 lg:mb-0 lg:flex-row lg:space-x-4 w-full">
        <div className="relative h-8 w-8">
          <Image
            src="/tyche.png"
            alt="Tyche Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0 mt-4 lg:mt-0 w-full max-w-3xl mx-auto">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0 lg:w-auto w-full">
        <div className="flex space-x-4 w-full lg:w-auto">
          <NetworkDropdown
            onNetworkChange={onNetworkChange}
            className="flex-1"
          />
          <Settings className="flex-1" />
        </div>
      </div>
    </header>
  );
};

export default Header;
