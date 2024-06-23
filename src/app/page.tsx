// src/app/page.tsx
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import TxHistory from "@/components/TxHistory";
import Dapps from "@/components/Dapps";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 grid grid-cols-12 gap-4">
        <div className="lg:col-span-4 col-span-12 space-y-4">
          <Portfolio />
          <Dapps />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <TxHistory />
        </div>
      </main>
      <Footer />
    </div>
  );
}
