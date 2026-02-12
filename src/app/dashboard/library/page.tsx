"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Search, 
  Filter, 
  Clock, 
  Tag as TagIcon, 
  MoreVertical,
  Star,
  Copy,
  ExternalLink,
  Edit2,
  Trash2,
  ChevronRight,
  Grid,
  List,
  ArrowUpRight,
  Database,
  Terminal,
  Cpu,
  Shield,
  Layout,
  FileCode,
  Layers,
  Sparkles,
  Command,
  X,
  History,
  Check,
  ChevronDown,
  Activity,
  Zap,
  Box,
  CornerDownRight,
  Monitor,
  MousePointer2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

// --- Types ---

interface PromptAsset {
  id: string;
  title: string;
  description: string;
  content: string;
  category: "Frontend" | "Backend" | "DevOps" | "Database" | "System" | "Testing";
  tags: string[];
  lastUpdated: string;
  usageCount: number;
  isFavorite: boolean;
  version: string;
  avgTokens: string;
}

// --- Mock Data ---

const MOCK_PROMPTS: PromptAsset[] = [
  {
    id: "1",
    title: "Next.js Component Architect",
    description: "Generates robust, accessible React components with Tailwind CSS integration.",
    content: "# ROLE: Senior Frontend Architect\n# CONTEXT: High-performance Next.js application using App Router.\n# TASK: Build a reusable component...",
    category: "Frontend",
    tags: ["React", "Next.js", "Accessibility"],
    lastUpdated: "2h ago",
    usageCount: 124,
    isFavorite: true,
    version: "2.4.1",
    avgTokens: "1.2k"
  },
  {
    id: "2",
    title: "SQL Optimizer Engine",
    description: "Analyzes and refactors slow SQL queries for PostgreSQL performance.",
    content: "# ROLE: Database Performance Engineer\n# TASK: Optimize the provided query for indexed lookups...",
    category: "Database",
    tags: ["PostgreSQL", "Performance", "Optimization"],
    lastUpdated: "5h ago",
    usageCount: 89,
    isFavorite: false,
    version: "1.0.4",
    avgTokens: "850"
  },
  {
    id: "3",
    title: "Clean Arch Boilerplate",
    description: "Creates folder structures and core files for Hexagonal Architecture.",
    content: "# TASK: Generate a domain-driven design structure for a new Node.js service...",
    category: "System",
    tags: ["Clean Code", "Design Patterns", "DDD"],
    lastUpdated: "Yesterday",
    usageCount: 215,
    isFavorite: true,
    version: "3.2.0",
    avgTokens: "2.5k"
  },
  {
    id: "4",
    title: "Unit Test Generator (Jest)",
    description: "Converts requirements into comprehensive Jest/Vitest test suites.",
    content: "# TASK: Analyze the following business logic and write 100% coverage tests...",
    category: "Testing",
    tags: ["Jest", "Vitest", "Coverage"],
    lastUpdated: "3 days ago",
    usageCount: 56,
    isFavorite: false,
    version: "1.2.1",
    avgTokens: "1.4k"
  },
  {
    id: "5",
    title: "Docker Multi-stage CI",
    description: "Optimized Dockerfile generator for Node.js and Go production builds.",
    content: "# TASK: Create a production-ready Dockerfile using alpine images and multi-stage builds...",
    category: "DevOps",
    tags: ["Docker", "CI/CD", "DevOps"],
    lastUpdated: "1 week ago",
    usageCount: 302,
    isFavorite: false,
    version: "2.0.0",
    avgTokens: "900"
  },
  {
    id: "6",
    title: "Zustand State Planner",
    description: "Blueprint for scalable state management with middleware and persistence.",
    content: "# TASK: Define a Zustand store with devtools and persist middleware for a cart system...",
    category: "Frontend",
    tags: ["Zustand", "State", "Optimization"],
    lastUpdated: "2 weeks ago",
    usageCount: 45,
    isFavorite: false,
    version: "1.1.0",
    avgTokens: "1.1k"
  }
];

