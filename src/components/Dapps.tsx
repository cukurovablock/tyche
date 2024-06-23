// src/components/Dapps.tsx
"use client";

import React from "react";
import Image from "next/image";

const Dapps: React.FC = () => {
  return (
    <div className="p-4 bg-tycheBeige shadow rounded col-span-4">
      <h2 className="text-lg font-semibold mb-4">Merkeziyetsiz Uygulama</h2>
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex items-center bg-tycheWhite rounded p-4"
          >
            <div className="flex-shrink-0">
              <Image src="/uniswap.png" alt="Uniswap" width={32} height={32} />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="text-md font-semibold">Uniswap</h3>
              <p className="text-sm text-tycheGray">
                Tokenlerinizi kolayca değiştirin veya geri alın.
              </p>
            </div>
            <a href="#" className="text-tycheBlue ml-4">
              Git
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dapps;
