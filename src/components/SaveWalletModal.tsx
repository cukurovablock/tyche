// src/components/SaveWalletModal.tsx
"use client";

import React, { useState } from "react";
import { useAppContext } from "@/contexts/AppContext";

const SaveWalletModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  address: string;
  username: string;
  network: string;
  onAddressChange: (address: string) => void;
  onUsernameChange: (username: string) => void;
  onNetworkChange: (network: string) => void;
  onSave: () => void;
}> = ({
  isOpen,
  onClose,
  address,
  username,
  network,
  onAddressChange,
  onUsernameChange,
  onNetworkChange,
  onSave,
}) => {
  const { saveWallet } = useAppContext();
  const [inputUsername, setInputUsername] = useState(username);

  if (!isOpen) return null;

  const handleSave = () => {
    if (
      address.trim() !== "" &&
      inputUsername.trim() !== "" &&
      network.trim() !== ""
    ) {
      saveWallet(address, network, inputUsername);
      onUsernameChange(inputUsername);
      onSave();
      onClose();
    } else {
      alert(
        "Lütfen geçerli bir cüzdan adresi, kullanıcı adı ve ağ tipi girin."
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Cüzdanı Kaydet</h2>
        <input
          type="text"
          placeholder="Cüzdan adresi"
          className="p-2 border border-gray-300 rounded w-full mb-4"
          value={address}
          onChange={(e) => onAddressChange(e.target.value)}
        />
        <input
          type="text"
          placeholder="Kullanıcı adı"
          className="p-2 border border-gray-300 rounded w-full mb-4"
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
        />
        <select
          className="p-2 border border-gray-300 rounded w-full mb-4"
          value={network}
          onChange={(e) => onNetworkChange(e.target.value)}
        >
          <option value="ethereum">Ethereum</option>
          {/* <option value="bitcoin">Bitcoin</option>
          <option value="bnb">BNB Smart Chain</option>
          <option value="avalanche">Avalanche</option>
          <option value="solana">Solana</option>
          <option value="cosmos">Cosmos</option> */}
        </select>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-300 p-2 rounded">
            İptal
          </button>
          <button
            onClick={handleSave}
            className="bg-tycheGreen text-white p-2 rounded"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveWalletModal;
