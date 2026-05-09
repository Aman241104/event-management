import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono, Cormorant_Garamond, Alex_Brush } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { ConciergeBar } from "@/components/molecules/ConciergeBar";

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
  metadataBase: new URL("https://zingblissevents.com"),
  title: {
    default: "Zing Bliss Events | Best Wedding Planner & Event Management in Ahmedabad",
    template: "%s | Zing Bliss Events"
  },
  description: "Zing Bliss Events is the premier luxury event management and wedding planning agency in Ahmedabad, Gujarat. We specialize in high-end weddings, corporate galas, and bespoke celebrations with absolute precision.",
  keywords: [
    "Zing Bliss Events", 
    "Wedding Planner in Ahmedabad", 
    "Best Event Management Company Ahmedabad", 
    "Luxury Wedding Decorators Ahmedabad", 
    "Corporate Event Planner Gujarat", 
    "Bespoke Celebrations Ahmedabad",
    "Destination Wedding Planner Ahmedabad",
    "Event Production Ahmedabad"
  ],
  authors: [{ name: "Zing Bliss Events" }],
  creator: "Zing Bliss Events",
  publisher: "Zing Bliss Events",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Zing Bliss Events | Best Wedding Planner in Ahmedabad",
    description: "The premier luxury event management agency in Ahmedabad. We craft bespoke, high-end celebrations with understated luxury and flawless precision.",
    url: "https://zingblissevents.com",
    siteName: "Zing Bliss Events",
    images: [
      {
        url: "/hero-5.jpg",
        width: 1200,
        height: 630,
        alt: "Zing Bliss Events - Luxury Event Production Ahmedabad",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zing Bliss Events | Premier Event Planner in Ahmedabad",
    description: "Bespoke luxury event management in Ahmedabad, Gujarat. Engineering elite celebrations with logistical mastery.",
    images: ["/hero-5.jpg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", sizes: "48x48", type: "image/png" },
      { url: "/logo.png", sizes: "96x96", type: "image/png" },
      { url: "/logo.png", sizes: "144x144", type: "image/png" },
    ],
    apple: "/logo.png",
  },
};

import Image from "next/image";
import { SmoothScroll } from "@/components/atoms/SmoothScroll";

import { BackToTop } from "@/components/atoms/BackToTop";
import { FloatingWhatsApp } from "@/components/molecules/FloatingWhatsApp";

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
            <Image src="/hero-5.jpg" alt="" fill className="object-cover" priority />
          </div>
          <div className="absolute bottom-0 left-0 w-[80vw] h-[80vh] opacity-[0.02] bg-[radial-gradient(circle_at_center,_#B38B4D_0%,_transparent_60%)] transform -translate-x-1/4 translate-y-1/4" />
          <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] opacity-[0.04] brightness-110 transform -scale-x-100 mix-blend-multiply">
            <Image src="/decor-8.jpg" alt="" fill className="object-contain object-bottom" />
          </div>
        </div>

        <SmoothScroll>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Zing Bliss Events",
                "url": "https://zingblissevents.com",
                "logo": "https://zingblissevents.com/logo.png",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Sindhu Bhavan Road",
                  "addressLocality": "Ahmedabad",
                  "addressRegion": "Gujarat",
                  "postalCode": "380054",
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-98765-43210",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": "en"
                },
                "sameAs": [
                  "https://www.instagram.com/zingblissevents/",
                  "https://www.facebook.com/zingblissevents/"
                ]
              })
            }}
          />
          <div className="noise-overlay" />
          <div className="ink-bleed" />
          <BackToTop />
          <FloatingWhatsApp />
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
