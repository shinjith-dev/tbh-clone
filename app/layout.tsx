import type { Metadata } from "next";
import "./globals.css";
import { modernEra } from "@/lib/fonts";
import Navbar from "@/components/common/navbar";

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
        className={`${modernEra.className} bg-background-1 antialiased scroll-smooth`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
