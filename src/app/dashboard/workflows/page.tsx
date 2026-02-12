"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Workflow, 
  ChevronRight, 
  Trash2, 
  Play, 
  Edit2, 
  Clock, 
  Layers, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  PlusCircle, 
  Check, 
  Copy, 
  Settings, 
  Save, 
  Target, 
  ArrowRight,
  Terminal,
  Activity,
  Zap,
  Box,
  Layout,
  Cpu,
  Database,
  Shield,
  Search,
  X,
  MoreVertical,
  Maximize2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// --- Types ---

interface WorkflowStep {
  id: string;
  title: string;
  source: "Library" | "Custom";
  promptContent: string;
  lastOutput?: string;
  isExecuting: boolean;
  status: "idle" | "running" | "completed" | "error";
}

interface WorkflowPipeline {
  id: string;
  title: string;
  description: string;
  steps: WorkflowStep[];
  updatedAt: string;
  execCount: number;
}

// --- Mock Data ---

const MOCK_WORKFLOWS: WorkflowPipeline[] = [
  {
    id: "wf-1",
    title: "SaaS Launch Orchestrator",
    description: "End-to-end pipeline from idea validation to technical architecture and marketing.",
    updatedAt: "3h ago",
    execCount: 42,
    steps: [
      { id: "s1", title: "Idea Validation", source: "Library", promptContent: "Validate the SaaS idea for scalability...", status: "completed", isExecuting: false },
      { id: "s2", title: "Technical Stack Research", source: "Custom", promptContent: "Research the best tech stack for a Next.js real-time app...", status: "idle", isExecuting: false },
      { id: "s3", title: "Marketing Strategy", source: "Library", promptContent: "Generate a 30-day GTM plan...", status: "idle", isExecuting: false }
    ]
  },
  {
    id: "wf-2",
    title: "Backend Refactor Sequence",
    description: "Identify slow SQL queries and generate optimized Prisma schemas.",
    updatedAt: "1d ago",
    execCount: 12,
    steps: [
      { id: "s1", title: "Query Audit", source: "Custom", promptContent: "Audit existing PostgreSQL logs...", status: "completed", isExecuting: false },
      { id: "s2", title: "Optimizer Synthesis", source: "Library", promptContent: "Refactor slow queries into optimized indices...", status: "completed", isExecuting: false }
    ]
  }
];

// --- Main Page Component ---

