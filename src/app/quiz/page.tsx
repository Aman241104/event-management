'use client';

import React, { useState, useRef } from 'react';
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
    question: "How would you describe your ideal atmosphere?",
    options: [
      { id: 'classic', label: 'Classic & Heritage', desc: 'Palatial, grand, and timeless.' },
      { id: 'modern', label: 'Modern & Minimal', desc: 'Sleek lines and understated luxury.' },
      { id: 'botanical', label: 'Organic & Botanical', desc: 'Lush greenery and natural light.' },
      { id: 'avantgarde', label: 'Avant-Garde', desc: 'Bold, artistic, and unconventional.' },
    ]
  },
  {
    question: "Select a color palette that speaks to you.",
    options: [
      { id: 'jewel', label: 'Jewel Tones', desc: 'Emerald, Sapphire, Ruby.' },
      { id: 'neutral', label: 'Earthy Neutrals', desc: 'Ivory, Sand, Warm Stone.' },
      { id: 'monochrome', label: 'High Contrast', desc: 'Obsidian Black & Pure White.' },
      { id: 'pastel', label: 'Soft Pastels', desc: 'Dusty Rose, Mint, Lavender.' },
    ]
  },
  {
    question: "What is the primary focus of the event?",
    options: [
      { id: 'experience', label: 'Guest Experience', desc: 'Immersive activities and flow.' },
      { id: 'aesthetic', label: 'Visual Impact', desc: 'Breathtaking decor and design.' },
      { id: 'culinary', label: 'Culinary Journey', desc: 'Gastronomic excellence.' },
      { id: 'entertainment', label: 'Entertainment', desc: 'World-class performances.' },
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
    // Initial reveal
    gsap.from('.quiz-element', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
    });

    // Background color shifts
    const sections = gsap.utils.toArray<HTMLElement>('section[data-bg]');
    sections.forEach((section) => {
      const bgColor = section.getAttribute('data-bg');
      if (bgColor) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => gsap.to(mainRef.current, { backgroundColor: bgColor, duration: 1.2, ease: 'power2.inOut' }),
          onEnterBack: () => gsap.to(mainRef.current, { backgroundColor: bgColor, duration: 1.2, ease: 'power2.inOut' }),
        });
      }
    });
  }, { scope: containerRef, dependencies: [currentStep, isGenerating] });

  const handleSelect = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [currentStep]: optionId }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsGenerating(true);
      // Simulate AI generation
      setTimeout(() => {
        setIsGenerating(false);
        setCurrentStep(questions.length); // Show result state
      }, 3000);
    }
  };

  if (isGenerating) {
    return (
      <main ref={mainRef} className="min-h-screen bg-canvas flex flex-col items-center justify-center text-center space-y-12 px-6 transition-colors duration-1000">
        <div className="w-32 h-32 rounded-full border-2 border-linen flex items-center justify-center animate-pulse shadow-inner relative">
          <div className="absolute inset-0 bg-heritage/10 rounded-full blur-xl animate-pulse" />
          <Wand2 size={48} className="text-heritage animate-spin-slow relative z-10" />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-7xl font-serif text-text-primary">Distilling Your <span className="text-heritage italic">Aesthetic...</span></h2>
          <p className="text-text-secondary font-sans font-light uppercase tracking-[0.4em] text-xs">Our AI is curating your bespoke Event DNA.</p>
        </div>
      </main>
    );
  }

  if (currentStep >= questions.length) {
    return (
      <main ref={mainRef} className="min-h-screen bg-surface selection:bg-heritage selection:text-canvas relative transition-colors duration-1000">
        <div ref={containerRef} className="relative">
          
          <section className="min-h-screen flex items-center justify-center py-48 md:py-72" data-bg="var(--color-surface)">
            <div className="max-w-3xl w-full px-6 space-y-16 text-center quiz-element">
              <div className="flex flex-col items-center gap-8">
                <span className="text-[10px] font-mono text-heritage/40 uppercase tracking-[0.5em]">ANALYSIS COMPLETE — BESPOKE PROFILE</span>
                <div className="mx-auto w-24 h-24 bg-heritage/10 rounded-full flex items-center justify-center text-heritage shadow-inner">
                  <Sparkles size={40} />
                </div>
              </div>
              <div className="space-y-8">
                <Badge variant="solid" className="bg-heritage/10 text-heritage uppercase tracking-widest font-bold px-8 py-3">Event DNA Unlocked</Badge>
                <h1 className="text-5xl md:text-[7rem] font-serif text-text-primary font-bold leading-[0.9] tracking-tighter">Your Aesthetic is <br/><span className="text-heritage italic font-light">Heritage Modern</span></h1>
                <p className="text-xl md:text-2xl text-text-secondary font-sans font-light leading-relaxed max-w-2xl mx-auto">
                  Based on your selections, your ideal event balances palatial grandeur with sleek, understated luxury. A bespoke Vision PDF has been curated for you.
                </p>
              </div>
              <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
                <Button variant="solid" className="btn-prestige py-8 px-16 text-lg font-bold">Download Vision Board</Button>
                <Button variant="outline" className="btn-outline-prestige py-8 px-16 text-lg font-bold">Book Discovery Call</Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }

  const currentQ = questions[currentStep];
  const hasAnswered = !!answers[currentStep];

  return (
    <main ref={mainRef} className="min-h-screen bg-canvas selection:bg-heritage selection:text-canvas relative transition-colors duration-1000">
      <div ref={containerRef} className="relative">

        <section className="min-h-screen flex flex-col justify-center py-48 md:py-72" data-bg="var(--color-canvas)">
          <div className="container max-w-5xl flex-1 flex flex-col justify-center">
            
            <div className="space-y-10 mb-24 quiz-element text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <span className="text-[10px] font-mono text-heritage/40 uppercase tracking-[0.5em]">10 / ASSESSMENT — EVENT PROFILE</span>
                <div className="h-px w-24 bg-heritage/20 hidden md:block" />
                <span className="text-[11px] font-mono text-heritage uppercase tracking-widest font-bold">Step {currentStep + 1} of {questions.length}</span>
              </div>
              <TextReveal 
                as="h1"
                text={currentQ.question}
                className="text-4xl md:text-7xl font-serif text-text-primary font-bold leading-tight tracking-tight"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 quiz-element">
              {currentQ.options.map((opt) => {
                const isSelected = answers[currentStep] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.id)}
                    className={`text-left p-12 border transition-all duration-700 group relative overflow-hidden shadow-sm
                      ${isSelected ? 'border-heritage bg-surface/80 shadow-xl' : 'border-linen hover:border-heritage/50 hover:bg-surface/40'}`}
                  >
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <h3 className={`text-2xl font-serif font-bold ${isSelected ? 'text-heritage' : 'text-text-primary'} transition-colors duration-500`}>{opt.label}</h3>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${isSelected ? 'bg-heritage border-heritage text-canvas' : 'border-linen text-transparent group-hover:border-heritage/50'}`}>
                        <Check size={16} />
                      </div>
                    </div>
                    <p className="text-base font-sans font-light text-text-secondary relative z-10 leading-relaxed transition-colors duration-500">{opt.desc}</p>
                    {isSelected && <div className="absolute inset-x-0 bottom-0 h-1 bg-heritage pointer-events-none" />}
                    <div className="absolute -inset-10 bg-heritage/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </button>
                );
              })}
            </div>

            <div className="mt-24 flex justify-between items-center quiz-element border-t border-linen pt-12">
              <button 
                onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                className={`text-[11px] uppercase tracking-[0.4em] font-bold text-text-secondary hover:text-heritage transition-all duration-500 flex items-center gap-4 ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <span className="w-8 h-px bg-text-secondary/30 group-hover:bg-heritage/30" />
                Previous Step
              </button>
              
              <Button 
                variant="solid" 
                className="btn-prestige px-16 py-6 text-base font-bold"
                disabled={!hasAnswered}
                onClick={handleNext}
                rightIcon={<ArrowRight size={20} />}
              >
                {currentStep === questions.length - 1 ? 'Reveal DNA' : 'Next Step'}
              </Button>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}

