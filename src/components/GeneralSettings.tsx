// src/components/GeneralSettings.tsx
"use client";

import React, { useState } from "react";
import { useAppContext } from "@/contexts/AppContext";

const GeneralSettings: React.FC = () => {
  const { saveWallet } = useAppContext();
  const [newAddress, setNewAddress] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newNetwork, setNewNetwork] = useState("ethereum");
  const [currency, setCurrency] = useState("usd");
  const [timeZone, setTimeZone] = useState("gmt");

  const handleSaveWallet = () => {
    if (newAddress && newUsername && newNetwork) {
      saveWallet(newAddress, newNetwork, newUsername);
      setNewAddress("");
      setNewUsername("");
      setNewNetwork("ethereum");
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Genel Ayarlar</h2>
      <div className="mb-4">
        <label className="block mb-2">Para Birimi</label>
        <select
          className="p-2 border border-gray-300 rounded w-full"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="usd">USD</option>
          <option value="try">TRY</option>
          <option value="eur">EUR</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Saat Dilimi</label>
        <select
          className="p-2 border border-gray-300 rounded w-full"
          value={timeZone}
          onChange={(e) => setTimeZone(e.target.value)}
        >
          <option value="gmt">GMT</option>
          <option value="utc">UTC</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Tema</label>
        <select className="p-2 border border-gray-300 rounded w-full">
          <option value="light">Açık</option>
          <option value="dark">Koyu</option>
        </select>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={handleSaveWallet}
          className="bg-tycheGreen text-white p-2 rounded"
          disabled={!newAddress || !newUsername}
        >
          Kaydet
        </button>
      </div>
    </div>
  );
};

export default GeneralSettings;
