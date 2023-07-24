import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Pet Health",
  description: "Pet Health - Gerenciamento de animais do Pet Shop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
