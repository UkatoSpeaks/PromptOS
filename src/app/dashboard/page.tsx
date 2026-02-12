"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Plus, 
  Library, 
  Workflow, 
  Sparkles, 
  History, 
  Copy, 
  Edit2, 
  Trash2, 
  ChevronRight,
  TrendingUp,
  Save,
  Zap,
  Clock,
  ArrowUpRight,
  Search,
  MoreVertical,
  Terminal as TerminalIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const recentPrompts = [
    { id: 1, title: "Next.js Component Architect", date: "2h ago", tag: "Frontend", status: "Active" },
    { id: 2, title: "SQL Optimizer Engine", date: "5h ago", tag: "Database", status: "Saved" },
    { id: 3, title: "Unit Test Generator", date: "Yesterday", tag: "Quality", status: "Saved" },
    { id: 4, title: "Zustand State Planner", date: "2 days ago", tag: "State", status: "Active" },
    { id: 5, title: "Clean Arch Template", date: "4 days ago", tag: "System", status: "Draft" },
  ];

  const stats = [
    { label: "Executions", value: "1.2k", icon: Zap, color: "text-amber-400", bg: "bg-amber-400/10" },
    { label: "Storage Used", value: "42MB", icon: Save, color: "text-primary", bg: "bg-primary/10" },
    { label: "Active Flows", value: "12", icon: Workflow, color: "text-blue-400", bg: "bg-blue-400/10" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-[1600px] mx-auto space-y-12 pb-24"
    >
      {/* 1. Enhanced Header Section */}
      <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pt-4">
        <div>
          <motion.div variants={item} className="flex items-center gap-2 mb-3">
             <div className="px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
                Developer Plan
             </div>
             <div className="w-1 h-1 rounded-full bg-zinc-700" />
             <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                v2.4.0 Engine
             </div>
          </motion.div>
          <motion.h1 
            variants={item}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-gradient"
          >
            Welcome back, Anurag
          </motion.h1>
          <motion.p 
            variants={item}
            className="text-zinc-500 text-lg font-medium"
          >
            Your AI engine is primed and grounded in <span className="text-white">workspace-3</span>.
          </motion.p>
        </div>

        <motion.div 
          variants={item} 
          className="flex items-center gap-6"
        >
          <div className="flex -space-x-3 items-center">
             {[1,2,3].map(i => (
               <div key={i} className="w-10 h-10 rounded-full border-[3px] border-[#020203] bg-zinc-800 ring-1 ring-white/5 shadow-2xl" />
             ))}
             <div className="w-10 h-10 rounded-full border-[3px] border-[#020203] bg-primary/20 ring-1 ring-white/5 flex items-center justify-center text-[10px] font-bold text-primary shadow-2xl relative z-10">
                GT
             </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-xl border-white/5 bg-white/5 hover:bg-white/10 gap-2">
              <Plus size={16} />
              Invite
            </Button>
            <Button className="rounded-xl gap-2 shadow-xl shadow-primary/20 px-6">
              <Zap size={16} fill="currentColor" />
              Go Pro
            </Button>
          </div>
        </motion.div>
      </section>

      {/* 2. Quick Action Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <QuickActionCard 
          href="/dashboard/builder"
          icon={<Plus size={24} />}
          title="New Prompt"
          description="Build from blueprint"
          color="text-primary"
          bg="bg-primary/10"
          isPrimary
        />
        <QuickActionCard 
          href="/dashboard/library"
          icon={<Library size={24} />}
          title="Library"
          description="42 Saved templates"
          color="text-blue-400"
          bg="bg-blue-400/10"
        />
        <QuickActionCard 
          href="/dashboard/workflows"
          icon={<Workflow size={24} />}
          title="Workflows"
          description="12 Active pipelines"
          color="text-emerald-400"
          bg="bg-emerald-400/10"
        />
        <QuickActionCard 
          href="/dashboard/settings"
          icon={<Sparkles size={24} />}
          title="Identity"
          description="Update global context"
          color="text-purple-400"
          bg="bg-purple-400/10"
        />
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
        {/* 3. Recent Activity with Deep Polish */}
        <section className="xl:col-span-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
               <h3 className="text-2xl font-bold tracking-tight">Recent Activity</h3>
               <p className="text-zinc-500 text-sm mt-1">Prompt history across all models</p>
            </div>
            <div className="flex gap-2">
               <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Filter..." 
                    className="bg-white/5 border border-white/5 rounded-xl py-2 pl-9 pr-4 text-sm focus:ring-1 focus:ring-primary focus:outline-none w-40 transition-all focus:w-64" 
                  />
               </div>
               <Button variant="outline" size="icon" className="rounded-xl border-white/5">
                 <MoreVertical size={16} className="text-zinc-500" />
               </Button>
            </div>
          </div>
          
          <div className="grid gap-3">
            {recentPrompts.map((prompt) => (
              <motion.div
                key={prompt.id}
                variants={item}
                className="group flex items-center justify-between p-5 glass-card active-glow"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-600 group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:text-primary transition-all duration-300">
                    <TerminalIcon size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                       <h4 className="font-bold text-base leading-none text-zinc-200 group-hover:text-white transition-colors">{prompt.title}</h4>
                       <span className={cn(
                          "px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider",
                          prompt.status === "Active" ? "bg-emerald-500/10 text-emerald-500" : "bg-zinc-800 text-zinc-500"
                       )}>
                          {prompt.status}
                       </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-zinc-600">
                         <Clock size={12} />
                         <span className="text-xs font-medium uppercase tracking-tighter">{prompt.date}</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-zinc-800" />
                      <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                        {prompt.tag}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-10 w-10 text-zinc-600 hover:text-white hover:bg-white/5 rounded-xl">
                    <Copy size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-10 w-10 text-zinc-600 hover:text-white hover:bg-white/5 rounded-xl">
                    <ArrowUpRight size={16} />
                  </Button>
                </div>
              </motion.div>
            ))}
            <motion.button 
              variants={item}
              className="w-full py-4 text-sm font-bold text-zinc-600 hover:text-primary transition-colors uppercase tracking-[0.2em]"
            >
               View Full History
            </motion.button>
          </div>
        </section>

        {/* 4. Functional Sidebar */}
        <section className="xl:col-span-4 space-y-12">
          {/* Quick Stats Grid */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">Engine Analytics</h3>
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat) => (
                <motion.div 
                  key={stat.label}
                  variants={item}
                  className="p-6 glass-card group flex items-center justify-between"
                >
                  <div className="flex items-center gap-5">
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110", stat.bg, stat.color)}>
                      <stat.icon size={22} />
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] mb-1">{stat.label}</div>
                      <div className="text-2xl font-bold group-hover:text-primary transition-colors">{stat.value}</div>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-zinc-900 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                     <TrendingUp size={14} className="text-emerald-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workflow Promotion Card */}
          <motion.div variants={item}>
             <Card className="relative overflow-hidden bg-[#09090b] border-white/5 p-8 group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity -rotate-12 translate-x-8 -translate-y-8">
                   <Workflow size={120} />
                </div>
                <div className="relative z-10 space-y-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Workflow size={24} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">Workspace Hub</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">
                        Scale your prompts into sequences. Deploy versioned blueprints across your entire team in seconds.
                      </p>
                   </div>
                   <div className="pt-2">
                      <Link href="/dashboard/workflows">
                        <Button className="w-full h-12 rounded-xl text-sm font-bold gap-2 group/btn">
                           Open Orchestrator
                           <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                   </div>
                </div>
             </Card>
          </motion.div>

          {/* Tips Section */}
          <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10 relative overflow-hidden group">
             <div className="flex items-start gap-4 relative z-10">
                <div className="mt-1">
                   <Sparkles size={18} className="text-primary animate-pulse" />
                </div>
                <div className="space-y-2">
                   <p className="text-xs font-bold text-primary uppercase tracking-widest">Pro Tip</p>
                   <p className="text-sm text-zinc-400 leading-relaxed">
                      Use <span className="text-white font-mono">{`{{context}}`}</span> variables to automatically inject your workspace rules into any prompt.
                   </p>
                </div>
             </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

function QuickActionCard({ href, icon, title, description, color, bg, isPrimary }: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bg: string;
  isPrimary?: boolean;
}) {
  return (
    <Link href={href}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 15 },
          show: { opacity: 1, y: 0 }
        }}
        whileHover={{ y: -5, scale: 1.02 }}
        className={cn(
          "p-8 glass-card group cursor-pointer relative overflow-hidden h-full",
          isPrimary && "bg-white/[0.03] border-white/10 ring-1 ring-primary/5"
        )}
      >
        <div className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-all shadow-lg",
          bg, color
        )}>
          {icon}
        </div>
        <div>
           <h4 className="font-bold text-xl mb-1.5 group-hover:text-primary transition-colors">{title}</h4>
           <p className="text-zinc-500 text-xs font-medium leading-relaxed">{description}</p>
        </div>
        
        {/* Animated Chevron */}
        <div className="absolute top-8 right-8 text-zinc-800 group-hover:text-primary transition-colors group-hover:translate-x-1 duration-300">
           <ChevronRight size={20} />
        </div>

        {/* Dynamic Glow */}
        <div className={cn(
           "absolute -bottom-20 -right-20 w-40 h-40 blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity",
           bg
        )} />
      </motion.div>
    </Link>
  );
}
