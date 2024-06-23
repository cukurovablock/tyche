// src/components/Header.tsx
"use client";

import React from "react";
import SearchBar from "./SearchBar";
import NetworkDropdown from "./NetworkDropdown";
import Settings from "./Settings";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAppContext } from "@/contexts/AppContext";

const Header: React.FC<{ onSearch: (address: string) => void }> = ({
  onSearch,
}) => {
  const { handleNetworkChange, setAddress } = useAppContext();
  const router = useRouter();

  const handleLogoClick = () => {
    setAddress(""); // Adresi resetle
    handleNetworkChange("ethereum"); // Ağ tipini resetle
    router.replace("/");
  };

  return (
    <header className="flex items-center justify-between p-4 bg-tycheWhite shadow">
      <div className="flex items-center space-x-4">
        <div
          className="relative h-8 w-8 cursor-pointer"
          onClick={handleLogoClick}
        >
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
        <NetworkDropdown onNetworkChange={handleNetworkChange} />
        <Settings />
      </div>
    </header>
  );
};

export default Header;
