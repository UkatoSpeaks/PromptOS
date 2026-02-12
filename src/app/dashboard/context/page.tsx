"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  User, 
  Terminal, 
  Layout, 
  Save, 
  ShieldCheck, 
  Zap,
  Info,
  ChevronRight,
  Code2,
  Cpu,
  Globe,
  Briefcase,
  Trophy,
  Activity,
  CheckCircle2,
  Clock,
  Layers,
  Search,
  Settings,
  MoreVertical
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// --- Main Page Component ---

export default function ContextPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [techStack, setTechStack] = useState(["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"]);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 2000);
  };

  return (
    <div className="max-w-[1200px] mx-auto space-y-12 pb-24 relative overflow-hidden">
      {/* Premium Decorative Glows */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[0] left-[-200px] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* 1. Ultra Header Section */}
      <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pt-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-inner">
               <Sparkles size={18} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Neural Grounding</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gradient leading-tight">
            Identity Context
          </h1>
          <p className="text-zinc-500 text-xl max-w-2xl font-medium">
            Define your architectural preferences to automate prompt grounding.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-3xl backdrop-blur-sm shadow-2xl">
           <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary relative">
              <ShieldCheck size={24} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#020203] animate-pulse" />
           </div>
           <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Context Status</p>
              <p className="text-sm font-bold text-white">Fully Optimized</p>
           </div>
        </div>
      </section>

      {/* 2. Professional Identity Form */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start mt-8">
        {/* Left Column: Core Context Form */}
        <div className="xl:col-span-8 space-y-10">
          
          {/* Section 1: Basic Identity */}
          <section className="space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-3 text-zinc-300 pl-2">
              <User size={18} className="text-primary" />
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] pl-1">Full Name</label>
                  <input 
                    type="text" 
                    defaultValue="Gabriel Thorne"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-primary/40 focus:outline-none placeholder:text-zinc-700 transition-all font-medium text-zinc-300"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] pl-1">Professional Role</label>
                  <select className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-primary/40 focus:outline-none transition-all font-medium text-zinc-300 appearance-none">
                     <option>Senior Full Stack Developer</option>
                     <option>Lead Software Architect</option>
                     <option>Product Manager</option>
                     <option>UX Designer</option>
                     <option>Startup Founder</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] pl-1">Experience Level</label>
                  <div className="flex gap-2">
                     {["Beginner", "Intermediate", "Advanced", "Legendary"].map(lvl => (
                       <button 
                         key={lvl}
                         className={cn(
                           "flex-1 py-3 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all",
                           lvl === "Advanced" 
                            ? "bg-primary/20 border-primary/40 text-primary" 
                            : "bg-white/[0.02] border-white/5 text-zinc-600 hover:border-white/10"
                         )}
                       >
                         {lvl}
                       </button>
                     ))}
                  </div>
               </div>
            </div>
          </section>

          {/* Section 2: Primary Tech Stack */}
          <section className="space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-3 text-zinc-300 pl-2">
              <Terminal size={18} className="text-emerald-500" />
              Primary Tech Stack
            </h3>
            <div className="p-8 rounded-[40px] bg-white/[0.02] border border-white/5 space-y-6">
               <div className="flex flex-wrap gap-3">
                  {techStack.map(tag => (
                    <span key={tag} className="px-5 py-2 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-bold text-zinc-300 flex items-center gap-3 group hover:border-emerald-500/30 transition-all cursor-pointer">
                      {tag}
                      <button className="text-zinc-600 group-hover:text-red-500 transition-colors">×</button>
                    </span>
                  ))}
                  <button className="px-5 py-2 rounded-2xl border border-dashed border-white/10 text-xs text-zinc-600 hover:text-white hover:border-white/30 transition-all">
                    + Add Technology
                  </button>
               </div>
               <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em]">This stack informs the technical constraints of all generated code.</p>
            </div>
          </section>

          {/* Section 3: Tone & Output Preference */}
          <section className="space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-3 text-zinc-300 pl-2">
              <Activity size={18} className="text-orange-500" />
              Tone & Defaults
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-3">
                  <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] pl-1">Default Response Tone</label>
                  <select className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-primary/40 focus:outline-none transition-all font-medium text-zinc-300 appearance-none">
                     <option>Architectural & Detailed</option>
                     <option>Concise & Minimal</option>
                     <option>Educational & Verbose</option>
                     <option>Direct & Opinionated</option>
                  </select>
               </div>
               <div className="space-y-3">
                  <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] pl-1">Default Output Format</label>
                  <select className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-primary/40 focus:outline-none transition-all font-medium text-zinc-300 appearance-none">
                     <option>Markdown Documentation</option>
                     <option>Clean Code Snippets</option>
                     <option>Architecture Breakdown</option>
                     <option>Bulletpoint List</option>
                  </select>
               </div>
            </div>
          </section>

          {/* Section 4: Project Context */}
          <section className="space-y-6">
            <div className="flex items-center justify-between pl-2">
               <h3 className="text-lg font-bold flex items-center gap-3 text-zinc-300">
                  <Briefcase size={18} className="text-primary" />
                  Global Project Context
               </h3>
               <span className="text-[10px] bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full font-bold uppercase tracking-widest">Crucial</span>
            </div>
            <div className="p-8 rounded-[40px] bg-[#09090b] border border-white/5 space-y-4 relative overflow-hidden noise">
               <textarea 
                 className="w-full h-48 bg-transparent border-none focus:outline-none resize-none font-mono text-sm leading-relaxed text-zinc-400"
                 placeholder="Describe your current long-term focus (e.g., 'I am building a high-concurrency SaaS for developer productivity using Next.js 15 and Server Actions...')"
                 defaultValue="I am building a premium prompt engineering platform called PromptOS. The focus is on ultra-high-fidelity UI/UX, agentic workflows, and persistent memory grounding. Every prompt generated should adhere to a 'Sophisticated & Premium' aesthetic and follow Clean Architecture principles."
               />
               <div className="flex items-center gap-4 text-[10px] text-zinc-600 font-bold uppercase tracking-widest border-t border-white/5 pt-4">
                  <Info size={14} />
                  This context is automatically prepended to every neural request
               </div>
            </div>
          </section>

          {/* Save Action */}
          <div className="pt-8 flex justify-end">
             <Button 
               onClick={handleSave}
               disabled={isSaving}
               className="h-16 px-12 rounded-[24px] bg-primary hover:bg-primary/90 text-white font-extrabold uppercase tracking-widest text-xs gap-3 shadow-2xl shadow-primary/20 group"
             >
                {isSaving ? (
                  <>
                    <Clock size={18} className="animate-spin" />
                    Updating Memory...
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    Commit Cloud Context
                  </>
                )}
             </Button>
          </div>
        </div>

        {/* Right Column: Information & Meta */}
        <div className="xl:col-span-4 sticky top-8 space-y-8">
          {/* Identity Strength Card */}
          <Card className="p-8 rounded-[40px] bg-[#09090b] border-white/5 relative overflow-hidden group">
             <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                <div className="w-24 h-24 rounded-full border-4 border-emerald-500/20 flex items-center justify-center relative">
                   <div className="absolute inset-0 rounded-full border-t-4 border-emerald-500 animate-[spin_3s_linear_infinite]" />
                   <span className="text-3xl font-black italic text-emerald-500">98%</span>
                </div>
                <div>
                   <h4 className="text-xl font-bold mb-2">Grounding Strength</h4>
                   <p className="text-zinc-500 text-sm leading-relaxed">
                      Your identity context is highly detailed. This allows the AI to generate results with 98% architectural alignment.
                   </p>
                </div>
                <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: "98%" }}
                     transition={{ duration: 1.5, ease: "easeOut" }}
                     className="h-full bg-emerald-500"
                   />
                </div>
             </div>
             
             {/* Decorative Background Icon */}
             <Trophy size={120} className="absolute -bottom-8 -right-8 text-white/[0.02] -rotate-12 transition-transform group-hover:scale-110 duration-700" />
          </Card>

          {/* Integration Info */}
          <div className="p-10 rounded-[40px] bg-primary/5 border border-primary/10 space-y-8">
             <div className="space-y-4">
                <h4 className="font-bold flex items-center gap-2 text-primary">
                   <Layers size={18} />
                   Inheritance Chain
                </h4>
                <div className="space-y-3">
                   <InheritanceItem active label="Global Context" />
                   <InheritanceItem active label="Professional Identity" />
                   <InheritanceItem label="Project Specifics" />
                   <InheritanceItem label="Local Overrides" />
                </div>
             </div>

             <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                   <Zap size={12} className="text-primary" />
                   Efficiency Gain
                </div>
                <p className="text-2xl font-black italic">+840 Tokens</p>
                <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Average context saved per prompt</p>
             </div>
          </div>

          {/* Success Notification Mock */}
          {isSaving && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-4"
            >
               <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                  <CheckCircle2 size={24} />
               </div>
               <div className="text-sm font-bold text-emerald-500">
                  Neural memory re-initialized successfully.
               </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Sub-components ---

function InheritanceItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-1.5 h-1.5 rounded-full",
          active ? "bg-primary glow" : "bg-zinc-800"
        )} />
        <span className={cn(
          "text-xs font-bold",
          active ? "text-zinc-300" : "text-zinc-700 font-black italic"
        )}>{label}</span>
      </div>
      {active && <CheckCircle2 size={12} className="text-emerald-500/50" />}
    </div>
  );
}