// --- Main Page Component ---

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPrompt, setSelectedPrompt] = useState<PromptAsset | null>(null);
  const [isCopied, setIsCopied] = useState<string | null>(null);

  const categories = ["All", "Frontend", "Backend", "Database", "System", "DevOps", "Testing"];

  const filteredPrompts = useMemo(() => {
    return MOCK_PROMPTS.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const copyToClipboard = (prompt: PromptAsset) => {
    navigator.clipboard.writeText(prompt.content);
    setIsCopied(prompt.id);
    setTimeout(() => setIsCopied(null), 2000);
  };

  return (
    <div className="max-w-[1600px] mx-auto space-y-12 pb-24 relative overflow-hidden">
      {/* Premium Decorative Glows */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[0] left-[-200px] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* 1. Ultra Header Section */}
      <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pt-4">
        <div className="space-y-4">
           <motion.div 
             initial={{ opacity: 0, x: -10 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex items-center gap-2"
           >
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-inner">
                 <Box size={18} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Asset Warehouse</span>
           </motion.div>
           <motion.h1 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-6xl font-bold tracking-tight text-gradient leading-tight"
           >
             Prompt Library
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-zinc-500 text-xl max-w-2xl font-medium"
           >
             Your personal high-fidelity repository of engineered blueprints and neural instructions.
           </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="flex items-center gap-4"
        >
          <div className="flex -space-x-3 items-center mr-6">
             {[1,2,3,4].map(i => (
               <div key={i} className="w-10 h-10 rounded-full border-[3px] border-[#020203] bg-zinc-800 shadow-xl" />
             ))}
             <div className="w-10 h-10 rounded-full border-[3px] border-[#020203] bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary relative z-10 shadow-xl">
                +42
             </div>
          </div>
          <Link href="/dashboard/builder">
            <Button className="rounded-[20px] h-16 px-10 gap-3 shadow-2xl shadow-primary/20 text-sm font-extrabold uppercase tracking-widest group">
               <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
               New Blueprint
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* 2. Enhanced Search & Filter Bar */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-3 glass-card rounded-[32px] flex flex-col xl:flex-row items-center gap-3 backdrop-blur-2xl shadow-2xl overflow-hidden relative"
      >
         {/* Subtle Noise Texture Overlay */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

         <div className="flex-1 w-full relative group p-1">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search by title, description, or content syntax..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-14 pr-4 text-sm focus:ring-1 focus:ring-primary/40 focus:outline-none placeholder:text-zinc-700 transition-all font-medium text-zinc-300"
            />
         </div>
         
         <div className="flex items-center gap-3 w-full xl:w-auto overflow-hidden">
            <div className="flex items-center gap-1.5 p-1.5 bg-white/[0.02] rounded-[20px] border border-white/5 overflow-x-auto no-scrollbar scroll-smooth">
               {categories.map(cat => (
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={cn(
                     "px-6 py-3 rounded-2xl text-[10px] uppercase font-bold tracking-widest transition-all whitespace-nowrap",
                     activeCategory === cat 
                      ? "bg-white text-black shadow-xl" 
                      : "text-zinc-600 hover:text-zinc-300 hover:bg-white/[0.02]"
                   )}
                 >
                   {cat}
                 </button>
               ))}
            </div>
            
            <div className="flex items-center gap-2 shrink-0">
               <Button variant="outline" className="h-12 w-12 rounded-2xl border-white/5 bg-white/5 p-0 hover:bg-white/10">
                  <Filter size={18} className="text-zinc-500" />
               </Button>
               <Button variant="outline" className="h-12 w-12 rounded-2xl border-white/5 bg-white/5 p-0 hover:bg-white/10">
                  <Grid size={18} className="text-primary" />
               </Button>
            </div>
         </div>
      </motion.section>

      {/* 3. Assets Display System */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start mt-8">
         <div className={cn(
           "transition-all duration-700 ease-in-out",
           selectedPrompt ? "xl:col-span-7" : "xl:col-span-12"
         )}>
            <AnimatePresence mode="popLayout">
               {filteredPrompts.length === 0 ? (
                 <motion.div 
                   key="empty"
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   className="min-h-[500px] flex flex-col items-center justify-center p-20 text-center glass-card border-dashed border-primary/20 rounded-[48px]"
                 >
                    <div className="relative mb-10 group">
                       <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full scale-150 animate-pulse" />
                       <div className="w-32 h-32 rounded-[40px] bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-700 relative z-10 transition-transform group-hover:scale-110 duration-500">
                          <Monitor size={64} strokeWidth={1} />
                       </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight">Warehouse Empty</h3>
                    <p className="text-zinc-500 text-lg max-w-[320px] mx-auto leading-relaxed">Your neural query returned zero results. Broaden your parameters or reset filters.</p>
                    <Button 
                      onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
                      className="mt-12 rounded-2xl h-14 px-8 font-bold border-white/10 bg-white/5 hover:bg-white/10"
                    >
                       Reset All Neural Parameters
                    </Button>
                 </motion.div>
               ) : (
                 <motion.div 
                   layout
                   className={cn(
                     "grid gap-8 auto-rows-fr",
                     selectedPrompt 
                      ? "grid-cols-1 md:grid-cols-2" 
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3"
                   )}
                 >
                    {filteredPrompts.map((prompt) => (
                      <PromptCard 
                        key={prompt.id} 
                        prompt={prompt} 
                        isSelected={selectedPrompt?.id === prompt.id}
                        onSelect={() => setSelectedPrompt(prompt)}
                        onCopy={() => copyToClipboard(prompt)}
                        isCopied={isCopied === prompt.id}
                      />
                    ))}
                 </motion.div>
               )}
            </AnimatePresence>
         </div>

         {/* 4. Ultra-Polished Detail Panel */}
         <AnimatePresence>
            {selectedPrompt && (
              <motion.div 
                initial={{ opacity: 0, x: 100, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 100, scale: 0.98 }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                className="xl:col-span-5 hidden xl:block sticky top-8"
              >
                 <Card className="gradient-border border-none rounded-[50px] overflow-hidden flex flex-col noise min-h-[850px] shadow-[0_80px_160px_-40px_rgba(0,0,0,0.6)] backdrop-blur-3xl ring-1 ring-white/10">
                    {/* Panel Header */}
                    <div className="h-24 border-b border-white/5 px-10 flex items-center justify-between bg-white/[0.02]">
                       <div className="flex items-center gap-5">
                          <button 
                            onClick={() => setSelectedPrompt(null)}
                            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white transition-all hover:scale-110 shadow-lg active:scale-95"
                          >
                             <X size={20} />
                          </button>
                          <div>
                             <h3 className="font-bold text-xl tracking-tight leading-none mb-2">{selectedPrompt.title}</h3>
                             <div className="flex items-center gap-3">
                                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">v{selectedPrompt.version}</span>
                                <div className="w-1 h-1 rounded-full bg-zinc-800" />
                                <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em]">{selectedPrompt.category} Asset</span>
                             </div>
                          </div>
                       </div>
                       <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-2xl text-zinc-500 hover:text-white hover:bg-white/5 group">
                             <MoreVertical size={20} />
                          </Button>
                       </div>
                    </div>

                    <div className="p-12 flex-1 space-y-12 overflow-y-auto no-scrollbar">
                       {/* Content Preview with Design */}
                       <div className="space-y-6">
                          <div className="flex items-center justify-between pr-4">
                             <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-600 flex items-center gap-2.5">
                                <Terminal size={14} className="text-primary/60" />
                                Engineered Specification
                             </label>
                             <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-500 uppercase tracking-widest pl-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Grounded
                             </div>
                          </div>
                          <div className="p-10 rounded-[40px] bg-zinc-950/40 border border-white/5 font-mono text-sm leading-relaxed text-zinc-400 min-h-[350px] whitespace-pre-wrap relative overflow-hidden group/content shadow-inner">
                             <div className="absolute top-6 right-6 opacity-0 group-hover/content:opacity-100 transition-all transform translate-y-1 group-hover/content:translate-y-0 duration-300">
                                <Button size="sm" variant="outline" className="h-10 rounded-xl text-[10px] gap-2 bg-zinc-900 border-white/10 hover:bg-white hover:text-black hover:border-white transition-all px-4 font-bold uppercase tracking-wider">
                                   <Edit2 size={12} />
                                   Modify Blueprint
                                </Button>
                             </div>
                             {selectedPrompt.content}
                          </div>
                       </div>

                       {/* Asset Metrics Grid */}
                       <div className="space-y-6">
                          <div className="flex items-center justify-between">
                             <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-600">Blueprint Intelligence</h4>
                             <div className="w-24 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                             <MetricsCard icon={Activity} label="Executions" value={selectedPrompt.usageCount.toString()} trend="+12%" />
                             <MetricsCard icon={Zap} label="Avg. Tokens" value={selectedPrompt.avgTokens} />
                             <MetricsCard icon={Shield} label="Stability" value="99.2%" />
                             <MetricsCard icon={Clock} label="Updated" value={selectedPrompt.lastUpdated} />
                          </div>
                       </div>

                       {/* Tags and Cloud Section */}
                       <div className="space-y-5">
                          <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-600">Neural Tags</h4>
                          <div className="flex flex-wrap gap-2.5">
                             {selectedPrompt.tags.map(tag => (
                               <span key={tag} className="px-4 py-2 rounded-xl bg-primary/5 border border-primary/10 text-xs font-bold text-zinc-400 hover:text-primary hover:border-primary/40 transition-all cursor-pointer">
                                  {tag}
                               </span>
                             ))}
                             <button className="w-9 h-9 flex items-center justify-center rounded-xl border-2 border-dashed border-white/5 text-zinc-700 hover:text-zinc-400 hover:border-zinc-400 transition-all">
                                <Plus size={16} />
                             </button>
                          </div>
                       </div>
                    </div>

                    {/* Panel Actions */}
                    <div className="p-10 border-t border-white/5 bg-[#09090b]/40 backdrop-blur-md flex items-center gap-5">
                       <Link href="/dashboard/builder" className="flex-1">
                         <Button className="w-full rounded-[24px] h-16 font-extrabold text-[11px] uppercase tracking-[0.4em] gap-3 shadow-[0_25px_50px_-12px_rgba(139,92,246,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                            <Zap size={20} fill="currentColor" />
                            Initialize in Engine
                         </Button>
                       </Link>
                       <Button 
                         variant="outline" 
                         className={cn(
                           "w-16 h-16 rounded-[24px] p-0 border-white/10 hover:bg-white/5 transition-all group",
                           selectedPrompt.isFavorite && "bg-yellow-500/5 border-yellow-500/20"
                         )}
                       >
                          <Star size={24} className={cn("transition-all group-hover:scale-110", selectedPrompt.isFavorite ? "fill-yellow-500 text-yellow-500" : "text-zinc-600 group-hover:text-yellow-500/50")} />
                       </Button>
                    </div>
                 </Card>
              </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}

// --- Sub-components ---

function MetricsCard({ icon: Icon, label, value, trend }: { icon: any, label: string, value: string, trend?: string }) {
  return (
    <div className="p-6 rounded-[32px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all group relative overflow-hidden">
       <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity">
          <Icon size={40} className="text-zinc-800" />
       </div>
       <div className="relative z-10 space-y-2">
          <p className="text-[9px] text-zinc-600 font-extrabold uppercase tracking-[0.2em]">{label}</p>
          <div className="flex items-end gap-2">
             <h5 className="text-2xl font-bold tracking-tight text-zinc-200 group-hover:text-primary transition-colors">{value}</h5>
             {trend && <span className="text-[9px] font-bold text-emerald-500 mb-1.5">{trend}</span>}
          </div>
       </div>
    </div>
  );
}

function PromptCard({ prompt, isSelected, onSelect, onCopy, isCopied }: { 
  prompt: PromptAsset; 
  isSelected: boolean; 
  onSelect: () => void;
  onCopy: () => void;
  isCopied: boolean;
}) {
  const categoryIcons = {
    Frontend: Layout,
    Backend: Cpu,
    Database: Database,
    System: Shield,
    DevOps: Terminal,
    Testing: Check
  };

  const Icon = categoryIcons[prompt.category] || Terminal;

  return (
    <motion.div
      layout
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={onSelect}
      className={cn(
        "group glass-card p-8 cursor-pointer relative overflow-hidden transition-all duration-500 ease-out",
        isSelected && "bg-primary/[0.03] border-primary/40 shadow-[0_40px_80px_-20px_rgba(139,92,246,0.3)] ring-1 ring-primary/20",
        !isSelected && "hover:border-white/20 hover:shadow-2xl hover:bg-white/[0.02]"
      )}
    >
      {/* Decorative Gradient Flare */}
      <div className={cn(
        "absolute -bottom-24 -right-24 w-48 h-48 blur-[80px] opacity-0 transition-opacity duration-1000",
        isSelected ? "opacity-20 bg-primary" : "group-hover:opacity-10 bg-white"
      )} />

      <div className="flex items-start justify-between mb-8 relative z-10">
        <div className={cn(
          "w-16 h-16 rounded-[24px] flex items-center justify-center transition-all duration-500 border relative shadow-2xl",
          isSelected 
            ? "bg-primary text-white border-primary/20 scale-110 shadow-primary/30" 
            : "bg-zinc-900 text-zinc-600 border-white/5 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 group-hover:scale-105"
        )}>
          <Icon size={28} strokeWidth={1.5} />
          {isSelected && (
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-[3px] border-[#020202] z-20" />
          )}
        </div>
        
        <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
           <Button 
             variant="ghost" 
             size="icon" 
             onClick={(e) => { e.stopPropagation(); onCopy(); }}
             className="h-10 w-10 rounded-xl hover:bg-white/10 hover:text-white backdrop-blur-sm"
           >
              {isCopied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
           </Button>
           <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-white/10 hover:text-white backdrop-blur-sm">
              <Star size={18} className={prompt.isFavorite ? "fill-yellow-500 text-yellow-500" : ""} />
           </Button>
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        <div>
           <div className="flex items-center gap-3 mb-2.5">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-zinc-600 leading-none">{prompt.category}</span>
              <div className="w-1 h-1 rounded-full bg-zinc-800" />
              <span className="text-[9px] font-bold text-zinc-700 uppercase tracking-widest">{prompt.version}</span>
           </div>
           <h4 className={cn(
             "text-2xl font-bold transition-all line-clamp-1 tracking-tight",
             isSelected ? "text-white text-glow" : "text-zinc-200 group-hover:text-white"
           )}>{prompt.title}</h4>
           <p className="text-zinc-500 text-sm mt-3 line-clamp-2 leading-relaxed h-[42px] font-medium group-hover:text-zinc-400 transition-colors">{prompt.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
           {prompt.tags.map(tag => (
             <span key={tag} className="text-[10px] font-bold text-zinc-600 bg-white/[0.04] border border-white/5 px-4 py-1.5 rounded-xl group-hover:border-primary/10 group-hover:text-zinc-400 transition-all">
               {tag}
             </span>
           ))}
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-white/5 mt-4">
           <div className="flex items-center gap-4 text-zinc-600">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                 <Clock size={14} className="text-zinc-700" />
                 {prompt.lastUpdated}
              </div>
              <div className="w-1 h-1 rounded-full bg-zinc-800" />
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                 <MousePointer2 size={12} className="text-zinc-700" />
                 {prompt.usageCount}
              </div>
           </div>
           <div className={cn(
             "transition-all duration-300",
             isSelected ? "text-primary translate-x-1" : "text-zinc-800 group-hover:text-primary group-hover:translate-x-1"
           )}>
              <ChevronRight size={22} />
           </div>
        </div>
      </div>

      {/* Interactive Selection Ring */}
      <AnimatePresence>
         {isSelected && (
           <motion.div 
             layoutId="card-selection-ring"
             className="absolute inset-0 border-[3px] border-primary rounded-[24px] pointer-events-none z-20"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
           />
         )}
      </AnimatePresence>
    </motion.div>
  );
}
