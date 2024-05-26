import React from "react";
import Portfolio from "@/components/Portfolio";
import TxHistory from "@/components/TxHistory";
import Dapps from "@/components/Dapps";

export default function Home() {
  return (
    <main className="flex-grow container mx-auto p-4 grid grid-cols-12 gap-4">
      <div className="col-span-4 space-y-4">
        <Portfolio />
        <Dapps />
      </div>
      <div className="col-span-8">
        <TxHistory />
      </div>
    </main>
  );
}
