// src/pages/[address].tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import TxHistory from "@/components/TxHistory";
import Dapps from "@/components/Dapps";
import SaveWalletModal from "@/components/SaveWalletModal";
import { useAppContext } from "@/contexts/AppContext";
import { getWalletBalance, getWalletTransactions } from "@/services/etherscan";

const AddressPage = () => {
  const router = useRouter();
  const address = router.query.address as string | undefined;
  const network = router.query.network as string | undefined;
  const { setAddress, handleNetworkChange, wallets, saveWallet } =
    useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [balance, setBalance] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    if (address) {
      setAddress(address);
      fetchWalletData(address);
    }
    if (network) {
      handleNetworkChange(network);

      // Adres ve ağ kombinasyonu kayıtlı değilse modal'ı aç
      const walletExists = wallets.some(
        (wallet) => wallet.address === address && wallet.network === network
      );
      if (!walletExists) {
        setIsModalOpen(true);
      }
    }
  }, [address, network, setAddress, handleNetworkChange, wallets]);

  const fetchWalletData = async (address: string) => {
    try {
      const balance = await getWalletBalance(address);
      const transactions = await getWalletTransactions(address);
      setBalance(balance);
      setTransactions(transactions.slice(0, 10)); // Son 10 işlem
    } catch (error) {
      console.error("Error fetching wallet data:", error);
    }
  };

  const handleSearch = (address: string) => {
    const network = "ethereum"; // Varsayılan ağ türü, burada güncelleyebilirsiniz
    setAddress(address);
    if (typeof window !== "undefined") {
      router.push(`/${address}?network=${network}`);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    saveWallet(address!, network!, username);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} onNetworkChange={handleNetworkChange} />
      <main className="flex-grow container mx-auto p-4 grid grid-cols-12 gap-4">
        {address ? (
          <>
            <div className="lg:col-span-4 col-span-12 space-y-4">
              <Portfolio balance={balance} />
              <Dapps />
            </div>
            <div className="lg:col-span-8 col-span-12">
              <TxHistory transactions={transactions} />
            </div>
          </>
        ) : (
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
      <SaveWalletModal
        isOpen={isModalOpen}
        onClose={closeModal}
        address={address!}
        username={username}
        network={network!}
        onAddressChange={setAddress}
        onUsernameChange={setUsername}
        onNetworkChange={handleNetworkChange}
        onSave={handleSave}
      />
    </div>
  );
};

export default AddressPage;
