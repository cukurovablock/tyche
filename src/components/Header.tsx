// src/components/Header.tsx
"use client";

import React from "react";
import SearchBar from "./SearchBar";
import NetworkDropdown from "./NetworkDropdown";
import Settings from "./Settings";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAppContext } from "@/contexts/AppContext";

const Header: React.FC<{
  onSearch: (address: string) => void;
  onNetworkChange: (network: string) => void;
}> = ({ onSearch, onNetworkChange }) => {
  const { setAddress } = useAppContext();
  const router = useRouter();

  const handleLogoClick = () => {
    setAddress(""); // Adresi resetle
    onNetworkChange("ethereum"); // Ağ tipini resetle
    router.replace("/");
  };

  return (
    <header className="flex items-center justify-between p-4 bg-tycheWhite shadow">
      <div
        className="relative h-16 w-16 cursor-pointer"
        onClick={handleLogoClick}
      >
        <Image
          src="/tyche.png"
          alt="Tyche Logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="flex-grow mx-4">
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
