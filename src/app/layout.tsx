import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono, Cormorant_Garamond, Alex_Brush } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { ConciergeBar } from "@/components/molecules/ConciergeBar";
import { CustomCursor } from "@/components/atoms/CustomCursor";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const alexBrush = Alex_Brush({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ['400'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Zing Bliss | Fine Art Event Architecture",
  description: "A bespoke event design and production agency orchestrating understated luxury and profound elegance for life's most defining moments.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-144.png", sizes: "144x144", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

import Image from "next/image";
import { SmoothScroll } from "@/components/atoms/SmoothScroll";

import { BackToTop } from "@/components/atoms/BackToTop";
import { StickyCTA } from "@/components/molecules/StickyCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${cormorant.variable} ${alexBrush.variable} ${jetbrainsMono.variable} antialiased font-sans min-h-screen flex flex-col relative bg-canvas`}
      >
        {/* Global Background Texture */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute top-0 right-0 w-[120vw] h-[120vh] opacity-[0.015] transform translate-x-[10%] -translate-y-[10%] mix-blend-multiply">
            <Image src="/hero-5.jpg" alt="" fill className="object-cover grayscale" priority />
          </div>
          <div className="absolute bottom-0 left-0 w-[80vw] h-[80vh] opacity-[0.02] bg-[radial-gradient(circle_at_center,_#B38B4D_0%,_transparent_60%)] transform -translate-x-1/4 translate-y-1/4" />
          <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] opacity-[0.04] grayscale brightness-110 transform -scale-x-100 mix-blend-multiply">
            <Image src="/decor-8.jpg" alt="" fill className="object-contain object-bottom" />
          </div>
        </div>

        <SmoothScroll>
          <div className="noise-overlay" />
          <div className="ink-bleed" />
          <CustomCursor />
          <BackToTop />
          <StickyCTA />
          <Navbar />
          <div className="flex-grow main-content relative z-10">
            {children}
          </div>
          <Footer />
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
