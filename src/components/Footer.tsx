import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-tycheWhite shadow mt-4">
      <div className="flex justify-between items-center">
        <div className="relative h-8 w-8">
          <Image
            src="/tyche.png"
            alt="Tyche Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col items-center">
          <p>&copy; {new Date().getFullYear()} Tyche</p>
          <p>Tüm Hakları Saklıdır</p>
        </div>
        <div>
          <a
            href="https://github.com/cukurovablock/tyche"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            İletişim
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
