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
  title: "Zing Bliss | Fine Art Event Architecture",
  description: "A bespoke event design and production agency orchestrating understated luxury and profound elegance for life's most defining moments.",
};

import { SmoothScroll } from "@/components/atoms/SmoothScroll";
import { SectionNavigator } from "@/components/molecules/SectionNavigator";
import { AudioToggle } from "@/components/atoms/AudioToggle";

import { BackToTop } from "@/components/atoms/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased font-sans min-h-screen flex flex-col relative`}
      >
        <SmoothScroll>
          <div className="noise-overlay" />
          <div className="ink-bleed" />
          <Preloader />
          <SectionNavigator />
          <CustomCursor />
          <AudioToggle />
          <BackToTop />
          <Navbar />
          <div className="flex-grow main-content relative z-10">
            {children}
          </div>
          <Footer />
          <ConciergeBar />
          <InkBleedScroll />
        </SmoothScroll>
      </body>
    </html>
  );
}

function InkBleedScroll() {
  return (
    <div className="hidden" /> // Component to handle GSAP logic for ink-bleed if needed, but we can do it in layout with useGSAP
  );
}
