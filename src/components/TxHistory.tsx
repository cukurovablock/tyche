// src/components/TxHistory.tsx
"use client";

import React from "react";

const transactions = [
  {
    date: "14 Mayıs 2024",
    time: "22:10:28",
    from: "c3f511g...",
    to: "muffafa",
    amount: "0.1 ETH",
    value: "93,164.96 TRY",
    type: "out",
  },
  {
    date: "14 Mayıs 2024",
    time: "22:10:28",
    from: "c3f511g...",
    to: "muffafa",
    amount: "0.1 ETH",
    value: "93,164.96 TRY",
    type: "in",
  },
  {
    date: "14 Mayıs 2024",
    time: "22:10:28",
    from: "c3f511g...",
    to: "muffafa",
    amount: "0.1 ETH",
    value: "93,164.96 TRY",
    type: "out",
  },
  {
    date: "14 Mayıs 2024",
    time: "22:10:28",
    from: "c3f511g...",
    to: "muffafa",
    amount: "0.1 ETH",
    value: "93,164.96 TRY",
    type: "in",
  },
  {
    date: "14 Mayıs 2024",
    time: "22:10:28",
    from: "c3f511g...",
    to: "muffafa",
    amount: "0.1 ETH",
    value: "93,164.96 TRY",
    type: "in",
  },
  
];

const TxHistory: React.FC = () => {
  return (
    <div className="p-4 bg-tycheBeige shadow rounded col-span-8">
      <h2 className="text-lg font-semibold mb-4">İşlem Geçmişi</h2>
      <div
        className={`space-y-4 ${
          transactions.length > 5
            ? "max-h-[578px] overflow-y-scroll"
            : "min-h-[578px] "
        }`}
      >
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="flex items-center bg-tycheWhite rounded p-4"
          >
            <div className="flex-grow">
              <p className="text-sm text-tycheGray">
                {tx.date} {tx.time}
              </p>
              <p className="text-sm">
                Kimden: <span className="text-tycheBlue">{tx.from}</span>
              </p>
              <p className="text-sm">
                Kime: <span className="text-tycheBlue">{tx.to}</span>
              </p>
            </div>
            <div
              className={`text-right ${
                tx.type === "in" ? "bg-tycheGreen" : "bg-tycheRed"
              } text-white p-2 rounded`}
            >
              <p className="font-semibold">Miktar: {tx.amount}</p>
              <p>Değer: {tx.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TxHistory;
