"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Dapps from "@/components/Dapps";
import { useAppContext } from "@/contexts/AppContext";

export default function Home() {
  const { address, setAddress } = useAppContext();

  const handleSearch = (address: string) => {
    setAddress(address);
    if (typeof window !== "undefined") {
      const network = "ethereum"; // Varsayılan ağ türü, burada güncelleyebilirsiniz
      window.location.href = `/${address}?network=${network}`;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} />
      <main className="flex-grow container mx-auto p-4 grid grid-cols-12 gap-4">
        {!address && (
          <div className="col-span-12 text-center">
            <p className="text-lg font-semibold mb-4">
              Geçerli bir cüzdan adresi giriniz.
            </p>
            <div className="lg:col-span-4 col-span-12 space-y-4">
              <Dapps />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
