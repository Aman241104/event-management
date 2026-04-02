'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { ArrowLeft, Save, Eye, Camera, Trash2 } from 'lucide-react';
import { Input } from '@/components/atoms/Input';
import Link from 'next/link';
import Image from 'next/image';

export default function NewEventPage() {
  const [title, setTitle] = useState('New Palatial Celebration');
  const [category, setCategory] = useState('Weddings');

  return (
    <main className="min-h-screen bg-canvas pt-24 pb-16 selection:bg-heritage selection:text-canvas">
      <div className="container">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-10 border-b border-linen pb-6">
          <Link href="/dashboard" className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-text-secondary hover:text-heritage transition-colors">
            <ArrowLeft size={12} /> Back to Dashboard
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="btn-outline-prestige px-5 h-10 text-[9px]" leftIcon={<Eye size={14} />}>Preview</Button>
            <Button variant="solid" className="btn-prestige px-6 h-10 text-[9px]" leftIcon={<Save size={14} />}>Publish Archive</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Form */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-10">
              <div className="space-y-3">
                <Badge variant="outline" className="text-heritage border-heritage/20 text-[9px] py-1 px-3">Registry No. ZB-772</Badge>
                <h2 className="text-3xl font-serif font-bold text-text-primary italic">Curate New Record</h2>
              </div>

              {/* Premium inputs */}
              <div className="space-y-8">
                <Input 
                  label="Event Title" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter event name..."
                  className="text-2xl font-serif"
                />

                <div className="grid grid-cols-2 gap-8">
                  <Input 
                    as="select" 
                    label="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    options={[
                      { label: 'Weddings', value: 'Weddings' },
                      { label: 'Corporate', value: 'Corporate' },
                      { label: 'Private', value: 'Private' },
                      { label: 'Festivals', value: 'Festivals' },
                    ]}
                  />
                  <Input 
                    label="Event Date" 
                    type="date"
                  />
                </div>

                <Input 
                  as="textarea" 
                  label="Narrative Description"
                  placeholder="Describe the architectural vision and emotional core of this event..."
                />
              </div>
            </div>

            {/* Media Upload */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage">Visual Assets</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square border-2 border-dashed border-linen hover:border-heritage/30 transition-colors flex flex-col items-center justify-center gap-3 group cursor-pointer bg-heritage-soft/10">
                  <Camera size={20} className="text-linen group-hover:text-heritage transition-colors" />
                  <span className="text-[8px] font-bold uppercase tracking-widest text-text-secondary">Add Media</span>
                </div>
                {[1, 2].map((i) => (
                  <div key={i} className="aspect-square bg-surface border border-linen relative group overflow-hidden arch-mask rounded-none shadow-sm">
                    <Image 
                      src={i === 1 ? '/decor-1.jpg' : '/decor-2.jpg'}
                      alt="Thumbnail"
                      fill
                      className="object-cover transition-all duration-500"
                    />
                    <button className="absolute top-2 right-2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live Cinematic Preview */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 space-y-6">
              <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-heritage text-center lg:text-left">Live Cinematic Preview</h4>
              <div className="bg-white border border-linen p-3 shadow-xl rotate-1 group hover:rotate-0 transition-transform duration-700">
                <div className="relative aspect-[4/5] overflow-hidden arch-mask mb-6">
                  <Image 
                    src="/hero-1.jpg" 
                    alt="Preview" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10 text-canvas space-y-3">
                    <Badge variant="solid" className="bg-heritage text-canvas border-0 text-[8px] py-0.5 px-3">{category}</Badge>
                    <h3 className="text-3xl font-serif font-bold leading-tight italic">{title}</h3>
                  </div>
                </div>
                <div className="px-6 pb-6 space-y-4 text-center">
                   <p className="text-xs font-sans italic text-text-secondary font-light leading-relaxed">&quot;A dialogue between tradition and modern luxury.&quot;</p>
                   <div className="flex justify-center gap-3">
                     {[1, 2, 3].map(d => <div key={d} className="w-1 h-1 rounded-full bg-linen" />)}
                   </div>
                </div>
              </div>
              <p className="text-[9px] text-text-secondary text-center uppercase tracking-widest opacity-40 italic">Preview scales based on device aspect ratio</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
