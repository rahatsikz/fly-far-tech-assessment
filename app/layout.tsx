import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import Providers from "@/lib/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fly Far Tech",
  description: "Landing page for Fly Far Tech",
  authors: [{ name: "Rahat Newaz Sikder", url: "https://rahatsikder.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layoutStyles = {
    display: "flex",
    flexDirection: "column" as const,
    minHeight: "100vh",
    margin: "0 auto",
    maxWidth: "1680px",
    padding: "0 20px",
  };

  return (
    <html lang='en'>
      <body
        className={`${geistSans.className} ${geistMono.variable} `}
        style={layoutStyles}
      >
        <Navbar />
        <Providers>{children}</Providers>
        <div>Footer</div>
      </body>
    </html>
  );
}
