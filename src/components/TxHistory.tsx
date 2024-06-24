// src/components/TxHistory.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useAppContext } from "@/contexts/AppContext";

const ETH_TO_USD = 3402.5; // Bu değeri güncel ETH/USD fiyatıyla değiştirin
const USD_TO_TRY = 32.81; // Bu değeri güncel USD/TRY kuru ile değiştirin

const TxHistory: React.FC<{
  transactions: any[];
  currentNetwork: string;
  currentAddress: string;
}> = ({ transactions, currentNetwork, currentAddress }) => {
  const { wallets } = useAppContext();

  const getUsernameByAddress = (address: string) => {
    const normalizedAddress = address.toLowerCase();
    const wallet = wallets.find(
      (wallet) =>
        wallet.address.toLowerCase() === normalizedAddress &&
        wallet.network === currentNetwork
    );
    return wallet ? wallet.username : address;
  };

  const shortenAddress = (address: string) => `${address.slice(0, 7)}...`;

  const formatEthValue = (value: string) => {
    const ethValue = parseFloat(value) / 10 ** 18;
    return ethValue.toFixed(6);
  };

  const calculateTryValue = (ethValue: string) => {
    const ethAmount = parseFloat(ethValue) / 10 ** 18;
    const usdValue = ethAmount * ETH_TO_USD;
    const tryValue = usdValue * USD_TO_TRY;
    return tryValue.toFixed(2);
  };

  return (
    <div className="p-4 bg-tycheBeige shadow rounded col-span-8">
      <h2 className="text-lg font-semibold mb-4">İşlem Geçmişi</h2>
      <div
        className={`space-y-4 ${
          transactions.length > 5
            ? "max-h-[510px] overflow-y-scroll"
            : "min-h-[510px]"
        }`}
      >
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="grid grid-cols-3 items-center bg-tycheWhite rounded p-4"
          >
            <div>
              <p className="text-lg font-semibold">
                {new Date(parseInt(tx.timeStamp) * 1000).toLocaleDateString()}
              </p>
              <p className="text-sm text-tycheGray">
                {new Date(parseInt(tx.timeStamp) * 1000).toLocaleTimeString()}
              </p>
              <Link
                href={`https://etherscan.io/tx/${tx.hash}`}
                className="text-tycheBlue"
              >
                {shortenAddress(tx.hash)}
              </Link>
            </div>
            <div className="text-center">
              <p className="text-sm">
                Gönderen:{" "}
                <Link
                  href={`/${tx.from}?network=${currentNetwork}`}
                  className="text-tycheBlue"
                >
                  {getUsernameByAddress(tx.from) !== tx.from
                    ? getUsernameByAddress(tx.from)
                    : shortenAddress(tx.from)}
                </Link>
              </p>
              <p className="text-sm">
                Alan:{" "}
                <Link
                  href={`/${tx.to}?network=${currentNetwork}`}
                  className="text-tycheBlue"
                >
                  {getUsernameByAddress(tx.to) !== tx.to
                    ? getUsernameByAddress(tx.to)
                    : shortenAddress(tx.to)}
                </Link>
              </p>
            </div>
            <div
              className={`text-right p-2 rounded h-full flex flex-col justify-center ${
                tx.from.toLowerCase() === currentAddress.toLowerCase()
                  ? "bg-tycheRed"
                  : "bg-tycheGreen"
              } text-white`}
            >
              <p className="font-semibold">
                Miktar: {formatEthValue(tx.value)} ETH
              </p>
              <p>Değer: {calculateTryValue(tx.value)} TRY</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TxHistory;
