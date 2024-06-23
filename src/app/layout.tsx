// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tyche - Blockchain Portfolio Tracker",
  description: "Track your blockchain addresses and transactions effortlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="min-h-screen flex flex-col bg-tycheWhite text-tycheGray">
            {children}
          </div>
        </body>
      </html>
    </AppProvider>
  );
}
