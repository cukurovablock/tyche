"use client";

import React, { useState } from "react";
import GeneralSettings from "./GeneralSettings";
import WalletAddresses from "./WalletAddresses";
import Modal from "./Modal"; // Modal bileşenini import ediyoruz

const Settings: React.FC<{ className?: string }> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Durumları tanımlıyoruz

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`p-2 border border-gray-300 rounded ${className}`}
      >
        Ayarlar
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-4 overflow-y-scroll max-h-[512px]">
          <GeneralSettings />
          <WalletAddresses />
        </div>
      </Modal>
    </div>
  );
};

export default Settings;
