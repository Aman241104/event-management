import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { ConciergeBar } from "@/components/molecules/ConciergeBar";
import { CustomCursor } from "@/components/atoms/CustomCursor";
import { Preloader } from "@/components/molecules/Preloader";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prestige Event Management",
  description: "High-fidelity, luxury event management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased font-sans min-h-screen flex flex-col`}
      >
        <Preloader />
        <CustomCursor />
        <Navbar />
        <div className="flex-grow main-content">
          {children}
        </div>
        <Footer />
        <ConciergeBar />
      </body>
    </html>
  );
}
