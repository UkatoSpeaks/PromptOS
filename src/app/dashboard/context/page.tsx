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
      <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pt-4 relative group">
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(139,92,246,0.1)]">
               <Sparkles size={16} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Neural Grounding</span>
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-gradient leading-tight lg:-ml-1">
            Identity Context
          </h1>
          <p className="text-zinc-500 text-xl max-w-2xl font-medium leading-relaxed">
            Configure your <span className="text-zinc-300">architectural genome</span> to automate high-fidelity prompt grounding.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-5 bg-white/[0.01] border border-white/5 p-5 rounded-[32px] backdrop-blur-md shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/5"
        >
           <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary relative shadow-inner">
              <ShieldCheck size={28} />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-[3px] border-[#020203] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
           </div>
           <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-0.5">Grounding Status</p>
              <p className="text-lg font-bold text-white flex items-center gap-2">
                Optimal
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </p>
           </div>
        </motion.div>
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
            <div className="p-10 rounded-[48px] bg-white/[0.01] border border-white/5 space-y-8 relative overflow-hidden group/stack">
               <div className="flex flex-wrap gap-3 relative z-10">
                  {techStack.map(tag => (
                    <motion.span 
                      key={tag} 
                      whileHover={{ y: -2 }}
                      className="px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-bold text-zinc-300 flex items-center gap-3 group/tag hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] transition-all cursor-pointer shadow-lg"
                    >
                      {tag}
                      <button className="text-zinc-600 group-hover/tag:text-red-500 transition-colors">×</button>
                    </motion.span>
                  ))}
                  <button className="px-6 py-3 rounded-2xl border border-dashed border-white/10 text-xs text-zinc-600 font-bold hover:text-white hover:border-white/30 transition-all hover:bg-white/[0.02]">
                    + Append Node
                  </button>
               </div>
               <div className="flex items-center gap-3 text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] relative z-10">
                  <div className="w-1 h-1 rounded-full bg-emerald-500" />
                  Technical constraints are strictly enforced via the architecture stack.
               </div>
               {/* Underglow */}
               <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-emerald-500/10 blur-[80px] rounded-full opacity-0 group-hover/stack:opacity-100 transition-opacity duration-1000" />
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
          <Card className="p-10 rounded-[48px] bg-[#09090b] border-white/5 relative overflow-hidden group/strength shadow-2xl">
             <div className="flex flex-col items-center text-center space-y-8 relative z-10">
                <div className="w-32 h-32 rounded-full border-4 border-emerald-500/10 flex items-center justify-center relative shadow-[0_0_50px_rgba(16,185,129,0.05)]">
                   <div className="absolute inset-0 rounded-full border-t-4 border-emerald-500 border-r-4 border-r-transparent animate-[spin_4s_linear_infinite]" />
                   <div className="absolute inset-2 rounded-full border-b-4 border-emerald-500/20 border-l-4 border-l-transparent animate-[spin_6s_linear_infinite_reverse]" />
                   <span className="text-4xl font-black italic text-emerald-500 tracking-tighter">98%</span>
                </div>
                <div>
                   <h4 className="text-2xl font-bold mb-3 tracking-tight">Grounding Rank</h4>
                   <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                      Your Identity Genome is highly detailed, enabling <span className="text-emerald-500/80 font-bold text-xs uppercase tracking-widest">Precision Tier</span> results.
                   </p>
                </div>
                <div className="w-full h-2.5 bg-zinc-900 rounded-full overflow-hidden p-0.5">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: "98%" }}
                     transition={{ duration: 2, ease: "circOut" }}
                     className="h-full bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                   />
                </div>
             </div>
             
             {/* Decorative Background Icon */}
             <Trophy size={160} className="absolute -bottom-12 -right-12 text-white/[0.01] -rotate-12 transition-all group-hover/strength:scale-110 group-hover/strength:text-emerald-500/5 duration-1000 pointer-events-none" />
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
