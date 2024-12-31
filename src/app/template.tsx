import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anypay - Bitcoin Payments",
  description: "Bitcoin, Ethereum, Stablecoins Payments Gateway for Apps & Websites",
  viewport: "initial-scale=1, width=device-width",
  themeColor: "#000000",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 