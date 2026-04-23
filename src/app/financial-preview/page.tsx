'use client';

import React from 'react';
import { WhyChooseUs } from '@/components/organisms/WhyChooseUs';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { CustomCursor } from '@/components/atoms/CustomCursor';
import { SmoothScroll } from '@/components/atoms/SmoothScroll';

export default function FinancialPreviewPage() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen bg-canvas">
        {/* Hero Placeholder */}
        <section className="h-[60vh] flex items-center justify-center bg-heritage-dark text-canvas relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(179,139,77,0.15),transparent_50%)]" />
          <div className="container relative z-10 text-center">
            <span className="small-caps text-burnished mb-4 block">Institutional Grade Oversight</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6">Financial Mastery.</h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto font-light italic">
              "Precision in every number, integrity in every decision."
            </p>
          </div>
        </section>

        {/* The New Section */}
        <WhyChooseUs />

        {/* Content Placeholder */}
        <section className="py-24 bg-canvas border-t border-linen">
          <div className="container text-center">
            <h2 className="text-3xl font-serif mb-8 text-heritage">Secure Your Legacy.</h2>
            <div className="w-16 h-1 bg-burnished mx-auto mb-12" />
            <p className="text-text-secondary max-w-xl mx-auto mb-12">
              Contact our senior partners today for a confidential consultation regarding your family office or institutional needs.
            </p>
            <button className="btn-emerald-gold px-12 py-5 rounded-full text-white uppercase tracking-[0.3em] font-bold text-[10px]">
              Request a Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
