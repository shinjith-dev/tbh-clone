import type { Metadata } from "next";
import "./globals.css";
import { modernEra } from "@/lib/fonts";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "tbh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${modernEra.className} scroll-smooth bg-background-1 tracking-[-0.03em] text-fg antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
