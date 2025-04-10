import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} `}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: "0 auto",
        }}
      >
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <div>Footer</div>
      </body>
    </html>
  );
}
