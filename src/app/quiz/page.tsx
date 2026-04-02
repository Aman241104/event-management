'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { TextReveal } from '@/components/atoms/TextReveal';
import { ArrowRight, Sparkles, Wand2, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const questions = [
  {
    question: "What kind of feel do you want?",
    options: [
      { id: 'classic', label: 'Classic', desc: 'Grand, traditional, and timeless.' },
      { id: 'modern', label: 'Modern', desc: 'Sleek, simple, and clean.' },
      { id: 'botanical', label: 'Natural', desc: 'Lots of greenery and flowers.' },
      { id: 'avantgarde', label: 'Artistic', desc: 'Bold, creative, and unique.' },
    ]
  },
  {
    question: "Pick your favorite colors.",
    options: [
      { id: 'jewel', label: 'Rich Colors', desc: 'Deep reds, greens, and blues.' },
      { id: 'neutral', label: 'Soft Neutrals', desc: 'White, cream, and warm wood.' },
      { id: 'monochrome', label: 'Black & White', desc: 'High contrast and sharp.' },
      { id: 'pastel', label: 'Pastels', desc: 'Soft pinks, blues, and purples.' },
    ]
  },
  {
    question: "What matters most to you?",
    options: [
      { id: 'experience', label: 'Guest Fun', desc: 'Great activities and flow.' },
      { id: 'aesthetic', label: 'Look & Style', desc: 'Amazing decor and design.' },
      { id: 'culinary', label: 'Great Food', desc: 'A focus on the best dining.' },
      { id: 'entertainment', label: 'The Show', desc: 'Music and performances.' },
    ]
  }
];

export default function QuizPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  useGSAP(() => {
    gsap.from('.quiz-element', { y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out' });
  }, { scope: containerRef, dependencies: [currentStep, isGenerating] });

  const handleSelect = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [currentStep]: optionId }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsGenerating(true);
      setTimeout(() => {
        setIsGenerating(false);
        setCurrentStep(questions.length);
      }, 2000);
    }
  };

  if (isGenerating) {
    return (
      <main ref={mainRef} className="min-h-screen bg-canvas flex flex-col items-center justify-center text-center space-y-6 px-6">
        <div className="w-20 h-20 rounded-full border border-linen flex items-center justify-center animate-pulse">
          <Wand2 size={32} className="text-heritage animate-spin-slow" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-serif text-text-primary italic">Finding Your <span className="text-heritage">Style...</span></h2>
          <p className="text-text-secondary font-sans font-light uppercase tracking-[0.4em] text-[9px]">We are creating your custom event plan.</p>
        </div>
      </main>
    );
  }

  if (currentStep >= questions.length) {
    return (
      <main ref={mainRef} className="min-h-screen bg-surface flex items-center justify-center">
        <section className="container max-w-3xl text-center space-y-10 quiz-element">
          <div className="space-y-4">
            <Badge variant="solid" className="bg-heritage/10 text-heritage uppercase tracking-widest font-bold px-6 py-2 text-[10px]">Result Ready</Badge>
            <h1 className="text-5xl md:text-7xl font-serif text-text-primary font-bold tracking-tighter">Your style is <br/><span className="text-heritage italic font-light">Heritage Modern</span></h1>
            <p className="text-lg text-text-secondary font-sans font-light max-w-2xl mx-auto">
              Based on your answers, you like a mix of traditional grandeur and clean, modern luxury. Let's start planning!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="solid" className="btn-prestige py-5 px-10 text-sm">Download Ideas</Button>
            <Link href="/contact"><Button variant="outline" className="btn-outline-prestige py-5 px-10 text-sm">Talk to Us</Button></Link>
          </div>
        </section>
      </main>
    );
  }

  const currentQ = questions[currentStep];
  const hasAnswered = !!answers[currentStep];

  return (
    <main ref={mainRef} className="min-h-screen bg-canvas flex flex-col justify-center py-12">
      <div ref={containerRef} className="container max-w-4xl">
        <div className="space-y-6 mb-12 quiz-element text-center md:text-left">
          <span className="text-[10px] font-mono text-heritage uppercase tracking-widest font-bold">Step {currentStep + 1} of {questions.length}</span>
          <TextReveal as="h1" text={currentQ.question} className="text-4xl md:text-6xl font-serif text-text-primary font-bold tracking-tight italic" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 quiz-element">
          {currentQ.options.map((opt) => {
            const isSelected = answers[currentStep] === opt.id;
            return (
              <button key={opt.id} onClick={() => handleSelect(opt.id)} className={`text-left p-8 border transition-all duration-500 group relative overflow-hidden ${isSelected ? 'border-heritage bg-heritage-soft/10' : 'border-linen hover:border-heritage/20'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-xl font-serif font-bold ${isSelected ? 'text-heritage' : 'text-text-primary'} italic`}>{opt.label}</h3>
                  {isSelected && <Check size={16} className="text-heritage" />}
                </div>
                <p className="text-[13px] text-text-secondary font-light">{opt.desc}</p>
              </button>
            );
          })}
        </div>
        <div className="mt-12 flex justify-between items-center quiz-element pt-8 border-t border-linen">
          <button onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))} className={`text-[10px] uppercase tracking-[0.4em] font-bold text-text-secondary hover:text-heritage transition-all ${currentStep === 0 ? 'opacity-0 pointer-events-none' : ''}`}>Back</button>
          <Button variant="solid" className="btn-prestige px-10 py-4 text-sm" disabled={!hasAnswered} onClick={handleNext} rightIcon={<ArrowRight size={16} />}>
            {currentStep === questions.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </main>
  );
}
