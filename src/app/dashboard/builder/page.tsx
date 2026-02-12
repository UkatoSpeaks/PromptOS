"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  RotateCcw, 
  Copy, 
  Save, 
  Settings, 
  Send, 
  Check, 
  ChevronDown, 
  Terminal,
  Layers,
  Sparkles,
  Search,
  History,
  Trash2,
  X,
  Target,
  MessageSquare,
  Cpu,
  Layout,
  FileCode,
  ArrowRight,
  Monitor
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// --- Types ---

type Tone = "Professional" | "Technical" | "Casual" | "Persuasive" | "Minimal" | "Step-by-step";
type OutputFormat = "Bullet Points" | "Step-by-step explanation" | "Code only" | "Detailed architecture" | "Copywriting format" | "Markdown";

interface FormData {
  goal: string;
  tone: Tone;
  techStack: string;
  context: string;
  outputFormat: OutputFormat;
}

// --- Components ---

const TypingEffect = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const index = useRef(0);

  useEffect(() => {
    setDisplayedText("");
    index.current = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index.current]);
      index.current++;
      if (index.current >= text.length) clearInterval(interval);
    }, 5);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
};

// --- Page Component ---

export default function BuilderPage() {
  const [formData, setFormData] = useState<FormData>({
    goal: "",
    tone: "Technical",
    techStack: "",
    context: "",
    outputFormat: "Markdown",
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Mock auto-fill from "profile"
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      techStack: "Next.js, TypeScript, Tailwind CSS",
      context: "I am a full-stack developer focused on clean architecture and high-performance React applications."
    }));
  }, []);

  const handleReset = () => {
    setFormData({
      goal: "",
      tone: "Technical",
      techStack: "Next.js, TypeScript, Tailwind CSS",
      context: "I am a full-stack developer focused on clean architecture and high-performance React applications.",
      outputFormat: "Markdown",
    });
    setGeneratedPrompt(null);
    setIsSaved(false);
  };

  const handleGenerate = () => {
    if (!formData.goal) return;
    
    setIsGenerating(true);
    setGeneratedPrompt(null);
    
    // Simulate AI generation
    setTimeout(() => {
      const mockPrompt = `
# System Role: Expert Software Architect
## Objective: ${formData.goal}
## Tone: ${formData.tone}
## Tech Stack: ${formData.techStack}

### Context:
${formData.context}

### Instructions:
1. Initialize the project using the specified tech stack.
2. Implement the core logic focusing on the goal provided.
3. Ensure the output follows the ${formData.outputFormat} format.
4. Adhere to "Clean Code" principles and ensure all components are documented.

---
**[PROMPT_ENGINEERING_GROUNDING]**
- Identity Buffer: developer_v3
- Memory Slot: workspace_context_a
- Output Restriction: validated_high_quality
      `.trim();
      
      setGeneratedPrompt(mockPrompt);
      setIsGenerating(false);
    }, 1500);
  };

  const copyToClipboard = () => {
    if (!generatedPrompt) return;
    navigator.clipboard.writeText(generatedPrompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="max-w-[1600px] mx-auto pb-24 relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Header with Glass Card */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Cpu size={18} />
             </div>
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Neural Orchestrator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
             <span className="text-gradient inline-block">Prompt Builder</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl font-medium">Design structured, project-grounded prompts for professional-grade AI outputs.</p>
        </div>
        
        <div className="flex items-center gap-6">
           <div className="flex -space-x-2 items-center">
              <div className="w-8 h-8 rounded-full border-2 border-[#020203] bg-zinc-800 shadow-xl" />
              <div className="w-8 h-8 rounded-full border-2 border-[#020203] bg-zinc-700 shadow-xl" />
              <div className="w-8 h-8 rounded-full border-2 border-[#020203] bg-primary/20 flex items-center justify-center text-[10px] text-primary font-bold shadow-xl relative z-10">
                GT
              </div>
           </div>
           <Button 
            variant="outline" 
            onClick={handleReset}
            className="rounded-xl border-white/5 bg-white/5 hover:bg-white/10 gap-2 h-11 px-6 backdrop-blur-sm transition-all"
          >
            <RotateCcw size={16} />
            Reset State
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
        {/* Left Section: Input Form (The 'Lab') */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="xl:col-span-7 space-y-8"
        >
          <Card className="p-10 bg-[#09090b]/80 border-white/5 rounded-[40px] shadow-2xl relative overflow-hidden backdrop-blur-xl noise">
             {/* Decorative grid pattern */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
             
             <div className="space-y-10 relative z-10">
                {/* Section header inside the card */}
                <div className="flex items-center gap-4 pb-6 border-b border-white/5">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
                      <Terminal size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg">Input Configuration</h4>
                      <p className="text-zinc-500 text-xs">Define the parameters of the prompt engine</p>
                   </div>
                </div>

                <div className="grid gap-10">
                   {/* Goal Field */}
                   <div className="space-y-4 group">
                      <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 group-focus-within:text-primary transition-colors">
                         <Target size={14} className="text-primary/50" />
                         Primary Objective
                      </label>
                      <div className="input-glow rounded-3xl p-[1px] bg-white/[0.05]">
                         <textarea 
                           value={formData.goal}
                           onChange={(e) => setFormData({...formData, goal: e.target.value})}
                           placeholder="What should the AI build or solve? (e.g. Architect a scalable auth module)"
                           className="w-full h-32 bg-zinc-950/50 rounded-[23px] p-6 text-base focus:outline-none transition-all resize-none placeholder:text-zinc-700 font-medium"
                         />
                      </div>
                   </div>

                   {/* Tone & Format Grid */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                         <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                            <MessageSquare size={14} className="text-blue-400/50" />
                            Response Persona
                         </label>
                         <div className="input-glow rounded-2xl p-[1px] bg-white/[0.05]">
                            <select 
                               value={formData.tone}
                               onChange={(e) => setFormData({...formData, tone: e.target.value as Tone})}
                               className="w-full bg-zinc-950/50 rounded-[15px] p-4 text-sm focus:outline-none appearance-none cursor-pointer text-zinc-300"
                            >
                               {["Professional", "Technical", "Casual", "Persuasive", "Minimal", "Step-by-step"].map(t => (
                                 <option key={t} value={t} className="bg-zinc-900">{t}</option>
                               ))}
                            </select>
                         </div>
                      </div>
                      <div className="space-y-4">
                         <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                            <Layout size={14} className="text-emerald-400/50" />
                            Output Structure
                         </label>
                         <div className="input-glow rounded-2xl p-[1px] bg-white/[0.05]">
                            <select 
                               value={formData.outputFormat}
                               onChange={(e) => setFormData({...formData, outputFormat: e.target.value as OutputFormat})}
                               className="w-full bg-zinc-950/50 rounded-[15px] p-4 text-sm focus:outline-none appearance-none cursor-pointer text-zinc-300"
                            >
                               {["Bullet Points", "Step-by-step explanation", "Code only", "Detailed architecture", "Markdown"].map(f => (
                                 <option key={f} value={f} className="bg-zinc-900">{f}</option>
                               ))}
                            </select>
                         </div>
                      </div>
                   </div>

                   {/* Tech Stack Field */}
                   <div className="space-y-4">
                      <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                         <FileCode size={14} className="text-amber-400/50" />
                         Technical Environment
                      </label>
                      <div className="input-glow rounded-2xl p-[1px] bg-white/[0.05]">
                         <input 
                           type="text"
                           value={formData.techStack}
                           onChange={(e) => setFormData({...formData, techStack: e.target.value})}
                           placeholder="e.g. Next.js 14, TypeScript, Prisma..."
                           className="w-full bg-zinc-950/50 rounded-[15px] p-4 text-sm focus:outline-none text-zinc-300 placeholder:text-zinc-700"
                         />
                      </div>
                   </div>

                   {/* Context Field */}
                   <div className="space-y-4">
                      <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                         <Sparkles size={14} className="text-purple-400/50" />
                         Additional Intelligence
                      </label>
                      <div className="input-glow rounded-3xl p-[1px] bg-white/[0.05]">
                         <textarea 
                           value={formData.context}
                           onChange={(e) => setFormData({...formData, context: e.target.value})}
                           placeholder="Add specific constraints, brand guidelines, or memory snippets..."
                           className="w-full h-32 bg-zinc-950/50 rounded-[23px] p-6 text-sm focus:outline-none transition-all resize-none placeholder:text-zinc-700 leading-relaxed text-zinc-400 font-medium"
                         />
                      </div>
                      <div className="flex items-center gap-2 text-[9px] font-bold text-primary uppercase tracking-widest pl-2">
                         <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                         Global Identity active: developer_v3.grounding
                      </div>
                   </div>
                </div>

                {/* Generate Button with Pulsing Glow */}
                <div className="pt-6">
                   <Button 
                     onClick={handleGenerate}
                     disabled={!formData.goal || isGenerating}
                     className={cn(
                       "w-full h-16 rounded-[24px] text-lg font-bold gap-4 transition-all duration-500",
                       isGenerating 
                        ? "opacity-50" 
                        : "bg-primary hover:bg-primary/90 text-white shadow-[0_20px_40px_-10px_rgba(139,92,246,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.4)] hover:scale-[1.01]"
                     )}
                   >
                     {isGenerating ? (
                       <div className="flex items-center gap-3">
                         <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                         <span className="tracking-widest uppercase text-xs">Processing Neurons</span>
                       </div>
                     ) : (
                       <>
                         <Zap size={22} fill="currentColor" className="animate-pulse" />
                         <span className="tracking-widest uppercase text-xs">Orchestrate Structured Prompt</span>
                       </>
                     )}
                   </Button>
                </div>
             </div>
          </Card>
        </motion.div>

        {/* Right Section: Output Preview (The 'Display') */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="xl:col-span-5 relative"
        >
          <AnimatePresence mode="wait">
             {!generatedPrompt && !isGenerating ? (
               <motion.div 
                 key="empty"
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 className="h-full min-h-[600px] border-2 border-dashed border-white/5 rounded-[48px] flex flex-col items-center justify-center p-12 text-center bg-white/[0.01] overflow-hidden group"
               >
                  <div className="relative mb-8">
                     <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full scale-150 group-hover:bg-primary/30 transition-colors" />
                     <div className="w-24 h-24 rounded-[32px] bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 relative z-10 group-hover:scale-110 group-hover:text-primary transition-all duration-500">
                        <Monitor size={48} strokeWidth={1.5} />
                     </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">Ready for Generation</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-[280px]">Fill the neural inputs on the left to synthesize your professional prompt.</p>
                  
                  <div className="mt-12 flex gap-4 opacity-20 group-hover:opacity-40 transition-opacity">
                     <div className="w-12 h-1.5 rounded-full bg-zinc-700" />
                     <div className="w-8 h-1.5 rounded-full bg-zinc-700" />
                     <div className="w-16 h-1.5 rounded-full bg-zinc-700" />
                  </div>
               </motion.div>
             ) : (
               <motion.div 
                 key="output"
                 initial={{ opacity: 0, scale: 0.98, y: 10 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 className="space-y-6 sticky top-8"
               >
                  <Card className="gradient-border border-none rounded-[40px] overflow-hidden flex flex-col noise h-full min-h-[600px] shadow-2xl">
                     <div className="h-16 border-b border-white/5 px-8 flex items-center justify-between bg-[#09090b]/40 backdrop-blur-md">
                        <div className="flex items-center gap-3">
                           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                           <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Validated Engine Output</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <Button 
                             variant="ghost" 
                             size="icon" 
                             onClick={copyToClipboard}
                             className="h-10 w-10 rounded-xl text-zinc-500 hover:text-white hover:bg-white/5 transition-all"
                           >
                              {isCopied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                           </Button>
                        </div>
                     </div>
                     
                     <div className="p-10 flex-1 font-mono text-sm leading-relaxed text-zinc-400 h-[500px] overflow-y-auto custom-scrollbar whitespace-pre-wrap bg-zinc-950/30">
                        {isGenerating ? (
                          <div className="space-y-6 pt-4">
                             <div className="h-4 w-3/4 bg-white/5 rounded-full animate-pulse" />
                             <div className="h-4 w-1/2 bg-white/5 rounded-full animate-pulse" />
                             <div className="h-4 w-2/3 bg-white/5 rounded-full animate-pulse" />
                             <div className="space-y-3 pt-4">
                               <div className="h-40 w-full bg-white/5 rounded-3xl animate-pulse" />
                             </div>
                             <div className="h-4 w-1/3 bg-white/5 rounded-full animate-pulse" />
                          </div>
                        ) : (
                          <TypingEffect text={generatedPrompt || ""} />
                        )}
                     </div>
                     
                     <div className="p-8 border-t border-white/5 bg-[#09090b]/40 flex items-center gap-4">
                        <Button 
                          onClick={() => setShowSaveModal(true)}
                          disabled={isGenerating}
                          className="flex-1 rounded-2xl h-14 font-bold gap-3 shadow-lg shadow-primary/10"
                        >
                           <Save size={20} />
                           Save to Library
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={handleGenerate}
                          disabled={isGenerating}
                          className="w-14 h-14 rounded-2xl border-white/5 bg-white/5 group"
                        >
                           <RotateCcw size={20} className="text-zinc-500 group-hover:text-white group-hover:rotate-180 transition-all duration-500" />
                        </Button>
                     </div>
                  </Card>

                  {/* Context Confidence Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="p-8 rounded-[32px] bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-6 group"
                  >
                     <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                        <Check size={28} />
                     </div>
                     <div className="space-y-1">
                        <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest leading-none">Context Solidified</p>
                        <p className="text-zinc-400 text-sm leading-relaxed font-medium">This prompt is successfully grounded in <span className="text-white">Clean Architecture</span> standards.</p>
                     </div>
                  </motion.div>
               </motion.div>
             )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 5. Save Modal (Glassmorphic Dialog) */}
      <AnimatePresence>
        {showSaveModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setShowSaveModal(false)}
               className="absolute inset-0 bg-[#020203]/80 backdrop-blur-md"
             />
             <motion.div 
               initial={{ opacity: 0, scale: 0.9, y: 30 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.9, y: 30 }}
               className="relative w-full max-w-xl bg-[#09090b] border border-white/10 rounded-[48px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden noise"
             >
                <div className="p-12 space-y-10">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-inner">
                            <Save size={28} />
                         </div>
                         <div>
                            <h3 className="text-2xl font-bold">Archive Blueprint</h3>
                            <p className="text-zinc-500 text-sm">Save your engineered prompt to the library</p>
                         </div>
                      </div>
                      <button onClick={() => setShowSaveModal(false)} className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-all">
                         <X size={20} />
                      </button>
                   </div>

                   <div className="space-y-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 pl-1">Blueprint Title</label>
                        <div className="input-glow rounded-2xl p-[1px] bg-white/[0.05]">
                           <input 
                             type="text" 
                             placeholder="e.g. Next.js Auth Module Architect"
                             className="w-full bg-zinc-950/50 rounded-[15px] p-5 text-sm focus:outline-none text-zinc-300"
                           />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                         <div className="space-y-3">
                           <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 pl-1">Category</label>
                           <div className="input-glow rounded-2xl p-[1px] bg-white/[0.05]">
                              <select className="w-full bg-zinc-950/50 rounded-[15px] p-4 text-sm focus:outline-none appearance-none cursor-pointer text-zinc-400">
                                 <option>Frontend</option>
                                 <option>Backend</option>
                                 <option>Testing</option>
                                 <option>System Design</option>
                              </select>
                           </div>
                         </div>
                         <div className="space-y-3">
                           <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 pl-1">Version</label>
                           <div className="input-glow rounded-2xl p-[1px] bg-white/[0.05]">
                              <input 
                                type="text"
                                defaultValue="v1.0.0"
                                className="w-full bg-zinc-950/50 rounded-[15px] p-4 text-sm focus:outline-none text-zinc-400 text-center"
                              />
                           </div>
                         </div>
                      </div>
                   </div>

                   <div className="flex gap-4 pt-4">
                      <Button variant="outline" onClick={() => setShowSaveModal(false)} className="flex-1 rounded-2xl h-16 font-bold border-white/5 bg-white/5 hover:bg-white/10 transition-all uppercase tracking-widest text-xs">
                        Discard
                      </Button>
                      <Button onClick={() => {
                        setIsSaved(true);
                        setShowSaveModal(false);
                      }} className="flex-2 grow-[2] rounded-2xl h-16 font-bold shadow-2xl shadow-primary/20 uppercase tracking-widest text-xs">
                        Establish Blueprint
                      </Button>
                   </div>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
