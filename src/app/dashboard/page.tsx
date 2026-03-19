'use client';

import React, { useRef } from 'react';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  MessageSquare, 
  Calendar,
  ExternalLink,
  Plus
} from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function DashboardPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.bento-item', {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-canvas pt-32 pb-24 selection:bg-heritage selection:text-canvas">
      <div className="container mx-auto px-6 space-y-12">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-linen pb-12">
          <div className="space-y-4">
            <Badge variant="solid" className="bg-heritage/10 text-heritage uppercase tracking-widest font-bold">Owner Dashboard</Badge>
            <h1 className="text-4xl md:text-5xl font-serif text-text-primary font-bold">Portfolio <span className="text-heritage italic font-light">Overview</span></h1>
            <p className="text-sm font-sans uppercase tracking-[0.4em] text-text-secondary">Welcome back, Administrator.</p>
          </div>
          <Link href="/admin/events/new">
            <Button variant="solid" className="btn-prestige px-8 h-14" leftIcon={<Plus size={18} />}>
              Create New Event
            </Button>
          </Link>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          
          {/* Main Stat 1 */}
          <div className="bento-item md:col-span-2 lg:col-span-2 bg-surface p-8 border border-linen space-y-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-full bg-heritage/10 flex items-center justify-center text-heritage">
                <Users size={20} />
              </div>
              <Badge variant="outline" className="text-[9px] border-green-200 text-green-700 bg-green-50">+12%</Badge>
            </div>
            <div>
              <h3 className="text-4xl font-serif font-bold text-text-primary">1,248</h3>
              <p className="text-[10px] uppercase tracking-widest text-text-secondary mt-2">Total Monthly Inquiries</p>
            </div>
          </div>

          {/* Main Stat 2 */}
          <div className="bento-item md:col-span-2 lg:col-span-2 bg-heritage text-canvas p-8 space-y-6 flex flex-col justify-between">
            <div className="flex justify-between items-start text-canvas/50">
              <div className="w-12 h-12 rounded-full bg-canvas/10 flex items-center justify-center text-canvas">
                <Briefcase size={20} />
              </div>
              <TrendingUp size={20} />
            </div>
            <div>
              <h3 className="text-4xl font-serif font-bold">42</h3>
              <p className="text-[10px] uppercase tracking-widest opacity-60 mt-2">Active Event Projects</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bento-item md:col-span-4 lg:col-span-2 lg:row-span-2 bg-canvas border border-linen p-8 flex flex-col">
            <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-heritage mb-8">Recent Activity</h4>
            <div className="flex-grow space-y-8">
              {[
                { time: '2m ago', action: 'New Inquiry', subject: 'Kapoor Gala' },
                { time: '45m ago', action: 'Update', subject: 'Palace Wedding' },
                { time: '3h ago', action: 'New Client', subject: 'Tech Summit' },
                { time: '1d ago', action: 'Completed', subject: 'Villa Party' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border-l border-linen pl-6 relative">
                  <div className="absolute left-[-4.5px] top-0 w-2 h-2 rounded-full bg-heritage" />
                  <div>
                    <p className="text-xs font-bold text-text-primary">{item.action}: {item.subject}</p>
                    <p className="text-[10px] text-text-secondary mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-8 text-[9px] uppercase tracking-widest border-linen">View All Logs</Button>
          </div>

          {/* Large Graph / Visual Area */}
          <div className="bento-item md:col-span-4 lg:col-span-4 bg-surface border border-linen p-8 h-80 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-heritage">Audience Reach</h4>
                <p className="text-xs text-text-secondary mt-2 italic font-serif">Historical analytics for &quot;The Archive&quot; views.</p>
              </div>
              <div className="flex items-end gap-2 h-32">
                {[40, 70, 45, 90, 65, 80, 50, 95, 75, 60, 85, 100].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-grow bg-heritage/20 group-hover:bg-heritage transition-all duration-1000" 
                    style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }} 
                  />
                ))}
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
               <TrendingUp size={300} strokeWidth={1} />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bento-item md:col-span-2 lg:col-span-2 bg-canvas border border-linen p-8 flex flex-col justify-between group cursor-pointer hover:border-heritage transition-colors">
            <MessageSquare size={24} className="text-heritage" />
            <div>
              <h4 className="text-lg font-serif font-bold text-text-primary">Unread Inquiries</h4>
              <p className="text-xs text-text-secondary mt-1">12 pending responses</p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-heritage">
              Go to Inbox <ExternalLink size={12} />
            </div>
          </div>

          {/* Quick Actions 2 */}
          <div className="bento-item md:col-span-2 lg:col-span-2 bg-canvas border border-linen p-8 flex flex-col justify-between group cursor-pointer hover:border-heritage transition-colors">
            <Calendar size={24} className="text-heritage" />
            <div>
              <h4 className="text-lg font-serif font-bold text-text-primary">Today&apos;s Schedule</h4>
              <p className="text-xs text-text-secondary mt-1">3 site walkthroughs</p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-heritage">
              View Calendar <ExternalLink size={12} />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
