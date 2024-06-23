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

const AddressPage = () => {
  const router = useRouter();
  const address = router.query.address as string | undefined;
  const network = router.query.network as string | undefined;
  const { setAddress, handleNetworkChange, wallets } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (address) {
      setAddress(address);
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

  const handleSearch = (address: string) => {
    setAddress(address);
    if (typeof window !== "undefined") {
      const network = "ethereum"; // Varsayılan ağ türü, burada güncelleyebilirsiniz
      router.push(`/${address}?network=${network}`);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} />
      <main className="flex-grow container mx-auto p-4 grid grid-cols-12 gap-4">
        {address ? (
          <>
            <div className="lg:col-span-4 col-span-12 space-y-4">
              <Portfolio />
              <Dapps />
            </div>
            <div className="lg:col-span-8 col-span-12">
              <TxHistory />
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
      {isModalOpen && (
        <SaveWalletModal
          address={address!}
          network={network!}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default AddressPage;
