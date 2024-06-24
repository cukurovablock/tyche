// src/pages/index.tsx
"use client";

import React, { useState } from "react";
import { useAppContext } from "@/contexts/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Dapps from "@/components/Dapps";

export default function Home() {
  const { setAddress } = useAppContext();
  const [network, setNetwork] = useState("ethereum");

  const handleSearch = (address: string) => {
    setAddress(address);
    if (typeof window !== "undefined") {
      const network = "ethereum"; // Varsayılan ağ türü, burada güncelleyebilirsiniz
      window.location.href = `/${address}?network=${network}`;
    }
  };

  const handleNetworkChange = (network: string) => {
    setNetwork(network);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} onNetworkChange={handleNetworkChange} />
      <main className="flex-grow container mx-auto p-4 grid grid-cols-12 gap-4">
        <div className="col-span-12 text-center">
          <p className="text-lg font-semibold mb-4">
            Geçerli bir cüzdan adresi giriniz.
          </p>
          <div className="lg:col-span-4 col-span-12 space-y-4">
            <Dapps />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
