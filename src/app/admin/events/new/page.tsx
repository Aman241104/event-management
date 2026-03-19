'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { ArrowLeft, Save, Eye, Camera, Plus, Trash2 } from 'lucide-react';
import { Input } from '@/components/atoms/Input';
import Link from 'next/link';
import Image from 'next/image';

export default function NewEventPage() {
  const [title, setTitle] = useState('New Palatial Celebration');
  const [category, setCategory] = useState('Weddings');

  return (
    <main className="min-h-screen bg-canvas pt-32 pb-24 selection:bg-heritage selection:text-canvas">
      <div className="container mx-auto px-6">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-16 border-b border-linen pb-8">
          <Link href="/dashboard" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-secondary hover:text-heritage transition-colors">
            <ArrowLeft size={14} /> Back to Dashboard
          </Link>
          <div className="flex items-center gap-6">
            <Button variant="outline" className="btn-outline-prestige px-6 h-12" leftIcon={<Eye size={16} />}>Preview</Button>
            <Button variant="solid" className="btn-prestige px-8 h-12" leftIcon={<Save size={16} />}>Publish Archive</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Left: Form */}
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <Badge variant="outline" className="text-heritage border-heritage/30">Registry No. ZB-772</Badge>
                <h2 className="text-4xl font-serif font-bold text-text-primary">Curate New Record</h2>
              </div>

              {/* Premium inputs */}
              <div className="space-y-12">
                <Input 
                  label="Event Title" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter event name..."
                  className="text-3xl font-serif"
                />

                <div className="grid grid-cols-2 gap-12">
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
            <div className="space-y-8">
              <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage">Visual Assets</h4>
              <div className="grid grid-cols-3 gap-6">
                <div className="aspect-square border-2 border-dashed border-linen hover:border-heritage transition-colors flex flex-col items-center justify-center gap-4 group cursor-pointer bg-surface/30">
                  <Camera size={24} className="text-linen group-hover:text-heritage transition-colors" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-text-secondary">Add Media</span>
                </div>
                {[1, 2].map((i) => (
                  <div key={i} className="aspect-square bg-surface border border-linen relative group overflow-hidden arch-mask rounded-none">
                    <Image 
                      src={`https://images.unsplash.com/photo-${i === 1 ? '1511795409834-ef04bbd61622' : '1583939003579-730e3918a45a'}?auto=format&fit=crop&q=80&w=400`}
                      alt="Thumbnail"
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live Cinematic Preview */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-40 space-y-8">
              <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-heritage text-center lg:text-left">Live Cinematic Preview</h4>
              <div className="bg-white border border-linen p-4 shadow-2xl rotate-1 group hover:rotate-0 transition-transform duration-700">
                <div className="relative aspect-[4/5] overflow-hidden arch-mask mb-8">
                  <Image 
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" 
                    alt="Preview" 
                    fill 
                    className="object-cover grayscale" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-12 left-12 right-12 text-canvas space-y-4">
                    <Badge variant="solid" className="bg-burnished text-black border-0">{category}</Badge>
                    <h3 className="text-4xl font-serif font-bold leading-tight">{title}</h3>
                  </div>
                </div>
                <div className="px-8 pb-8 space-y-6 text-center">
                   <p className="text-sm font-sans italic text-text-secondary">"A dialogue between tradition and modern luxury."</p>
                   <div className="flex justify-center gap-4">
                     {[1, 2, 3].map(d => <div key={d} className="w-1.5 h-1.5 rounded-full bg-linen" />)}
                   </div>
                </div>
              </div>
              <p className="text-[10px] text-text-secondary text-center uppercase tracking-widest opacity-40 italic">Preview scales based on device aspect ratio</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
