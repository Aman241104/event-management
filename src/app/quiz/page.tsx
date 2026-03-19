'use client';

import React, { useState, useRef } from 'react';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { TextReveal } from '@/components/atoms/TextReveal';
import { ArrowRight, Sparkles, Wand2, Check } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  useGSAP(() => {
    gsap.from('.quiz-element', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
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
      <main className="min-h-screen bg-canvas flex flex-col items-center justify-center text-center space-y-8 px-6">
        <div className="w-24 h-24 rounded-full border-2 border-linen flex items-center justify-center animate-pulse">
          <Wand2 size={40} className="text-heritage animate-spin-slow" />
        </div>
        <h2 className="text-3xl md:text-5xl font-serif text-text-primary">Distilling Your <span className="text-heritage italic">Aesthetic...</span></h2>
        <p className="text-text-secondary font-sans font-light uppercase tracking-widest text-[11px]">Our AI is curating your bespoke Event DNA.</p>
      </main>
    );
  }

  if (currentStep >= questions.length) {
    return (
      <main ref={containerRef} className="min-h-screen bg-surface pt-32 pb-24 flex items-center justify-center">
        <div className="max-w-2xl w-full px-6 space-y-12 text-center quiz-element">
          <div className="mx-auto w-20 h-20 bg-heritage/10 rounded-full flex items-center justify-center text-heritage mb-8">
            <Sparkles size={32} />
          </div>
          <Badge variant="solid" className="bg-heritage/10 text-heritage uppercase tracking-widest font-bold">Analysis Complete</Badge>
          <h1 className="text-4xl md:text-6xl font-serif text-text-primary font-bold">Your Event DNA is <br/><span className="text-heritage italic font-light">Heritage Modern</span></h1>
          <p className="text-lg text-text-secondary font-sans font-light leading-relaxed">
            Based on your selections, your ideal event balances palatial grandeur with sleek, understated luxury. A bespoke Vision PDF has been curated for you.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="solid" className="btn-prestige py-6 px-12">Download Vision Board</Button>
            <Button variant="outline" className="btn-outline-prestige py-6 px-12">Book Discovery Call</Button>
          </div>
        </div>
      </main>
    );
  }

  const currentQ = questions[currentStep];
  const hasAnswered = !!answers[currentStep];

  return (
    <main ref={containerRef} className="min-h-screen bg-canvas pt-32 pb-24 flex flex-col selection:bg-heritage selection:text-canvas">
      <div className="container mx-auto px-6 max-w-4xl flex-1 flex flex-col justify-center">
        
        <div className="space-y-4 mb-16 quiz-element text-center md:text-left">
          <span className="text-[11px] font-mono text-heritage uppercase tracking-widest">Aesthetic Alchemy — {currentStep + 1} / {questions.length}</span>
          <h1 className="text-3xl md:text-5xl font-serif text-text-primary font-bold leading-tight">{currentQ.question}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 quiz-element">
          {currentQ.options.map((opt) => {
            const isSelected = answers[currentStep] === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`text-left p-8 border transition-all duration-500 group relative overflow-hidden
                  ${isSelected ? 'border-heritage bg-surface/50' : 'border-linen hover:border-heritage/50 hover:bg-surface/30'}`}
              >
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <h3 className={`text-xl font-serif font-bold ${isSelected ? 'text-heritage' : 'text-text-primary'}`}>{opt.label}</h3>
                  {isSelected && <Check size={20} className="text-heritage" />}
                </div>
                <p className="text-sm font-sans font-light text-text-secondary relative z-10">{opt.desc}</p>
                {isSelected && <div className="absolute inset-0 border-b-4 border-heritage pointer-events-none" />}
              </button>
            );
          })}
        </div>

        <div className="mt-16 flex justify-between items-center quiz-element border-t border-linen pt-8">
          <button 
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            className={`text-[11px] uppercase tracking-widest font-bold text-text-secondary hover:text-text-primary transition-colors ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            Previous
          </button>
          
          <Button 
            variant="solid" 
            className="btn-prestige px-12"
            disabled={!hasAnswered}
            onClick={handleNext}
            rightIcon={<ArrowRight size={16} />}
          >
            {currentStep === questions.length - 1 ? 'Reveal DNA' : 'Next Step'}
          </Button>
        </div>

      </div>
    </main>
  );
}
