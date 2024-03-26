"use client"

import { Inter } from "next/font/google";
import "./ui/globals.css";
import Sidebar from "./ui/sidebar";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextUIProvider>
        <body className={`${inter.className} flex h-screen flex-col md:flex-row md:overflow-hidden`}>
          <div className="w-{120px} flex-none md:basis-1/6">
            <Sidebar />
          </div>
          <div className="flex-grow md:overflow-y-auto">{children}</div>
        </body>
      </NextUIProvider>
    </html>
  );
}