export default function WorkflowsPage() {
  const [isCreating, setIsCreating] = useState(false);
  const [selectedWorkflow, setSelectedWorkflow] = useState<WorkflowPipeline | null>(null);
  const [workflows, setWorkflows] = useState<WorkflowPipeline[]>(MOCK_WORKFLOWS);

  const activeWorkflow = selectedWorkflow || (isCreating ? {
    id: "new",
    title: "Untitled Pipeline",
    description: "Enter a brief description of this orchestration sequence.",
    steps: [],
    updatedAt: "Just now",
    execCount: 0
  } : null);

  const handleCreateNew = () => {
    setIsCreating(true);
    setSelectedWorkflow(null);
  };

  const handleBackToList = () => {
    setIsCreating(false);
    setSelectedWorkflow(null);
  };

  return (
    <div className="max-w-[1600px] mx-auto space-y-12 pb-24 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[0] right-[-200px] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <AnimatePresence mode="wait">
        {!activeWorkflow ? (
          <motion.div 
            key="list-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-12"
          >
            {/* 1. List Header */}
            <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-inner">
                       <Workflow size={18} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Execution Hub</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gradient leading-tight">
                  Workflows
                </h1>
                <p className="text-zinc-500 text-xl max-w-2xl font-medium">Build multi-step AI processes and structured execution pipelines.</p>
              </div>

              <Button 
                onClick={handleCreateNew}
                className="rounded-[20px] h-16 px-10 gap-3 shadow-2xl shadow-emerald-500/20 text-sm font-extrabold uppercase tracking-widest group bg-emerald-600 hover:bg-emerald-500 text-white border-none"
              >
                 <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                 Create New Workflow
              </Button>
            </section>

            {/* 2. Search & Controls */}
            <section className="p-3 glass-card rounded-[32px] flex items-center gap-3 bg-white/[0.01]">
               <div className="flex-1 relative p-1">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 font-bold" />
                  <input 
                    type="text" 
                    placeholder="Search pipelines by name, step, or description..." 
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-14 pr-4 text-sm focus:ring-1 focus:ring-emerald-500/40 focus:outline-none placeholder:text-zinc-700 transition-all font-medium text-zinc-300"
                  />
               </div>
               <div className="flex items-center gap-2 px-2">
                  <Button variant="outline" className="h-12 w-12 rounded-2xl border-white/5 bg-white/5 p-0">
                    <Filter size={18} className="text-zinc-500" />
                  </Button>
                  <Button variant="outline" className="h-12 w-12 rounded-2xl border-white/5 bg-white/5 p-0">
                    <Grid size={18} className="text-emerald-500" />
                  </Button>
               </div>
            </section>

            {/* 3. Workflow Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
               {workflows.map((wf, i) => (
                 <WorkflowCard key={wf.id} workflow={wf} onOpen={() => setSelectedWorkflow(wf)} index={i} />
               ))}
               
               {/* Create New Placeholder Card */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.4 }}
                 onClick={handleCreateNew}
                 className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-white/5 rounded-[40px] hover:border-emerald-500/20 hover:bg-emerald-500/[0.02] cursor-pointer transition-all group min-h-[300px]"
               >
                  <div className="w-16 h-16 rounded-full bg-white/[0.02] group-hover:bg-emerald-500/10 flex items-center justify-center text-zinc-700 group-hover:text-emerald-500 transition-all mb-4">
                     <Plus size={32} />
                  </div>
                  <p className="text-zinc-600 font-bold uppercase tracking-widest text-xs group-hover:text-emerald-500 transition-colors">Initiate New Sequence</p>
               </motion.div>
            </section>
          </motion.div>
        ) : (
          <motion.div 
            key="builder-view"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-12"
          >
            {/* Builder Header */}
            <section className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-6">
                <button 
                  onClick={handleBackToList}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white transition-all shadow-lg"
                >
                   <ChevronRight size={24} className="rotate-180" />
                </button>
                <div>
                   <input 
                     defaultValue={activeWorkflow.title}
                     className="text-4xl md:text-5xl font-bold tracking-tight bg-transparent border-none focus:outline-none focus:ring-0 p-0 text-white placeholder:text-zinc-800"
                     placeholder="Workflow Title..."
                   />
                   <p className="text-zinc-500 text-sm mt-1 uppercase tracking-[0.2em] font-bold">Orchestration Blueprint</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                 <Button variant="ghost" className="rounded-xl px-6 h-12 gap-2 text-zinc-500 hover:text-white hover:bg-white/5">
                    <Save size={18} />
                    Save Draft
                 </Button>
                 <Button className="rounded-xl px-8 h-12 gap-2 shadow-2xl shadow-emerald-500/20 bg-emerald-600 hover:bg-emerald-500">
                    <Play size={18} fill="currentColor" />
                    Run Sequence
                 </Button>
              </div>
            </section>

            {/* Workflow Canvas */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
               {/* Steps Builder */}
               <div className="xl:col-span-8 space-y-10 relative">
                  {/* Vertical Connector Line */}
                  <div className="absolute left-[39px] top-10 bottom-10 w-0.5 border-l-2 border-dashed border-white/5 -z-10" />

                  <AnimatePresence mode="popLayout">
                     {activeWorkflow.steps.map((step, idx) => (
                       <StepCard key={step.id} step={step} index={idx} isLast={idx === activeWorkflow.steps.length - 1} />
                     ))}
                  </AnimatePresence>

                  <div className="pl-[20px]">
                     <Button 
                       variant="outline" 
                       className="w-full h-24 rounded-[32px] border-dashed border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-emerald-500/20 flex flex-col gap-2 group transition-all"
                     >
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-600 group-hover:text-emerald-500 group-hover:bg-emerald-500/10 transition-all">
                           <Plus size={20} />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-zinc-700 group-hover:text-emerald-500 transition-colors">Append Execution Step</span>
                     </Button>
                  </div>
               </div>

               {/* Right Side Info/Glossary */}
               <div className="xl:col-span-4 sticky top-8 space-y-8">
                  <Card className="p-8 rounded-[40px] bg-[#09090b] border-white/5 relative overflow-hidden noise">
                     <div className="absolute top-0 right-0 p-8 opacity-10 -rotate-12 translate-x-8 -translate-y-8">
                        <Zap size={100} />
                     </div>
                     <div className="relative z-10 space-y-6">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                           <Activity size={24} />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold mb-2">Sequence Intelligence</h4>
                           <p className="text-zinc-500 text-sm leading-relaxed">
                             This pipeline is configured for sequential dependency. Output from step N can be referenced in step N+1 using higher-order grounding.
                           </p>
                        </div>
                        <div className="pt-4 grid grid-cols-2 gap-4">
                           <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                              <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Total Steps</p>
                              <p className="text-2xl font-bold">{activeWorkflow.steps.length}</p>
                           </div>
                           <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                              <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Complexity</p>
                              <p className="text-2xl font-bold text-emerald-500">9.4</p>
                           </div>
                        </div>
                     </div>
                  </Card>

                  {/* Quick Tips */}
                  <div className="p-8 rounded-[32px] bg-primary/5 border border-primary/10 space-y-4">
                     <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Execution Tip</p>
                     <p className="text-xs text-zinc-400 leading-relaxed">
                        Use the "Library" source to keep your core business logic centralized. Changes in the library will automatically propagate to all referencing workflows.
                     </p>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Sub-components ---

function WorkflowCard({ workflow, onOpen, index }: { workflow: WorkflowPipeline, onOpen: () => void, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      whileHover={{ y: -8 }}
    >
      <Card 
        className="group glass-card p-8 cursor-pointer relative overflow-hidden transition-all duration-500 ease-out h-full flex flex-col"
        onClick={onOpen}
      >
        <div className="flex items-start justify-between mb-8">
           <div className="w-14 h-14 rounded-[24px] bg-white/[0.03] border border-white/5 flex items-center justify-center text-zinc-600 group-hover:bg-emerald-500/10 group-hover:text-emerald-500 group-hover:border-emerald-500/20 transition-all duration-500 shadow-inner">
              <Workflow size={24} />
           </div>
           <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
             <Button variant="ghost" size="icon" className="h-10 w-10 text-zinc-600 hover:text-white hover:bg-white/5 rounded-xl">
                <Edit2 size={16} />
             </Button>
             <Button variant="ghost" size="icon" className="h-10 w-10 text-zinc-600 hover:text-red-500 hover:bg-red-500/5 rounded-xl">
                <Trash2 size={16} />
             </Button>
           </div>
        </div>

        <div className="space-y-4 flex-1">
           <div>
              <h4 className="text-2xl font-bold mb-2 transition-colors group-hover:text-emerald-500 tracking-tight">{workflow.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium line-clamp-2">{workflow.description}</p>
           </div>

           <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-[10px] font-bold text-zinc-500 group-hover:border-emerald-500/10 group-hover:text-emerald-500 transition-all">
                {workflow.steps.length} Linked Steps
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-[10px] font-bold text-zinc-500">
                {workflow.execCount} Executions
              </span>
           </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-white/5 mt-8">
           <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
              <Clock size={14} />
              Last Run {workflow.updatedAt}
           </div>
           <Button variant="ghost" className="p-0 text-zinc-800 group-hover:text-emerald-500 transition-colors">
              <ArrowRight size={24} />
           </Button>
        </div>

        {/* Dynamic Glow Flare */}
        <div className="absolute -bottom-24 -right-24 w-48 h-48 blur-[80px] bg-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-1000" />
      </Card>
    </motion.div>
  );
}

function StepCard({ step, index, isLast }: { step: WorkflowStep, index: number, isLast: boolean }) {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * index }}
      className="relative flex gap-10"
    >
      {/* Number/Step Indicator */}
      <div className="relative flex flex-col items-center">
         <div className={cn(
           "w-20 h-20 rounded-[28px] border-2 flex items-center justify-center text-xl font-bold transition-all duration-500 shadow-2xl relative z-10",
           step.status === "completed" 
            ? "bg-emerald-600 border-emerald-500 text-white" 
            : "bg-zinc-950 border-white/5 text-zinc-700"
         )}>
            {step.status === "completed" ? <Check size={32} /> : index + 1}
            
            {/* Pulsing Aura if idle */}
            {step.status === "idle" && (
              <div className="absolute inset-0 bg-white/5 rounded-[28px] animate-pulse -z-10" />
            )}
         </div>
      </div>

      {/* Main Content */}
      <Card className={cn(
        "flex-1 p-0 rounded-[40px] border-white/5 bg-[#09090b]/80 group/step relative overflow-hidden backdrop-blur-xl shadow-2xl transition-all",
        isExpanded ? "ring-1 ring-white/10" : "hover:bg-white/[0.02] cursor-pointer"
      )}>
         {/* Toggle Overlay */}
         {!isExpanded && (
           <div 
             className="absolute inset-0 z-10" 
             onClick={() => setIsExpanded(true)}
           />
         )}

         <div className="p-10 space-y-8">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 group-hover/step:text-primary transition-colors">
                     <Terminal size={20} />
                  </div>
                  <div>
                     <h4 className="font-bold text-xl tracking-tight">{step.title}</h4>
                     <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold mt-1">Source: {step.source}</p>
                  </div>
               </div>
               <div className="flex items-center gap-2 relative z-20">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
                    className="h-10 w-10 text-zinc-600 rounded-xl"
                  >
                     {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </Button>
               </div>
            </div>

            <AnimatePresence>
               {isExpanded && (
                 <motion.div 
                   initial={{ height: 0, opacity: 0 }}
                   animate={{ height: "auto", opacity: 1 }}
                   exit={{ height: 0, opacity: 0 }}
                   className="overflow-hidden space-y-8"
                 >
                    <div className="space-y-4">
                       <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.25em] pl-1">Neural Command</label>
                       <div className="p-8 rounded-[32px] bg-zinc-950/50 border border-white/5 font-mono text-sm leading-relaxed text-zinc-400 min-h-[150px] relative group/textarea">
                          <textarea 
                            defaultValue={step.promptContent}
                            className="w-full bg-transparent border-none focus:outline-none resize-none h-32"
                          />
                          <div className="absolute top-4 right-4 opacity-0 group-hover/textarea:opacity-100 transition-opacity">
                             <Button variant="outline" size="sm" className="h-8 rounded-lg text-[10px] border-white/5 bg-zinc-900">
                                <Maximize2 size={12} />
                                Full View
                             </Button>
                          </div>
                       </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                       <Button className="flex-1 rounded-2xl h-14 font-extrabold uppercase tracking-widest text-xs gap-3 shadow-xl shadow-emerald-500/10 bg-emerald-600 hover:bg-emerald-500">
                          <Play size={16} fill="currentColor" />
                          Execute Blueprint
                       </Button>
                       <Button variant="outline" className="h-14 px-6 rounded-2xl border-white/5 text-zinc-500">
                          <Trash2 size={20} />
                       </Button>
                    </div>

                    {/* Output Area if completed or running */}
                    {step.status === "completed" && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4 pt-4"
                      >
                         <div className="flex items-center justify-between">
                            <label className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.25em] flex items-center gap-2">
                               <Check size={12} />
                               Last Output Generated
                            </label>
                            <Button variant="ghost" size="sm" className="h-8 text-zinc-500 gap-2">
                               <Copy size={12} />
                               Copy Sequence
                            </Button>
                         </div>
                         <div className="p-8 rounded-[32px] bg-emerald-500/[0.02] border border-emerald-500/10 text-zinc-400 text-sm italic leading-relaxed">
                            "The technical architecture has been successfully synthesized focusing on high-concurrency Node.js handlers and Redis caching..."
                         </div>
                      </motion.div>
                    )}
                 </motion.div>
               )}
            </AnimatePresence>
         </div>
         
         {/* Noise overlay */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.01] pointer-events-none" />
      </Card>
    </motion.div>
  );
}
