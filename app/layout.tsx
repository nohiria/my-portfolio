import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./ui/components/Header";
import MouseEffect from "./ui/components/MouseEffect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900`}>
        {/* Header */}
        <MouseEffect/>
        <Header></Header>

        {/* Main Content */}
        <main className="container mx-auto p-5 pt-20">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center p-5 mt-10">
          © 2024 My Portfolio | Built with Next.js & TailwindCSS
        </footer>
      </body>
    </html>
  );
}
