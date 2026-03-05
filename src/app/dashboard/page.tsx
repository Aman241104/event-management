'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Plus, 
  TrendingUp, 
  Users, 
  Calendar, 
  Settings, 
  Bell, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  LayoutGrid,
  Sparkles,
  MessageCircle,
  Menu
} from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { Badge } from '@/components/atoms/Badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function DashboardPage() {
  const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <main className="min-h-screen bg-bg-main pt-32 pb-24 px-8">
      <div className="container max-w-[1440px] space-y-16">
        {/* Prestige Dashboard Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-border-subtle pb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Badge variant="gold" dot>Agency Portal</Badge>
              <Badge variant="outline" size="sm">Prestige Edition</Badge>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-none">
              Owner <span className="text-secondary italic">Exclusivity</span>.
            </h1>
            <p className="text-xl text-text-moss font-sans font-light leading-relaxed max-w-2xl">
              A minimalist overview of your high-fidelity event portfolio. Manage 
              exclusive bookings and track prestige growth.
            </p>
          </div>
          <div className="flex gap-6">
            <Button variant="outline" size="icon" className="h-16 w-16 border-secondary/20 hover:border-secondary"><Bell size={24} /></Button>
            <Link href="/admin/events/new">
              <Button size="lg" className="h-16 px-10 text-lg font-serif" leftIcon={<Plus size={24} />}>New Event</Button>
            </Link>
          </div>
        </header>

        {/* Bento Grid Analytics (Minimalist Luxury) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Main Analytics Card */}
          <Card sharp className="md:col-span-2 p-12 space-y-12 bg-bg-surface/30 border-secondary/20 shadow-2xl shadow-secondary/5">
            <div className="flex justify-between items-start">
              <div className="p-4 bg-secondary/10 text-secondary rounded-full ring-8 ring-secondary/5">
                <Users size={32} />
              </div>
              <Badge variant="gold" size="lg">+18.4%</Badge>
            </div>
            <div className="space-y-4">
              <h3 className="text-5xl font-bold tracking-tight font-serif">12.8k <span className="text-secondary italic text-3xl font-light">Attendees</span>.</h3>
              <p className="text-base text-text-moss font-sans uppercase tracking-[0.2em] font-bold">Total Portfolio Reach</p>
            </div>
            <div className="pt-8 border-t border-border-subtle/30 flex items-center justify-between">
              <p className="text-sm text-text-moss italic">Growth since {currentMonth}</p>
              <Button variant="ghost" className="px-0 group-hover:text-secondary transition-colors" rightIcon={<TrendingUp size={18} />}>View Breakdown</Button>
            </div>
          </Card>

          {/* Secondary Metric 1 */}
          <Card sharp className="p-10 space-y-8 bg-bg-surface border-border-subtle hover:border-secondary transition-all duration-700">
            <div className="p-4 bg-primary/10 text-primary rounded-full w-fit">
              <Sparkles size={24} />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-moss">Conversion</p>
              <h4 className="text-4xl font-bold font-serif">4.2% <span className="text-sm font-sans text-secondary">+0.8%</span></h4>
            </div>
            <div className="pt-6 border-t border-border-subtle/30">
              <Badge variant="outline" size="sm">Prestige Yield</Badge>
            </div>
          </Card>

          {/* Secondary Metric 2 */}
          <Card sharp className="p-10 space-y-8 bg-bg-surface border-border-subtle hover:border-secondary transition-all duration-700">
            <div className="p-4 bg-primary/10 text-primary rounded-full w-fit">
              <MessageCircle size={24} />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-moss">Inquiries</p>
              <h4 className="text-4xl font-bold font-serif">842 <span className="text-sm font-sans text-secondary">Active</span></h4>
            </div>
            <div className="pt-6 border-t border-border-subtle/30">
              <Badge variant="gold" size="sm">Priority Response</Badge>
            </div>
          </Card>

          {/* Wide Feature Section */}
          <Card sharp className="md:col-span-3 p-12 space-y-12 bg-bg-surface/50 border-secondary/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 grayscale group-hover:grayscale-0 transition-all duration-1000">
              <Image 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" 
                alt="Dashboard" 
                fill
                className="object-cover" 
              />
            </div>
            
            <div className="relative z-10 space-y-8 max-w-2xl">
              <Badge variant="emerald">Live Broadcasts</Badge>
              <h3 className="text-5xl font-bold tracking-tight">Immersive <span className="italic font-light text-secondary underline decoration-1">Broadcast</span> Systems.</h3>
              <p className="text-lg text-text-moss leading-relaxed font-sans font-light">
                Monitor your high-fidelity live feeds and stage production metrics from a single cinematic view. 
                Absolute control over absolute prestige.
              </p>
              <div className="flex gap-6">
                <Button variant="gold" size="lg" className="rounded-full px-10 h-16">Enter Stream</Button>
                <Button variant="outline" className="h-16 px-10 rounded-full">Settings</Button>
              </div>
            </div>
          </Card>

          {/* Compact Feature Card */}
          <Card sharp className="p-10 bg-secondary flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full border-2 border-bg-main/20 flex items-center justify-center text-bg-main mb-4">
              <Clock size={40} />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-bold font-serif text-bg-main">System Uptime</h4>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-bg-main/60">99.9% Reliable</p>
            </div>
            <Button variant="outline" className="border-bg-main/20 text-bg-main hover:bg-bg-main/10 h-12 w-full">Status Page</Button>
          </Card>

        </div>

        {/* Portfolio Management (New Section) */}
        <section className="pt-24 space-y-12">
          <div className="flex items-center justify-between border-b border-border-subtle pb-8">
            <h3 className="text-4xl font-bold tracking-tight">Portfolio <span className="italic font-light text-secondary">Archive</span>.</h3>
            <Link href="/admin/events/new">
              <Button variant="outline" className="h-12 px-8 uppercase tracking-widest text-[10px]" leftIcon={<Plus size={14} />}>Add New Legacy</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'The Monaco Gala', date: 'Dec 2025', status: 'Archived', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400' },
              { title: 'Tech Summit Dubai', date: 'Oct 2025', status: 'Archived', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400' },
              { title: 'Lake Como Reveal', date: 'June 2025', status: 'Archived', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400' },
            ].map((event, i) => (
              <Card key={i} sharp className="p-0 bg-bg-surface/30 border-border-subtle group hover:border-secondary transition-all duration-700">
                <div className="relative aspect-video overflow-hidden border-b border-border-subtle group-hover:border-secondary transition-all duration-700">
                  <Image 
                    src={event.img} 
                    alt={event.title} 
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="gold" size="sm">{event.status}</Badge>
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h5 className="font-serif font-bold text-white">{event.title}</h5>
                    <p className="text-[10px] text-text-moss uppercase tracking-widest mt-1">{event.date}</p>
                  </div>
                  <Button variant="ghost" size="icon"><Settings size={16} /></Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Activity (Minimalist List) */}
        <section className="pt-24 space-y-12">
          <div className="flex items-center justify-between border-b border-border-subtle pb-8">
            <h3 className="text-4xl font-bold tracking-tight">Recent <span className="italic font-light text-secondary">Inquiries</span>.</h3>
            <Button variant="ghost" className="px-0 group-hover:text-secondary transition-colors" rightIcon={<ArrowRight size={18} />}>View Concierge History</Button>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group p-8 border border-border-subtle flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-bg-surface/50 transition-all duration-500">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 bg-bg-main border border-border-subtle flex items-center justify-center text-secondary group-hover:border-secondary transition-colors duration-500">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold font-serif">Inquiry from Elite Partner <span className="text-sm font-sans font-normal text-text-moss italic opacity-0 group-hover:opacity-100 transition-opacity ml-4">View Profile</span></h5>
                    <p className="text-sm text-text-moss font-sans uppercase tracking-widest mt-1">Gala Booking Proposal — London, UK</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <Badge variant="gold">High Priority</Badge>
                  <div className="text-right">
                    <p className="text-sm font-bold text-white">2 Minutes Ago</p>
                    <p className="text-xs text-text-moss uppercase tracking-widest mt-1 italic">Concierge Active</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
