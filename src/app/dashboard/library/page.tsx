"use client";

import React, { useState, useMemo } from "react";
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
  ChevronDown
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
    isFavorite: true
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
    isFavorite: false
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
    isFavorite: true
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
    isFavorite: false
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
    isFavorite: false
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
    isFavorite: false
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
    <div className="max-w-[1600px] mx-auto space-y-12 pb-24 relative">
      {/* 1. Header Section */}
      <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pt-4">
        <div>
           <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                 <Layers size={18} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Asset Management</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">Prompt Library</h1>
           <p className="text-zinc-500 text-lg mt-2 font-medium">Your personal high-fidelity repository of engineered blueprints.</p>
        </div>

        <Link href="/dashboard/builder">
          <Button className="rounded-2xl h-14 px-8 gap-3 shadow-xl shadow-primary/20 text-lg font-bold group">
             <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
             Create New Blueprint
          </Button>
        </Link>
      </section>

      {/* 2. Control Bar (Filters & Search) */}
      <section className="p-2 glass-card rounded-[32px] flex flex-col md:flex-row items-center gap-2">
         <div className="flex-1 w-full relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search by title, description, or content..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-1 focus:ring-primary/20 focus:outline-none placeholder:text-zinc-700 transition-all"
            />
         </div>
         <div className="flex items-center gap-2 p-1 bg-white/[0.02] rounded-2xl border border-white/5 w-full md:w-auto">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar scroll-smooth px-2">
               {categories.map(cat => (
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={cn(
                     "px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap",
                     activeCategory === cat 
                      ? "bg-white/10 text-white shadow-lg" 
                      : "text-zinc-600 hover:text-zinc-300 hover:bg-white/[0.02]"
                   )}
                 >
                   {cat}
                 </button>
               ))}
            </div>
            <div className="w-[1px] h-8 bg-white/10 mx-2 hidden md:block" />
            <Button variant="ghost" size="icon" className="h-10 w-10 text-zinc-600 shrink-0">
               <ChevronDown size={18} />
            </Button>
         </div>
      </section>

      {/* 3. Grid View vs Detail Panel */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
         <div className={cn(
           "transition-all duration-500",
           selectedPrompt ? "xl:col-span-7" : "xl:col-span-12"
         )}>
            <AnimatePresence mode="popLayout">
               {filteredPrompts.length === 0 ? (
                 <motion.div 
                   key="empty"
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   className="min-h-[400px] flex flex-col items-center justify-center p-12 text-center glass-card border-dashed border-white/10"
                 >
                    <div className="w-20 h-20 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-700 mb-6">
                       <Command size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 tracking-tight">No assets found</h3>
                    <p className="text-zinc-500 text-sm max-w-[280px]">Adjust your filters or query to find the engineered prompt you're looking for.</p>
                    <Button 
                      variant="outline" 
                      onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
                      className="mt-8 rounded-xl"
                    >
                       Reset All Filters
                    </Button>
                 </motion.div>
               ) : (
                 <motion.div 
                   layout
                   className={cn(
                     "grid gap-6",
                     selectedPrompt ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
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

         {/* 4. Side Detail Panel */}
         <AnimatePresence>
            {selectedPrompt && (
              <motion.div 
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40, scale: 0.95 }}
                className="xl:col-span-5 sticky top-8"
              >
                 <Card className="gradient-border border-none rounded-[40px] overflow-hidden flex flex-col noise min-h-[700px] shadow-2xl backdrop-blur-xl">
                    <div className="h-20 border-b border-white/5 px-8 flex items-center justify-between bg-white/[0.02]">
                       <div className="flex items-center gap-4">
                          <button 
                            onClick={() => setSelectedPrompt(null)}
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-all shadow-sm"
                          >
                             <X size={18} />
                          </button>
                          <div>
                             <h3 className="font-bold text-lg leading-none">{selectedPrompt.title}</h3>
                             <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1.5">{selectedPrompt.category} Blueprint</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-10 w-10 text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl">
                             <Copy size={18} />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-10 w-10 text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl">
                             <MoreVertical size={18} />
                          </Button>
                       </div>
                    </div>

                    <div className="p-10 flex-1 space-y-10">
                       <div className="space-y-4">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
                             <Terminal size={12} className="text-primary/50" />
                             Blueprint Specification
                          </label>
                          <div className="p-8 rounded-[32px] bg-zinc-950/50 border border-white/5 font-mono text-sm leading-relaxed text-zinc-400 min-h-[300px] whitespace-pre-wrap relative overflow-hidden group">
                             <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button size="sm" variant="outline" className="h-8 rounded-lg text-[10px] gap-1 bg-zinc-900 border-white/10">
                                   <Edit2 size={10} />
                                   Quick Edit
                                </Button>
                             </div>
                             {selectedPrompt.content}
                          </div>
                       </div>

                       <div className="space-y-6">
                          <div className="flex items-center justify-between">
                             <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Asset Intelligence</h4>
                             <span className="text-[10px] text-primary flex items-center gap-1">
                                <Sparkles size={10} />
                                Verified Engineering
                             </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                             <div className="p-5 rounded-3xl bg-white/[0.02] border border-white/5 space-y-1">
                                <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-[0.2em]">Usage</p>
                                <p className="text-xl font-bold">{selectedPrompt.usageCount} times</p>
                             </div>
                             <div className="p-5 rounded-3xl bg-white/[0.02] border border-white/5 space-y-1">
                                <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-[0.2em]">Version</p>
                                <p className="text-xl font-bold">2.4.1</p>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="p-8 border-t border-white/5 bg-white/[0.01] flex items-center gap-4">
                       <Link href="/dashboard/builder" className="flex-1">
                         <Button className="w-full rounded-2xl h-14 font-extrabold text-xs uppercase tracking-[0.3em] gap-3 shadow-2xl shadow-primary/20">
                            <ArrowUpRight size={18} />
                            Deploy in Builder
                         </Button>
                       </Link>
                       <Button variant="outline" className="rounded-2xl h-14 px-6 border-zinc-800 hover:bg-zinc-900 hover:text-white text-zinc-500">
                          <Star size={20} className={selectedPrompt.isFavorite ? "fill-yellow-500 text-yellow-500" : ""} />
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
      whileHover={{ y: -5 }}
      onClick={onSelect}
      className={cn(
        "group glass-card p-6 cursor-pointer relative overflow-hidden transition-all duration-300",
        isSelected && "border-primary shadow-[0_20px_40px_-15px_rgba(139,92,246,0.3)] bg-primary/[0.02]",
        !isSelected && "hover:border-white/20"
      )}
    >
      <div className="flex items-start justify-between mb-6">
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500",
          isSelected ? "bg-primary text-white scale-110 shadow-lg" : "bg-white/[0.03] text-zinc-600 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 border border-white/5 shadow-inner"
        )}>
          <Icon size={22} />
        </div>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
           <Button 
             variant="ghost" 
             size="icon" 
             onClick={(e) => { e.stopPropagation(); onCopy(); }}
             className="h-8 w-8 rounded-lg hover:bg-white/10 hover:text-white"
           >
              {isCopied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
           </Button>
           <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-white/10 hover:text-white">
              <Star size={14} className={prompt.isFavorite ? "fill-yellow-500 text-yellow-500" : ""} />
           </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
           <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-zinc-600 leading-none">{prompt.category}</span>
              {prompt.isFavorite && <div className="w-1 h-1 rounded-full bg-yellow-500" />}
           </div>
           <h4 className={cn(
             "text-lg font-bold transition-colors line-clamp-1",
             isSelected ? "text-white" : "text-zinc-200 group-hover:text-primary"
           )}>{prompt.title}</h4>
           <p className="text-zinc-500 text-xs mt-2 line-clamp-2 leading-relaxed h-[36px] font-medium">{prompt.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
           {prompt.tags.map(tag => (
             <span key={tag} className="text-[9px] font-bold text-zinc-600 bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded-full group-hover:border-primary/10 group-hover:text-zinc-400 transition-colors">
               {tag}
             </span>
           ))}
        </div>

        <div className="flex items-center justify-between pt-5 border-t border-white/5">
           <div className="flex items-center gap-3 text-zinc-600">
              <div className="flex items-center gap-1 text-[10px] font-mono">
                 <Clock size={12} />
                 {prompt.lastUpdated}
              </div>
              <div className="w-1 h-1 rounded-full bg-zinc-800" />
              <div className="text-[10px] font-mono">
                 {prompt.usageCount} executions
              </div>
           </div>
           <div className="text-zinc-700 group-hover:text-primary transition-colors">
              <ChevronRight size={16} />
           </div>
        </div>
      </div>

      {/* Interactive Selection Ring */}
      <AnimatePresence>
         {isSelected && (
           <motion.div 
             layoutId="card-selection"
             className="absolute inset-0 border-2 border-primary rounded-[24px] pointer-events-none"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
           />
         )}
      </AnimatePresence>
    </motion.div>
  );
}
