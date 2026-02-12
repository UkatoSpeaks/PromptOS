"use client";

import React, { useState, useEffect } from "react";
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
  X
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
    // In a real app, this would fetch from an API
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
    <div className="max-w-6xl mx-auto pb-20">
      {/* 1. Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-gradient">Dynamic Prompt Builder</h1>
          <p className="text-zinc-500 font-medium leading-relaxed">Design structured prompts for consistent, professional AI outputs.</p>
        </div>
        <Button 
          variant="outline" 
          onClick={handleReset}
          className="rounded-xl border-white/5 bg-white/5 hover:bg-white/10 gap-2 w-fit"
        >
          <RotateCcw size={16} />
          Reset Builder
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* 2. Input Section (Form) */}
        <div className="lg:col-span-7 space-y-8">
          <Card className="p-8 bg-[#09090b] border-white/5 space-y-8 noise relative overflow-hidden">
             {/* Subtle indicator */}
             <div className="absolute top-0 right-0 p-4 opacity-5">
                <Terminal size={100} />
             </div>

             <div className="grid gap-8">
                {/* Goal Field */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 block">
                    What is your goal? <span className="text-primary">*</span>
                  </label>
                  <textarea 
                    value={formData.goal}
                    onChange={(e) => setFormData({...formData, goal: e.target.value})}
                    placeholder="e.g. Debug my React code or Generate SaaS landing copy..."
                    className="w-full h-24 bg-white/5 border border-white/5 rounded-2xl p-4 text-sm focus:ring-1 focus:ring-primary focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Tone & Format Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 block">Select Tone</label>
                      <select 
                        value={formData.tone}
                        onChange={(e) => setFormData({...formData, tone: e.target.value as Tone})}
                        className="w-full bg-white/5 border border-white/5 rounded-xl p-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none appearance-none cursor-pointer"
                      >
                         {["Professional", "Technical", "Casual", "Persuasive", "Minimal", "Step-by-step"].map(t => (
                           <option key={t} value={t} className="bg-zinc-900">{t}</option>
                         ))}
                      </select>
                   </div>
                   <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 block">Output Format</label>
                      <select 
                        value={formData.outputFormat}
                        onChange={(e) => setFormData({...formData, outputFormat: e.target.value as OutputFormat})}
                        className="w-full bg-white/5 border border-white/5 rounded-xl p-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none appearance-none cursor-pointer"
                      >
                         {["Bullet Points", "Step-by-step explanation", "Code only", "Detailed architecture", "Markdown"].map(f => (
                           <option key={f} value={f} className="bg-zinc-900">{f}</option>
                         ))}
                      </select>
                   </div>
                </div>

                {/* Tech Stack Field */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 block">Tech Stack / Tools</label>
                  <input 
                    type="text"
                    value={formData.techStack}
                    onChange={(e) => setFormData({...formData, techStack: e.target.value})}
                    placeholder="e.g. Next.js, Firebase, TypeScript..."
                    className="w-full bg-white/5 border border-white/5 rounded-xl p-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
                  />
                </div>

                {/* Context Field */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 block">Detailed Context</label>
                  <textarea 
                    value={formData.context}
                    onChange={(e) => setFormData({...formData, context: e.target.value})}
                    placeholder="Add specific details about your situation..."
                    className="w-full h-32 bg-white/5 border border-white/5 rounded-2xl p-4 text-sm focus:ring-1 focus:ring-primary focus:outline-none transition-all resize-none"
                  />
                  <p className="text-[10px] text-zinc-600 font-medium">✨ Identity grounding is automatically being injected into the prompt.</p>
                </div>
             </div>

             {/* Generate Button */}
             <div className="pt-4">
                <Button 
                  onClick={handleGenerate}
                  disabled={!formData.goal || isGenerating}
                  className={cn(
                    "w-full h-14 rounded-2xl text-lg font-bold gap-3 transition-all",
                    isGenerating ? "opacity-50" : "shadow-xl shadow-primary/20"
                  )}
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Engineering Prompt...
                    </>
                  ) : (
                    <>
                      <Zap size={20} fill="currentColor" />
                      Generate Structured Prompt
                    </>
                  )}
                </Button>
             </div>
          </Card>
        </div>

        {/* 4. Output Preview Section */}
        <div className="lg:col-span-5 relative">
          <AnimatePresence mode="wait">
             {!generatedPrompt && !isGenerating ? (
               <motion.div 
                 key="empty"
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 className="h-full min-h-[500px] border-2 border-dashed border-white/5 rounded-[40px] flex flex-col items-center justify-center p-12 text-center"
               >
                  <div className="w-16 h-16 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-700 mb-6">
                     <Sparkles size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Ready to Build</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Fill out the fields on the left and click generate to see your engineered prompt appear here.</p>
               </motion.div>
             ) : (
               <motion.div 
                 key="output"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="space-y-6 sticky top-8"
               >
                  <Card className="bg-[#09090b] border-white/5 rounded-[32px] overflow-hidden flex flex-col noise">
                     <div className="h-14 border-b border-white/5 px-6 flex items-center justify-between bg-white/[0.02]">
                        <div className="flex items-center gap-2">
                           <Layers size={14} className="text-primary" />
                           <span className="text-xs font-bold uppercase tracking-widest leading-none pt-0.5">Engineered Output</span>
                        </div>
                        <div className="flex gap-2">
                           <Button 
                             variant="ghost" 
                             size="icon" 
                             onClick={copyToClipboard}
                             className="h-8 w-8 rounded-lg text-zinc-500 hover:text-white"
                           >
                              {isCopied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                           </Button>
                        </div>
                     </div>
                     <div className="p-8 flex-1 font-mono text-sm leading-relaxed text-zinc-400 max-h-[600px] overflow-y-auto custom-scrollbar whitespace-pre-wrap">
                        {isGenerating ? (
                          <div className="space-y-4">
                             <div className="h-4 w-3/4 bg-white/5 rounded animate-pulse" />
                             <div className="h-4 w-1/2 bg-white/5 rounded animate-pulse" />
                             <div className="h-4 w-2/3 bg-white/5 rounded animate-pulse" />
                             <div className="h-4 w-1/3 bg-white/5 rounded animate-pulse" />
                             <div className="h-32 w-full bg-white/5 rounded animate-pulse" />
                          </div>
                        ) : (
                          generatedPrompt
                        )}
                     </div>
                     <div className="p-6 border-t border-white/5 bg-white/[0.02] flex items-center gap-4">
                        <Button 
                          onClick={() => setShowSaveModal(true)}
                          className="flex-1 rounded-xl h-12 font-bold gap-2"
                        >
                           <Save size={18} />
                           Save to Library
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={handleGenerate}
                          className="flex-1 rounded-xl h-12 border-white/5 bg-white/5"
                        >
                           <RotateCcw size={18} />
                           Regenerate
                        </Button>
                     </div>
                  </Card>

                  {/* Pro Tip Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="p-6 rounded-3xl bg-primary/5 border border-primary/10 relative overflow-hidden group"
                  >
                     <div className="flex items-start gap-4">
                        <div className="mt-1">
                           <Sparkles size={18} className="text-primary animate-pulse" />
                        </div>
                        <div className="space-y-1">
                           <p className="text-xs font-bold text-primary uppercase tracking-widest">Grounding Tip</p>
                           <p className="text-sm text-zinc-400 leading-relaxed">
                              This prompt includes your <span className="text-white font-medium">Global Identity</span>. It ensures the AI always follows your project-specific coding patterns.
                           </p>
                        </div>
                     </div>
                  </motion.div>
               </motion.div>
             )}
          </AnimatePresence>
        </div>
      </div>

      {/* 5. Save Modal (Dialog) */}
      <AnimatePresence>
        {showSaveModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setShowSaveModal(false)}
               className="absolute inset-0 bg-black/80 backdrop-blur-sm"
             />
             <motion.div 
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95, y: 20 }}
               className="relative w-full max-w-lg bg-[#09090b] border border-white/10 rounded-[32px] shadow-2xl overflow-hidden noise"
             >
                <div className="p-8 space-y-8">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                            <Save size={20} />
                         </div>
                         <h3 className="text-xl font-bold">Save to Library</h3>
                      </div>
                      <button onClick={() => setShowSaveModal(false)} className="text-zinc-500 hover:text-white transition-colors">
                         <X size={24} />
                      </button>
                   </div>

                   <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Prompt Title</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Next.js Auth Module Architect"
                          className="w-full bg-white/5 border border-white/5 rounded-xl p-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Tags (Separated by comma)</label>
                        <input 
                          type="text" 
                          placeholder="frontend, auth, architecture"
                          className="w-full bg-white/5 border border-white/5 rounded-xl p-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Description</label>
                        <textarea 
                          placeholder="What does this prompt solve?"
                          className="w-full bg-white/5 border border-white/5 rounded-xl p-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none h-20 resize-none"
                        />
                      </div>
                   </div>

                   <div className="flex gap-4 pt-4">
                      <Button variant="outline" onClick={() => setShowSaveModal(false)} className="flex-1 rounded-xl h-12 font-bold border-white/5 bg-white/5">
                        Cancel
                      </Button>
                      <Button onClick={() => {
                        setIsSaved(true);
                        setShowSaveModal(false);
                      }} className="flex-1 rounded-xl h-12 font-bold">
                        Confirm Save
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
