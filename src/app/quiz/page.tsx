'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/image';
import NextLink from 'next/link';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { TextReveal } from '@/components/atoms/TextReveal';
import { ArrowRight, Sparkles, Wand2, Check, ChevronRight, ChevronLeft, Star, Heart, Zap, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Magnetic } from '@/components/atoms/Magnetic';
import { BackgroundFlourish } from '@/components/atoms/BackgroundFlourish';
import { SVGSpine } from '@/components/atoms/SVGSpine';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const questions = [
  {
    question: "Define your narrative.",
    sub: "Every great event starts with a story. What's yours?",
    options: [
      { id: 'classic', label: 'Imperial Grandeur', desc: 'Timeless, regal, and steeped in tradition.', icon: <Award size={20} /> },
      { id: 'modern', label: 'Avant-Garde Minimal', desc: 'Sleek lines, bold architecture, and pure forms.', icon: <Zap size={20} /> },
      { id: 'botanical', label: 'Ethereal Garden', desc: 'Lush greenery, organic textures, and romantic florals.', icon: <Sparkles size={20} /> },
      { id: 'cinematic', label: 'Cinematic Drama', desc: 'High-contrast lighting, bold moods, and grand staging.', icon: <Star size={20} /> },
    ],
    bg: '/hero-1.jpg'
  },
  {
    question: "Select your palette.",
    sub: "Colors set the emotional tone of your celebration.",
    options: [
      { id: 'heritage', label: 'Heritage Verdant', desc: 'Deep greens, burnished gold, and bone white.', icon: <Check size={20} /> },
      { id: 'royal', label: 'Royal Jewel', desc: 'Crimson reds, midnight blues, and rich amber.', icon: <Check size={20} /> },
      { id: 'ethereal', label: 'Soft Ethereal', desc: 'Champagne, mist, and delicate pearl tones.', icon: <Check size={20} /> },
      { id: 'obsidian', label: 'Obsidian Noir', desc: 'Inky blacks, metallic silvers, and sharp edges.', icon: <Check size={20} /> },
    ],
    bg: '/hero-8.jpg'
  },
  {
    question: "The emotional core.",
    sub: "What is the most important feeling you want to evoke?",
    options: [
      { id: 'intimacy', label: 'Soulful Intimacy', desc: 'Deep connections and personal touches.', icon: <Heart size={20} /> },
      { id: 'wonder', label: 'Breathless Wonder', desc: 'Large-scale impact and visual awe.', icon: <Sparkles size={20} /> },
      { id: 'sophistication', label: 'Quiet Luxury', desc: 'Understated elegance and refined precision.', icon: <Award size={20} /> },
      { id: 'celebration', label: 'Electric Joy', desc: 'High energy, vibrant flow, and pure fun.', icon: <Zap size={20} /> },
    ],
    bg: '/hero-9.jpg'
  }
];

