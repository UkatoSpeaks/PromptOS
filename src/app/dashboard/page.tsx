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
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const recentPrompts = [
    { id: 1, title: "Next.js Component Architect", date: "2h ago", tag: "Frontend" },
    { id: 2, title: "SQL Optimizer Engine", date: "5h ago", tag: "Database" },
    { id: 3, title: "Unit Test Generator", date: "Yesterday", tag: "Quality" },
    { id: 4, title: "Zustand State Planner", date: "2 days ago", tag: "State" },
    { id: 5, title: "Clean Arch Template", date: "4 days ago", tag: "System" },
  ];

  const stats = [
    { label: "Prompts Generated", value: "1,280", icon: Zap, color: "text-yellow-500" },
    { label: "Saved Templates", value: "42", icon: Save, color: "text-primary" },
    { label: "Workflows Created", value: "12", icon: Workflow, color: "text-blue-500" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-10 pb-20"
    >
      {/* 1. Welcome Header */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h1 
              variants={item}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-2"
            >
              Welcome back, Anurag 👋
            </motion.h1>
            <motion.p 
              variants={item}
              className="text-zinc-500 text-lg"
            >
              Ready to engineer better prompts today?
            </motion.p>
          </div>
          
          <motion.div 
            variants={item}
            className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.05] p-2 rounded-2xl"
          >
            <div className="flex items-center gap-2 px-4 py-2 border-r border-white/5">
              <TrendingUp size={16} className="text-emerald-500" />
              <span className="text-sm font-bold">84%</span>
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">Quality Score</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2">
              <Clock size={16} className="text-primary" />
              <span className="text-sm font-bold">12.4h</span>
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">Saved this week</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Quick Action Cards */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <QuickActionCard 
            href="/dashboard/builder"
            icon={<Plus size={24} />}
            title="Create New Prompt"
            description="Start fresh workflow"
            color="bg-primary/20 text-primary border-primary/20"
          />
          <QuickActionCard 
            href="/dashboard/library"
            icon={<Library size={24} />}
            title="View Saved Prompts"
            description="Access your library"
            color="bg-blue-500/10 text-blue-500 border-blue-500/20"
          />
          <QuickActionCard 
            href="/dashboard/workflows"
            icon={<Workflow size={24} />}
            title="Build Workflow"
            description="Sequence complex tasks"
            color="bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
          />
          <QuickActionCard 
            href="/dashboard/settings"
            icon={<Sparkles size={24} />}
            title="Update Context"
            description="Refine AI memory"
            color="bg-purple-500/10 text-purple-500 border-purple-500/20"
          />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* 3. Recent Prompts Section */}
        <section className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <History size={20} className="text-zinc-500" />
              Recent Activity
            </h3>
            <Button variant="ghost" size="sm" className="text-zinc-500 hover:text-white group">
              View All <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="space-y-3">
            {recentPrompts.map((prompt, idx) => (
              <motion.div
                key={prompt.id}
                variants={item}
                whileHover={{ x: 4 }}
                className="group flex items-center justify-between p-4 bg-white/[0.01] border border-white/5 rounded-2xl hover:bg-white/[0.03] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:border-primary/40 group-hover:text-primary transition-all">
                    <History size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm leading-none mb-1.5">{prompt.title}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-zinc-500 font-mono tracking-widest">{prompt.date}</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-bold text-primary uppercase">
                        {prompt.tag}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-600 hover:text-white">
                    <Copy size={14} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-600 hover:text-white">
                    <Edit2 size={14} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-600 hover:text-red-500">
                    <Trash2 size={14} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4 & 5. Sidebar Activity */}
        <section className="lg:col-span-4 space-y-10">
          {/* Quick Stats */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Engine Stats</h3>
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  variants={item}
                  className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className={stat.color}>
                      <stat.icon size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workflow Overview */}
          <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
            <CardHeader className="p-6">
              <CardTitle className="text-lg flex items-center gap-2">
                <Workflow size={18} className="text-primary" />
                Workflow Hub
              </CardTitle>
              <CardDescription className="text-xs">
                Active deployments & blueprints
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-0 space-y-4">
               <div className="p-3 bg-white/[0.03] rounded-xl border border-white/5 space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-bold text-zinc-500">
                     <span>ACTIVE BLUEPRINTS</span>
                     <span className="text-primary italic">Latest v4.2</span>
                  </div>
                  <div className="text-sm font-bold">API_Endpoint_Refactor</div>
               </div>
               <Button className="w-full gap-2 rounded-xl">
                 Open Workflow Engine
                 <ChevronRight size={16} />
               </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </motion.div>
  );
}

function QuickActionCard({ href, icon, title, description, color }: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        className={cn(
          "p-6 rounded-[24px] border border-white/5 bg-[#09090b] shadow-xl group cursor-pointer transition-all",
          "hover:border-primary/40 relative overflow-hidden"
        )}
      >
        <div className={cn(
          "w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
          color
        )}>
          {icon}
        </div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-zinc-500 text-sm">{description}</p>
        
        {/* Glow backdrop */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </Link>
  );
}
