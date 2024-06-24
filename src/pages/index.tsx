// src/pages/index.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useAppContext } from "@/contexts/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import TxHistory from "@/components/TxHistory";
import Dapps from "@/components/Dapps";
import SaveWalletModal from "@/components/SaveWalletModal";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { address, setAddress, wallets } = useAppContext();
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [network, setNetwork] = useState("ethereum");

  const handleSearch = (address: string) => {
    const walletExists = wallets.some((wallet) => wallet.address === address);

    if (!walletExists) {
      setAddress(address);
      setIsSaveModalOpen(true);
    } else {
      setAddress(address);
      router.push(`/${address}?network=${network}`).then(() => router.reload());
    }
  };

  const handleNetworkChange = (network: string) => {
    setNetwork(network);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} onNetworkChange={handleNetworkChange} />
      <main className="flex-grow container mx-auto p-4 grid grid-cols-12 gap-4">
        {!address ? (
          <div className="lg:col-span-12 col-span-12 space-y-4">
            <div className="text-center">
              Geçerli bir cüzdan adresi giriniz.
            </div>
            <Dapps />
          </div>
        ) : (
          <>
            <div className="lg:col-span-4 col-span-12 space-y-4">
              <Portfolio />
              <Dapps />
            </div>
            <div className="lg:col-span-8 col-span-12">
              <TxHistory />
            </div>
          </>
        )}
      </main>
      <Footer />
      <SaveWalletModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        address={address}
        username=""
        network={network}
        onAddressChange={setAddress}
        onUsernameChange={() => {}}
        onNetworkChange={setNetwork}
        onSave={() => setIsSaveModalOpen(false)}
      />
    </div>
  );
}