export default function QuizPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const [currentStep, setCurrentStep] = useState(-1); // -1 is start screen
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  useGSAP(() => {
    gsap.from('.quiz-animate', { 
      y: 30, 
      opacity: 0, 
      duration: 1.2, 
      stagger: 0.1, 
      ease: 'power3.out',
      clearProps: 'all'
    });
  }, { scope: containerRef, dependencies: [currentStep, isGenerating] });

  const handleSelect = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [currentStep]: optionId }));
    // Auto-advance after a small delay for better UX
    setTimeout(() => {
        handleNext();
    }, 400);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsGenerating(true);
      setTimeout(() => {
        setIsGenerating(false);
        setCurrentStep(questions.length);
      }, 2500);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(-1, prev - 1));
  };

  // 1. Start Screen
  if (currentStep === -1) {
    return (
        <main ref={mainRef} className="min-h-screen bg-heritage flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image src="/hero10.jpg" alt="Background" fill className="object-cover opacity-30 scale-110 animate-[ken-burns_40s_ease-in-out_infinite_alternate]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
            </div>
            
            <BackgroundFlourish type="architectural" className="top-[-10%] right-[-5%] w-[40rem] h-[40rem] text-white/5 rotate-12" />
            
            <div ref={containerRef} className="container relative z-10 text-center space-y-12 max-w-4xl px-6">
                <div className="quiz-animate flex flex-col items-center gap-6">
                    <Badge variant="outline" className="border-white/30 text-white/80 uppercase tracking-[0.5em] px-8 py-2 text-[9px] small-caps">Aesthetic Intelligence</Badge>
                    <h1 className="text-6xl md:text-8xl lg:text-[9.5rem] font-serif font-medium text-white tracking-tighter leading-[0.9]">
                        Discover Your <br/><span className="italic font-light text-burnished">Vision.</span>
                    </h1>
                </div>
                
                <p className="quiz-animate text-xl md:text-2xl text-white/70 font-serif italic font-light max-w-2xl mx-auto leading-relaxed">
                    Experience our AI-driven aesthetic curator. A few precise questions to map your event&apos;s architectural soul.
                </p>

                <div className="quiz-animate pt-8">
                    <Magnetic strength={0.2}>
                        <Button 
                            size="lg" 
                            className="h-20 px-20 text-[11px] bg-white text-heritage hover:bg-linen shadow-2xl transition-all hover:scale-105"
                            onClick={() => setCurrentStep(0)}
                            rightIcon={<ChevronRight size={20} />}
                        >
                            BEGIN CURATION
                        </Button>
                    </Magnetic>
                </div>
            </div>
        </main>
    );
  }

  // 2. Generating Screen
  if (isGenerating) {
    return (
      <main ref={mainRef} className="min-h-screen bg-heritage flex flex-col items-center justify-center text-center space-y-10 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.15)_0%,_transparent_70%)] animate-pulse" />
        <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center relative z-10">
          <div className="absolute inset-0 rounded-full border-t-2 border-burnished animate-spin" />
          <Wand2 size={48} className="text-burnished animate-pulse" />
        </div>
        <div className="space-y-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-white italic tracking-tighter">Synthesizing Your <span className="text-burnished">Aesthetic...</span></h2>
          <p className="text-white/50 font-sans font-bold uppercase tracking-[0.6em] text-[10px] small-caps">Mapping textures, tones, and architectural flow</p>
        </div>
      </main>
    );
  }

  // 3. Result Screen
  if (currentStep >= questions.length) {
    return (
      <main ref={mainRef} className="min-h-screen bg-canvas flex flex-col items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,76,57,0.03)_0%,_transparent_50%)]" />
        <SVGSpine height="100%" viewBox="0 0 20 1000" pathD="M 10 0 L 10 1000" className="opacity-[0.03]" />
        
        <section ref={containerRef} className="container max-w-5xl text-center space-y-16 quiz-animate">
          <div className="space-y-8">
            <div className="flex justify-center">
                <Badge className="bg-heritage/5 text-heritage border-heritage/10 uppercase tracking-[0.4em] font-bold px-8 py-2 text-[10px] small-caps">Curation Complete</Badge>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif text-text-primary font-medium tracking-tighter leading-[0.85]">
                Your style is <br/><span className="text-heritage italic font-light">Heritage Modern.</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary font-serif italic font-light max-w-3xl mx-auto leading-relaxed">
              You favor a sophisticated blend of historical grandeur and sharp, modern precision. Your event will be defined by deep textures, architectural lighting, and quiet luxury.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-8">
            <Magnetic strength={0.2}>
                <Button className="btn-prestige h-20 px-16 text-[11px] shadow-2xl" rightIcon={<ArrowRight size={18} />}>Download Moodboard</Button>
            </Magnetic>
            <NextLink href="/contact">
                <button className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage hover:text-text-primary transition-all border-b border-heritage/20 pb-2 hover:border-heritage small-caps">
                    Discuss This Vision
                </button>
            </NextLink>
          </div>
        </section>
      </main>
    );
  }

  // 4. Question Screens
  const currentQ = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <main ref={mainRef} className="min-h-screen bg-canvas flex flex-col relative overflow-hidden">
      {/* Background Image transition */}
      <div className="absolute inset-0 z-0">
         {questions.map((q, i) => (
             <div key={i} className={cn("absolute inset-0 transition-opacity duration-1000 ease-in-out", i === currentStep ? "opacity-20" : "opacity-0")}>
                <Image src={q.bg} alt="Mood" fill className="object-cover grayscale-[0.5]" />
             </div>
         ))}
         <div className="absolute inset-0 bg-canvas/90" />
      </div>

      <div ref={containerRef} className="container max-w-6xl flex-grow flex flex-col justify-center py-20 relative z-10">
        
        {/* Progress bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-linen z-50">
            <div 
                className="h-full bg-heritage transition-all duration-1000 ease-out" 
                style={{ width: `${progress}%` }} 
            />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            
            {/* Question Text */}
            <div className="lg:col-span-5 space-y-8 quiz-animate">
                <div className="space-y-2">
                    <span className="text-[10px] font-mono text-heritage font-bold uppercase tracking-[0.5em]">Phase 0{currentStep + 1}</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-text-primary font-medium tracking-tighter leading-[0.9] italic">
                        {currentQ.question}
                    </h1>
                </div>
                <p className="text-xl text-text-secondary font-serif italic font-light leading-relaxed">
                    {currentQ.sub}
                </p>
                <button 
                    onClick={handleBack} 
                    className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-text-muted hover:text-heritage transition-all pt-8 group"
                >
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
                </button>
            </div>

            {/* Options Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 quiz-animate">
                {currentQ.options.map((opt) => {
                    const isSelected = answers[currentStep] === opt.id;
                    return (
                        <button 
                            key={opt.id} 
                            onClick={() => handleSelect(opt.id)} 
                            className={cn(
                                "text-left p-10 border transition-all duration-700 group relative overflow-hidden rounded-2xl flex flex-col gap-8",
                                isSelected ? "border-heritage bg-heritage shadow-2xl scale-[1.02]" : "border-linen bg-white/50 backdrop-blur-sm hover:border-heritage/30 hover:shadow-xl hover:-translate-y-1"
                            )}
                        >
                            <div className={cn(
                                "w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-700",
                                isSelected ? "bg-white/20 text-white" : "bg-heritage/5 text-heritage group-hover:bg-heritage group-hover:text-white"
                            )}>
                                {opt.icon}
                            </div>
                            <div className="space-y-3">
                                <h3 className={cn(
                                    "text-2xl font-serif font-bold italic transition-colors duration-700",
                                    isSelected ? "text-white" : "text-text-primary"
                                )}>
                                    {opt.label}
                                </h3>
                                <p className={cn(
                                    "text-sm font-light leading-relaxed transition-colors duration-700",
                                    isSelected ? "text-white/70" : "text-text-secondary"
                                )}>
                                    {opt.desc}
                                </p>
                            </div>
                            
                            {/* Decorative element */}
                            <div className={cn(
                                "absolute -bottom-4 -right-4 w-24 h-24 bg-heritage/5 rounded-full transition-all duration-700",
                                isSelected ? "bg-white/10 scale-150" : "group-hover:scale-110"
                            )} />
                        </button>
                    );
                })}
            </div>
        </div>
      </div>
    </main>
  );
}
