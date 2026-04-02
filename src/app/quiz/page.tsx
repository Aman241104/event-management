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
      <main ref={mainRef} className="min-h-screen bg-canvas flex flex-col items-center justify-center text-center space-y-8 px-6 transition-colors duration-1000">
        <div className="w-24 h-24 rounded-full border border-linen flex items-center justify-center animate-pulse shadow-inner relative">
          <div className="absolute inset-0 bg-heritage/5 rounded-full blur-xl animate-pulse" />
          <Wand2 size={36} className="text-heritage animate-spin-slow relative z-10" />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif text-text-primary italic">Distilling Your <span className="text-heritage">Aesthetic...</span></h2>
          <p className="text-text-secondary font-sans font-light uppercase tracking-[0.4em] text-[9px]">Our AI is curating your bespoke Event DNA.</p>
        </div>
      </main>
    );
  }

  if (currentStep >= questions.length) {
    return (
      <main ref={mainRef} className="min-h-screen bg-surface selection:bg-heritage selection:text-canvas relative transition-colors duration-1000">
        <div ref={containerRef} className="relative">
          
          <section className="min-h-screen flex items-center justify-center py-24 md:py-32" data-bg="var(--color-surface)">
            <div className="max-w-3xl w-full px-6 space-y-12 text-center quiz-element">
              <div className="flex flex-col items-center gap-6">
                <span className="text-[9px] font-mono text-heritage/40 uppercase tracking-[0.5em]">ANALYSIS COMPLETE — BESPOKE PROFILE</span>
                <div className="mx-auto w-20 h-20 bg-heritage/10 rounded-full flex items-center justify-center text-heritage shadow-inner">
                  <Sparkles size={32} />
                </div>
              </div>
              <div className="space-y-6">
                <Badge variant="solid" className="bg-heritage/10 text-heritage uppercase tracking-widest font-bold px-6 py-2 text-[10px]">Event DNA Unlocked</Badge>
                <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-serif text-text-primary font-bold leading-[0.9] tracking-tighter">Your Aesthetic is <br/><span className="text-heritage italic font-light">Heritage Modern</span></h1>
                <p className="text-lg md:text-xl text-text-secondary font-sans font-light leading-relaxed max-w-2xl mx-auto pt-4">
                  Based on your selections, your ideal event balances palatial grandeur with sleek, understated luxury. A bespoke Vision PDF has been curated for you.
                </p>
              </div>
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button variant="solid" className="btn-prestige py-6 px-12 text-sm font-bold">Download Vision Board</Button>
                <Button variant="outline" className="btn-outline-prestige py-6 px-12 text-sm font-bold">Book Discovery Call</Button>
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

        <section className="min-h-screen flex flex-col justify-center py-24 md:py-32" data-bg="var(--color-canvas)">
          <div className="container max-w-5xl flex-1 flex flex-col justify-center">
            
            <div className="space-y-8 mb-16 quiz-element text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span className="text-[9px] font-mono text-heritage/40 uppercase tracking-[0.5em]">10 / ASSESSMENT — EVENT PROFILE</span>
                <div className="h-px w-16 bg-heritage/10 hidden md:block" />
                <span className="text-[10px] font-mono text-heritage uppercase tracking-widest font-bold">Step {currentStep + 1} of {questions.length}</span>
              </div>
              <TextReveal 
                as="h1"
                text={currentQ.question}
                className="text-4xl md:text-6xl font-serif text-text-primary font-bold leading-tight tracking-tight italic"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 quiz-element">
              {currentQ.options.map((opt) => {
                const isSelected = answers[currentStep] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.id)}
                    className={`text-left p-10 border transition-all duration-700 group relative overflow-hidden shadow-sm
                      ${isSelected ? 'border-heritage bg-heritage-soft/20 shadow-xl' : 'border-linen hover:border-heritage/30 hover:bg-surface/40'}`}
                  >
                    <div className="flex justify-between items-start mb-4 relative z-10">
                      <h3 className={`text-xl font-serif font-bold ${isSelected ? 'text-heritage' : 'text-text-primary'} transition-colors duration-500 italic`}>{opt.label}</h3>
                      <div className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-500 ${isSelected ? 'bg-heritage border-heritage text-canvas' : 'border-linen text-transparent group-hover:border-heritage/30'}`}>
                        <Check size={14} />
                      </div>
                    </div>
                    <p className="text-[13px] font-sans font-light text-text-secondary relative z-10 leading-relaxed transition-colors duration-500">{opt.desc}</p>
                    {isSelected && <div className="absolute inset-x-0 bottom-0 h-1 bg-heritage pointer-events-none" />}
                    <div className="absolute -inset-10 bg-heritage/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </button>
                );
              })}
            </div>

            <div className="mt-16 flex justify-between items-center quiz-element border-t border-linen pt-10">
              <button 
                onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                className={`text-[10px] uppercase tracking-[0.4em] font-bold text-text-secondary hover:text-heritage transition-all duration-500 flex items-center gap-3 ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <span className="w-6 h-px bg-text-secondary/30 group-hover:bg-heritage/30" />
                Previous Step
              </button>
              
              <Button 
                variant="solid" 
                className="btn-prestige px-12 py-5 text-sm font-bold"
                disabled={!hasAnswered}
                onClick={handleNext}
                rightIcon={<ArrowRight size={18} />}
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

