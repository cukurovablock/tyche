"use client";

import React from "react";

const TxHistory: React.FC<{ transactions: any[] }> = ({ transactions }) => {
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
                {new Date(parseInt(tx.timeStamp) * 1000).toLocaleString()}
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
                tx.isError === "0" ? "bg-tycheGreen" : "bg-tycheRed"
              } text-white p-2 rounded`}
            >
              <p className="font-semibold">Miktar: {tx.value} ETH</p>
              <p>Durum: {tx.isError === "0" ? "Başarılı" : "Başarısız"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TxHistory;
