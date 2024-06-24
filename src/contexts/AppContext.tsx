// src/contexts/AppContext.tsx
"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

interface Wallet {
  address: string;
  network: string;
  username: string;
}

interface AppContextType {
  address: string;
  network: string;
  setAddress: (address: string) => void;
  handleNetworkChange: (network: string) => void;
  wallets: Wallet[];
  saveWallet: (address: string, network: string, username: string) => void;
  deleteWallet: (address: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [address, setAddress] = useState("");
  const [network, setNetwork] = useState("ethereum");
  const [wallets, setWallets] = useState<Wallet[]>([]);

  const handleNetworkChange = (network: string) => {
    setNetwork(network);
  };

  const saveWallet = (address: string, network: string, username: string) => {
    const newWallet = { address, network, username };
    const updatedWallets = [...wallets, newWallet];
    setWallets(updatedWallets);
    localStorage.setItem("wallets", JSON.stringify(updatedWallets));
  };

  const deleteWallet = (address: string) => {
    const updatedWallets = wallets.filter(
      (wallet) => wallet.address !== address
    );
    setWallets(updatedWallets);
    localStorage.setItem("wallets", JSON.stringify(updatedWallets));
  };

  useEffect(() => {
    const savedWallets = localStorage.getItem("wallets");
    if (savedWallets) {
      setWallets(JSON.parse(savedWallets));
    }
  }, []);

  useEffect(() => {
    if (address) {
      localStorage.setItem("address", address);
    }
    if (network) {
      localStorage.setItem("network", network);
    }
  }, [address, network]);

  return (
    <AppContext.Provider
      value={{
        address,
        network,
        setAddress,
        handleNetworkChange,
        wallets,
        saveWallet,
        deleteWallet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
