"use client";

import React from "react";
import Image from "next/image";

const dappsData = [
  {
    name: "Uniswap",
    description: "Tokenlerinizi kolayca değiştirin veya geri alın.",
    imageUrl: "/uniswap.png",
    link: "#",
  },
  {
    name: "SushiSwap",
    description: "DeFi ve token swap platformu.",
    imageUrl: "/sushiswap.png",
    link: "#",
  },
  {
    name: "Aave",
    description: "Kripto borç verme ve ödünç alma.",
    imageUrl: "/aave.png",
    link: "#",
  },
  {
    name: "Compound",
    description: "DeFi borç verme platformu.",
    imageUrl: "/compound.png",
    link: "#",
  },
];

const Dapps: React.FC = () => {
  return (
    <div className="p-4 bg-tycheBeige shadow rounded col-span-4">
      <h2 className="text-lg font-semibold mb-4">Merkeziyetsiz Uygulama</h2>
      <div
        className={`space-y-4 ${
          dappsData.length > 2
            ? "max-h-[240px] overflow-y-scroll"
            : "min-h-[240px]"
        }`}
      >
        {dappsData.map((dapp, index) => (
          <div
            key={index}
            className="flex items-center bg-tycheWhite rounded p-4"
          >
            <div className="flex-shrink-0">
              <Image
                src={dapp.imageUrl}
                alt={dapp.name}
                width={32}
                height={32}
              />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="text-md font-semibold">{dapp.name}</h3>
              <p className="text-sm text-tycheGray">{dapp.description}</p>
            </div>
            <a href={dapp.link} className="text-tycheBlue ml-4">
              Git
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dapps;
