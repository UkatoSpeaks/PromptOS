"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Play, 
  Save, 
  Variable, 
  Code2, 
  Cpu, 
  Sparkles,
  RefreshCw,
  Plus,
  Trash2,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BuilderPage() {
  const [prompt, setPrompt] = useState("");
  const [variables, setVariables] = useState([
    { name: "tech_stack", value: "Next.js, Tailwind, TypeScript" },
  ]);

  const addVariable = () => {
    setVariables([...variables, { name: "", value: "" }]);
  };

  const removeVariable = (index: number) => {
    setVariables(variables.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dynamic Prompt Builder</h1>
          <p className="text-zinc-500 text-sm mt-1">Design and test complex prompt templates with live variables.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-white/5 bg-white/5 hover:bg-white/10">
            <Save size={16} />
            Save Draft
          </Button>
          <Button className="gap-2 bg-primary text-white hover:bg-primary/90">
            <Play size={16} />
            Run Execution
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Inputs & Config */}
        <div className="lg:col-span-1 space-y-6">
           <Card>
              <CardContent className="p-4 space-y-4">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium">
                       <Variable size={16} className="text-blue-500" />
                       Variables
                    </div>
                    <Button variant="ghost" size="icon" onClick={addVariable} className="h-7 w-7">
                       <Plus size={14} />
                    </Button>
                 </div>
                 
                 <div className="space-y-3">
                    <AnimatePresence mode="popLayout">
                    {variables.map((v, i) => (
                       <motion.div 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          key={i} 
                          className="group relative bg-[#121215] border border-white/5 rounded-lg p-2"
                        >
                          <div className="flex flex-col gap-2">
                             <input 
                                placeholder="name" 
                                value={v.name}
                                className="bg-transparent border-none text-[10px] font-mono text-primary uppercase tracking-wider focus:outline-none"
                             />
                             <textarea 
                                placeholder="value" 
                                value={v.value}
                                rows={2}
                                className="bg-transparent border-none text-xs text-zinc-300 focus:outline-none resize-none"
                             />
                          </div>
                          <button 
                             onClick={() => removeVariable(i)}
                             className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600 hover:text-red-500"
                          >
                             <Trash2 size={12} />
                          </button>
                       </motion.div>
                    ))}
                    </AnimatePresence>
                 </div>
              </CardContent>
           </Card>

           <Card>
              <CardContent className="p-4 space-y-4">
                 <div className="flex items-center gap-2 text-sm font-medium">
                    <Cpu size={16} className="text-emerald-500" />
                    Model Config
                 </div>
                 <div className="space-y-4">
                    <div className="space-y-1.5">
                       <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Provider</label>
                       <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 text-xs">
                          Anthropic
                          <ChevronDown size={14} className="text-zinc-500" />
                       </div>
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Temperature</label>
                       <div className="flex items-center gap-4">
                          <div className="flex-1 h-1 bg-white/5 rounded-full relative">
                             <div className="absolute top-1/2 left-[70%] -translate-y-1/2 w-3 h-3 bg-white border border-zinc-900 rounded-full shadow" />
                          </div>
                          <span className="text-xs font-mono">0.7</span>
                       </div>
                    </div>
                 </div>
              </CardContent>
           </Card>
        </div>

        {/* Right Side: Main Editor */}
        <div className="lg:col-span-2 flex flex-col gap-6">
           <Card className="flex-1 min-h-[500px] flex flex-col overflow-hidden group">
              <div className="h-10 border-b border-white/5 bg-[#0e0e11] flex items-center justify-between px-4">
                 <div className="flex items-center gap-2">
                    <Code2 size={14} className="text-zinc-500" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Prompt / instruction.md</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="text-[10px] text-zinc-600 font-mono">Line 1, Col 1</div>
                    <RefreshCw size={12} className="text-zinc-600" />
                 </div>
              </div>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Write your dynamic prompt here. Use {{variable_name}} to inject context..."
                className="flex-1 bg-transparent p-6 font-mono text-sm leading-relaxed focus:outline-none resize-none placeholder:text-zinc-800"
              />
              <div className="p-3 border-t border-white/5 bg-[#0e0e11] flex items-center gap-4">
                 <div className="flex items-center gap-2 px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-mono">
                    <Sparkles size={10} />
                    Auto-Optimization Active
                 </div>
              </div>
           </Card>

           <div className="flex gap-4">
              <Card className="flex-1 bg-white/5 border-dashed border-white/10 flex flex-col items-center justify-center p-8 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                 <Plus size={24} className="text-zinc-500 mb-2" />
                 <span className="text-xs font-medium">Add Output Transformation</span>
              </Card>
           </div>
        </div>
      </div>
    </div>
  );
}
