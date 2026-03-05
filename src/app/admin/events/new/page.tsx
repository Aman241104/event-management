'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Plus,
  Image as ImageIcon,
  Calendar,
  MapPin,
  Users,
  Type,
  AlignLeft,
  Camera,
  Trash2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Settings,
  Play,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { Input } from '@/components/atoms/Input';
import { Badge } from '@/components/atoms/Badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function NewEventPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    category: 'Corporate',
    date: '',
    location: '',
    attendees: '',
    description: '',
    mainImage: '',
    gallery: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const addGalleryImage = () => {
    setFormData(prev => ({
      ...prev,
      gallery: [...prev.gallery, '']
    }));
  };

  const updateGalleryImage = (index: number, value: string) => {
    const newGallery = [...formData.gallery];
    newGallery[index] = value;
    setFormData(prev => ({ ...prev, gallery: newGallery }));
  };

  const removeGalleryImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index)
    }));
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 bg-bg-main">
        <Card sharp className="max-w-xl w-full p-16 text-center space-y-12 bg-bg-surface border-secondary/30 animate-fade-in">
          <div className="w-24 h-24 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto ring-[16px] ring-secondary/5">
            <CheckCircle2 size={48} />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl font-bold font-serif text-white italic">Event Published.</h1>
            <p className="text-xl text-text-moss font-sans font-light leading-relaxed">
              Your high-fidelity event "{formData.title}" has been added to the archives and is now live.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-4">
            <Button variant="gold" size="lg" className="w-full h-20 text-xl font-serif" rightIcon={<ArrowRight size={24} />}>
              View Event Page
            </Button>
            <Button variant="ghost" onClick={() => setIsSuccess(false)} className="uppercase tracking-[0.2em] text-xs">
              Back to Dashboard
            </Button>
          </div>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bg-main py-32 px-8">
      <div className="container max-w-[1440px] space-y-16">

        {/* Editorial Admin Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-border-subtle pb-12">
          <div className="space-y-6">
            <Link href="/dashboard" className="inline-flex items-center gap-4 text-[10px] font-bold text-secondary hover:text-white transition-all uppercase tracking-[0.2em] group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Portal
            </Link>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-none">
              Create <span className="text-secondary italic font-light">Legacy</span>.
            </h1>
            <p className="text-xl text-text-moss font-sans font-light leading-relaxed max-w-2xl">
              Input the high-fidelity details for your next curated experience.
              Only absolute perfection is archived.
            </p>
          </div>
          <div className="flex gap-6">
            <Button variant="outline" className="h-16 px-10 rounded-none font-serif" onClick={() => window.history.back()}>Discard</Button>
            <Button variant="gold" size="lg" className="h-16 px-10 text-lg font-serif" onClick={handleSubmit} isLoading={isSubmitting} leftIcon={<Plus size={24} />}>
              Archive Event
            </Button>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Info (8 Columns) */}
          <div className="lg:col-span-8 space-y-16">
            <Card sharp className="p-12 space-y-12 bg-bg-surface/30 border-border-subtle">
              <div className="flex items-center gap-4 border-b border-border-subtle pb-8">
                <Sparkles className="text-secondary" size={24} />
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-text-moss">Core Narrative</h3>
              </div>

              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <Input
                    label="Event Title"
                    placeholder="e.g. The Monaco Gala"
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                  <Input
                    label="Subtitle / Theme"
                    placeholder="e.g. A Night of Elegance"
                    value={formData.subtitle}
                    onChange={e => setFormData({ ...formData, subtitle: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <Input
                    label="Date of Event"
                    placeholder="e.g. March 15, 2026"
                    icon={<Calendar size={18} />}
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                  <Input
                    label="Visual Location"
                    placeholder="e.g. Lake Como, IT"
                    icon={<MapPin size={18} />}
                    value={formData.location}
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-6">
                  <label className="text-sm font-bold uppercase tracking-[0.1em] text-text-moss">
                    Service Category
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {['Corporate', 'Private', 'Concert', 'Workshop'].map(cat => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFormData({ ...formData, category: cat })}
                        className={cn(
                          "px-10 py-4 rounded-none text-sm font-bold border transition-all duration-500",
                          formData.category === cat
                            ? "bg-secondary text-bg-main border-secondary shadow-xl shadow-secondary/10"
                            : "bg-transparent border-border-subtle text-text-moss hover:border-secondary/50"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <label className="text-sm font-bold uppercase tracking-[0.1em] text-text-moss">
                    The Story / Description
                  </label>
                  <textarea
                    className="w-full min-h-[250px] bg-transparent border-b border-border-subtle p-4 text-lg font-sans font-light text-text-primary focus:outline-none focus:border-text-primary transition-all duration-500 ease-out placeholder:text-text-secondary/60 rounded-none resize-none"
                    placeholder="Describe the high-fidelity experience in editorial detail..."
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
              </div>
            </Card>

            <Card sharp className="p-12 space-y-12 bg-bg-surface/30 border-border-subtle">
              <div className="flex items-center justify-between border-b border-border-subtle pb-8">
                <div className="flex items-center gap-4">
                  <Camera className="text-secondary" size={24} />
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-text-moss">Cinematic Assets</h3>
                </div>
                <Button type="button" variant="outline" size="sm" onClick={addGalleryImage} className="rounded-none border-secondary/30" leftIcon={<Plus size={16} />}>
                  Add Frame
                </Button>
              </div>

              <div className="space-y-12">
                <Input
                  label="Hero Master Image (URL)"
                  placeholder="https://images.unsplash.com/..."
                  icon={<ImageIcon size={18} />}
                  value={formData.mainImage}
                  onChange={e => setFormData({ ...formData, mainImage: e.target.value })}
                  required
                />

                <div className="space-y-8">
                  <label className="text-sm font-bold uppercase tracking-[0.1em] text-text-moss">
                    Gallery Collection
                  </label>
                  <div className="grid grid-cols-1 gap-6">
                    {formData.gallery.map((url, index) => (
                      <div key={index} className="flex gap-6 items-end">
                        <div className="flex-grow">
                          <Input
                            placeholder="Cinematic Asset URL"
                            icon={<ImageIcon size={18} />}
                            value={url}
                            onChange={e => updateGalleryImage(index, e.target.value)}
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeGalleryImage(index)}
                          className="h-[52px] w-[52px] bg-bg-main border border-border-subtle flex items-center justify-center text-text-moss hover:text-red-500 transition-all duration-500"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    ))}
                    {formData.gallery.length === 0 && (
                      <div
                        onClick={addGalleryImage}
                        className="h-40 border border-dashed border-border-subtle flex flex-col items-center justify-center gap-4 text-text-moss hover:border-secondary hover:text-secondary transition-all duration-700 cursor-pointer group"
                      >
                        <Plus size={32} className="group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">Curate Gallery</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Prestige Sidebar (4 Columns) */}
          <div className="lg:col-span-4 space-y-12">
            <Card sharp className="p-10 space-y-10 bg-bg-surface border-secondary/20 sticky top-40">
              <div className="space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary italic flex items-center gap-2">
                  <Users size={14} /> Exclusivity Settings
                </h4>
                <Input
                  label="Attendance Cap"
                  placeholder="e.g. 50 VIPs Only"
                  value={formData.attendees}
                  onChange={e => setFormData({ ...formData, attendees: e.target.value })}
                />
              </div>

              <div className="pt-10 border-t border-border-subtle/50 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-secondary/20 flex items-center justify-center text-secondary">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white font-serif">Prestige Archive</p>
                    <p className="text-[10px] text-text-moss uppercase tracking-widest">Permanent Record</p>
                  </div>
                </div>
                <p className="text-xs text-text-moss font-sans font-light leading-relaxed italic border-l border-secondary/30 pl-4">
                  Publishing this event will permanently archive it in your public portfolio and update your high-fidelity metrics.
                </p>
              </div>

              <Button type="submit" variant="gold" className="w-full h-20 text-xl font-serif" isLoading={isSubmitting}>
                Archive Now
              </Button>
            </Card>

            {/* Live Preview Feature */}
            <Card sharp className="p-8 bg-bg-surface/50 border-border-subtle border-dashed border text-center space-y-6">
              <Badge variant="outline" size="sm">Prestige Preview</Badge>
              <div className="w-full aspect-[16/10] bg-bg-main overflow-hidden relative group border border-border-subtle">
                {formData.mainImage ? (
                  <Image
                    src={formData.mainImage}
                    alt="Preview"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-text-secondary/20">
                    <Camera size={48} strokeWidth={1} />
                  </div>
                )}
                <div className="absolute inset-0 bg-bg-main/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-secondary text-bg-main flex items-center justify-center">
                    <Play size={24} />
                  </div>
                </div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-moss italic">Cinematic Header View</p>
            </Card>
          </div>
        </form>
      </div>
    </main>
  );
}
