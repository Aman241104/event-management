import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { ConciergeBar } from "@/components/molecules/ConciergeBar";
import { CustomCursor } from "@/components/atoms/CustomCursor";
import { Preloader } from "@/components/molecules/Preloader";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
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
        className={`${montserrat.variable} ${cormorant.variable} ${jetbrainsMono.variable} antialiased font-sans min-h-screen flex flex-col relative`}
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
