// src/pages/[address].tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import TxHistory from "@/components/TxHistory";
import Dapps from "@/components/Dapps";
import { useAppContext } from "@/contexts/AppContext";
import { getWalletBalance, getWalletTransactions } from "@/services/etherscan";

const AddressPage = () => {
  const router = useRouter();
  const address = router.query.address as string | undefined;
  const network = (router.query.network as string) || "ethereum"; // Varsayılan ağ türü
  const { setAddress, handleNetworkChange, wallets, saveWallet } =
    useAppContext();
  const [balance, setBalance] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<any[]>([]); // Başlangıçta boş bir dizi olarak ayarla
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // console.log("useEffect - Address or Network Changed", { address, network });
    if (address) {
      setAddress(address);
      fetchWalletData(address);
    }
    if (network) {
      handleNetworkChange(network);
    }
  }, [address, network, setAddress, handleNetworkChange, wallets]);

  const fetchWalletData = async (address: string) => {
    setLoading(true); // Veri çekme işlemi başladığında loading durumunu true yap
    // console.log("Fetching wallet data for address:", address);
    try {
      const balance = await getWalletBalance(address);
      const transactions = await getWalletTransactions(address);
      // console.log("Fetched data:", { balance, transactions });
      setBalance(balance);
      setTransactions(transactions.slice(0, 10)); // Son 10 işlem
    } catch (error) {
      console.error("Error fetching wallet data:", error);
    }
    setLoading(false); // Veri çekme işlemi tamamlandığında loading durumunu false yap
  };

  const handleSearch = (address: string) => {
    // console.log("Search initiated for address:", address);
    const network = "ethereum"; // Varsayılan ağ türü, burada güncelleyebilirsiniz
    setAddress(address);
    if (typeof window !== "undefined") {
      router.push(`/${address}?network=${network}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} onNetworkChange={handleNetworkChange} />
      <main className="flex-grow container mx-auto p-4 grid grid-cols-12 gap-4">
        {loading ? (
          <div className="col-span-12 text-center">
            <p className="text-lg font-semibold mb-4">Yükleniyor...</p>
          </div>
        ) : address ? (
          <>
            <div className="lg:col-span-4 col-span-12 space-y-4">
              <Portfolio balance={balance} />
              <Dapps />
            </div>
            <div className="lg:col-span-8 col-span-12">
              <TxHistory
                transactions={transactions}
                currentNetwork={network || "ethereum"}
                currentAddress={address}
              />
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
    </div>
  );
};

export default AddressPage;
