// src/components/WalletAddresses.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAppContext } from "@/contexts/AppContext";
import SaveWalletModal from "./SaveWalletModal";

const WalletAddresses: React.FC = () => {
  const { wallets, saveWallet, deleteWallet } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState("");
  const [editingUsername, setEditingUsername] = useState("");
  const [editingNetwork, setEditingNetwork] = useState("");

  const handleOpenModal = (
    address: string,
    username: string,
    network: string
  ) => {
    setEditingAddress(address);
    setEditingUsername(username);
    setEditingNetwork(network);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (
      editingAddress.trim() !== "" &&
      editingUsername.trim() !== "" &&
      editingNetwork.trim() !== ""
    ) {
      saveWallet(editingAddress, editingNetwork, editingUsername);
      setIsModalOpen(false);
    } else {
      alert(
        "Lütfen geçerli bir cüzdan adresi, kullanıcı adı ve ağ tipi girin."
      );
    }
  };

  const handleDelete = (address: string, network: string) => {
    deleteWallet(address, network); // Artık ağ parametresini de geçiriyoruz
  };

  const shortenAddress = (address: string) => `${address.slice(0, 7)}...`;

  return (
    <div className="p-4 bg-tycheBeige shadow rounded col-span-4">
      <h2 className="text-lg font-semibold mb-4">Cüzdan Adresleri</h2>
      <button
        onClick={() => handleOpenModal("", "", "ethereum")}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Yeni Cüzdan Adresi Ekle
      </button>
      <div className="relative">
        <div className="sticky top-0 bg-tycheBeige z-10">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th>Cüzdan Adresi</th>
                <th>Kullanıcı İsmi</th>
                <th>Ağ Tipi</th>
                <th>İşlemler</th>
              </tr>
            </thead>
          </table>
        </div>
        <div
          className={`overflow-y-scroll ${
            wallets.length > 3 ? "max-h-[142px]" : "min-h-[142px]"
          }`}
        >
          <table className="w-full text-left">
            <tbody>
              {wallets.map((wallet, index) => (
                <tr
                  key={wallet.address + wallet.network}
                  className="bg-tycheWhite rounded"
                >
                  <td className="p-2">
                    <Link
                      href={`/${wallet.address}?network=${wallet.network}`}
                      className="text-tycheBlue"
                    >
                      {shortenAddress(wallet.address)}
                    </Link>
                  </td>
                  <td className="p-2">{wallet.username}</td>
                  <td className="p-2">{wallet.network}</td>
                  <td className="p-2 flex space-x-2">
                    <button
                      onClick={() =>
                        handleOpenModal(
                          wallet.address,
                          wallet.username,
                          wallet.network
                        )
                      }
                      className="bg-yellow-500 text-white px-2 py-1 rounded"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() =>
                        handleDelete(wallet.address, wallet.network)
                      }
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <SaveWalletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        address={editingAddress}
        username={editingUsername}
        network={editingNetwork}
        onAddressChange={setEditingAddress}
        onUsernameChange={setEditingUsername}
        onNetworkChange={setEditingNetwork}
        onSave={handleSave}
      />
    </div>
  );
};

export default WalletAddresses;
