// src/components/Portfolio.tsx
"use client";

import React from "react";
import Image from "next/image";

const portfolioData = [
  {
    asset: "ETH",
    amount: "0.1",
    value: "93,164.96 TRY",
    imageUrl: "/ethereum.png",
  },
  {
    asset: "ETH",
    amount: "0.1",
    value: "93,164.96 TRY",
    imageUrl: "/ethereum.png",
  },
  {
    asset: "ETH",
    amount: "0.1",
    value: "93,164.96 TRY",
    imageUrl: "/ethereum.png",
  },
  {
    asset: "ETH",
    amount: "0.1",
    value: "93,164.96 TRY",
    imageUrl: "/ethereum.png",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="p-4 bg-tycheBeige shadow rounded col-span-4">
      <h2 className="text-lg font-semibold mb-4">Portföy</h2>
      <div className="flex justify-between mb-2">
        <button className="bg-tycheGreen text-white px-4 py-2 rounded">
          Bakiye
        </button>
        <button className="bg-tycheGray text-white px-4 py-2 rounded">
          NFT
        </button>
      </div>
      <div className="text-right text-tycheGray mb-2">Grafik Dağılımı</div>
      {portfolioData.length === 0 ? (
        <p className="text-center text-tycheGray">Bakiyeniz yok</p>
      ) : (
        <div className="relative">
          <div className="sticky top-0 bg-tycheBeige z-10">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>Varlık</th>
                  <th>Miktar</th>
                  <th>Değer</th>
                </tr>
              </thead>
            </table>
          </div>
          <div
            className={`overflow-y-scroll ${
              portfolioData.length > 3 ? "max-h-[142px]" : "min-h-[142px]"
            }`}
          >
            <table className="w-full text-left">
              <tbody>
                {portfolioData.map((item, index) => (
                  <tr key={index} className="bg-tycheWhite rounded">
                    <td className="p-2">
                      <Image
                        src={item.imageUrl}
                        alt={item.asset}
                        width={24}
                        height={24}
                      />
                    </td>
                    <td className="p-2">
                      {item.amount} {item.asset}
                    </td>
                    <td className="p-2">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
