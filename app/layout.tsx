import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/components/Header";
import MouseEffect from "./ui/components/MouseEffect";
import { poppins, roboto_mono } from "./fonts";

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
      <body className={`${poppins.className} ${roboto_mono.className} antialiased bg-gray-100 text-gray-900 flex flex-col max-h-screen`}>
        {/* Header */}
        <MouseEffect />
        <Header></Header>

        {/* Main Content */}
        <main className="flex-grow overflow-hidden pt-0 md:pt-[10vh]">{children}</main>

        {/* Footer */}
        <footer className="hidden md:block fixed bottom-0 left-0 w-full 
                  text-white-300 text-left text-xs pl-8 pb-3 z-20 
                   ">
          © 2024 My Portfolio | Built with Next.js & TailwindCSS
        </footer>
      </body>
    </html>
  );
}
