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
    <main ref={containerRef} className="min-h-screen bg-canvas pt-24 pb-16 selection:bg-heritage selection:text-canvas">
      <div className="container space-y-10">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-linen pb-8">
          <div className="space-y-3">
            <Badge variant="solid" className="bg-heritage/10 text-heritage uppercase tracking-widest font-bold text-[9px] py-1 px-4">Owner Dashboard</Badge>
            <h1 className="text-2xl md:text-3xl font-serif text-text-primary font-bold">Portfolio <span className="text-heritage italic font-light">Overview</span></h1>
            <p className="text-[11px] font-sans uppercase tracking-[0.4em] text-text-secondary">Welcome back, Administrator.</p>
          </div>
          <Link href="/admin/events/new">
            <Button variant="solid" className="btn-prestige px-6 h-12 text-[9px]" leftIcon={<Plus size={16} />}>
              Create New Event
            </Button>
          </Link>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
          
          {/* Main Stat 1 */}
          <div className="bento-item md:col-span-2 lg:col-span-2 bg-heritage-soft/30 p-6 border border-linen space-y-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full bg-heritage/10 flex items-center justify-center text-heritage">
                <Users size={18} />
              </div>
              <Badge variant="outline" className="text-[8px] border-heritage/20 text-heritage bg-heritage/5 font-bold">+12%</Badge>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-text-primary">1,248</h3>
              <p className="text-[9px] uppercase tracking-widest text-text-secondary mt-1">Total Monthly Inquiries</p>
            </div>
          </div>

          {/* Main Stat 2 */}
          <div className="bento-item md:col-span-2 lg:col-span-2 bg-heritage text-canvas p-6 space-y-4 flex flex-col justify-between">
            <div className="flex justify-between items-start text-canvas/50">
              <div className="w-10 h-10 rounded-full bg-canvas/10 flex items-center justify-center text-canvas">
                <Briefcase size={18} />
              </div>
              <TrendingUp size={18} />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold italic">42</h3>
              <p className="text-[9px] uppercase tracking-widest opacity-60 mt-1">Active Event Projects</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bento-item md:col-span-4 lg:col-span-2 lg:row-span-2 bg-canvas border border-linen p-6 flex flex-col">
            <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-heritage mb-6">Recent Activity</h4>
            <div className="flex-grow space-y-6">
              {[
                { time: '2m ago', action: 'New Inquiry', subject: 'Kapoor Gala' },
                { time: '45m ago', action: 'Update', subject: 'Palace Wedding' },
                { time: '3h ago', action: 'New Client', subject: 'Tech Summit' },
                { time: '1d ago', action: 'Completed', subject: 'Villa Party' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 border-l border-linen pl-4 relative">
                  <div className="absolute left-[-4.5px] top-0 w-2 h-2 rounded-full bg-heritage" />
                  <div>
                    <p className="text-[11px] font-bold text-text-primary">{item.action}: {item.subject}</p>
                    <p className="text-[9px] text-text-secondary mt-0.5">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-6 text-[8px] uppercase tracking-widest border-linen h-10">View All Logs</Button>
          </div>

          {/* Large Graph / Visual Area */}
          <div className="bento-item md:col-span-4 lg:col-span-4 bg-heritage-soft/20 border border-linen p-6 h-64 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-heritage">Audience Reach</h4>
                <p className="text-[11px] text-text-secondary mt-1 italic font-serif">Historical analytics for &quot;The Archive&quot; views.</p>
              </div>
              <div className="flex items-end gap-1.5 h-24">
                {[40, 70, 45, 90, 65, 80, 50, 95, 75, 60, 85, 100].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-grow bg-heritage/10 group-hover:bg-heritage transition-all duration-1000" 
                    style={{ height: `${h}%`, transitionDelay: `${i * 30}ms` }} 
                  />
                ))}
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.015] pointer-events-none">
               <TrendingUp size={200} strokeWidth={1} />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bento-item md:col-span-2 lg:col-span-2 bg-canvas border border-linen p-6 flex flex-col justify-between group cursor-pointer hover:border-heritage transition-colors">
            <MessageSquare size={20} className="text-heritage" />
            <div className="mt-4">
              <h4 className="text-base font-serif font-bold text-text-primary italic">Unread Inquiries</h4>
              <p className="text-[11px] text-text-secondary mt-0.5">12 pending responses</p>
            </div>
            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-heritage mt-4">
              Go to Inbox <ExternalLink size={10} />
            </div>
          </div>

          {/* Quick Actions 2 */}
          <div className="bento-item md:col-span-2 lg:col-span-2 bg-canvas border border-linen p-6 flex flex-col justify-between group cursor-pointer hover:border-heritage transition-colors">
            <Calendar size={20} className="text-heritage" />
            <div className="mt-4">
              <h4 className="text-base font-serif font-bold text-text-primary italic">Today&apos;s Schedule</h4>
              <p className="text-[11px] text-text-secondary mt-0.5">3 site walkthroughs</p>
            </div>
            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-heritage mt-4">
              View Calendar <ExternalLink size={10} />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
