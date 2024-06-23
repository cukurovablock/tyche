// src/components/Portfolio.tsx
"use client";

import React from "react";
import Image from "next/image";

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
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Varlık</th>
            <th>Miktar</th>
            <th>Değer</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, index) => (
            <tr key={index} className="bg-tycheWhite rounded">
              <td>
                <Image src="/ethereum.png" alt="ETH" width={24} height={24} />
              </td>
              <td>0.1 ETH</td>
              <td>93,164.96 TRY</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
