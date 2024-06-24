// src/components/SettingsModal.tsx
"use client";

import React from "react";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  address: string;
  username: string;
  network: string;
  onAddressChange: (address: string) => void;
  onUsernameChange: (username: string) => void;
  onNetworkChange: (network: string) => void;
  onSave: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Cüzdan Ayarları</h2>
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
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)} // Bu satırı ekleyin
        />
        <select
          className="p-2 border border-gray-300 rounded w-full mb-4"
          value={network}
          onChange={(e) => onNetworkChange(e.target.value)}
        >
          <option value="ethereum">Ethereum</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bnb">BNB Smart Chain</option>
          <option value="avalanche">Avalanche</option>
          <option value="solana">Solana</option>
          <option value="cosmos">Cosmos</option>
        </select>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-300 p-2 rounded">
            İptal
          </button>
          <button
            onClick={onSave}
            className="bg-tycheGreen text-white p-2 rounded"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
