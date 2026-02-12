"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { Logo } from "@/components/logo";
import { 
  ArrowRight, 
  Terminal, 
  Layers, 
  Zap, 
  BrainCircuit, 
  Workflow, 
  History, 
  Lock,
  ChevronRight,
  Command,
  Plus,
  ArrowUpRight,
  Sparkles,
  MousePointer2,
  Code2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";

// --- Components ---

const HeroSection = () => (
  <section className="relative pt-32 pb-40 overflow-hidden hero-glow noise">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-widest text-primary mb-8"
        >
          <Sparkles size={10} className="animate-pulse" />
          The AI Command Center is Here
        </motion.div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-8 text-gradient">
          Build <span className="text-zinc-500">Smarter</span> <br /> 
          Prompts.
        </h1>
        <p className="text-xl text-zinc-400 mb-12 max-w-lg leading-relaxed font-medium">
          Move from messy chats to engineered workflows. PromptOS helps you orchestrate structured AI context for professional-grade code outputs.
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <Link href="/dashboard">
            <Button size="lg" className="rounded-full gap-2 group h-14 px-8 text-lg">
              Get Started Free
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg border-white/5 bg-white/5 backdrop-blur hover:bg-white/10">
            View Workflows
          </Button>
        </div>
        
        <div className="mt-12 flex items-center gap-4 text-xs font-mono text-zinc-600">
          <div className="flex -space-x-2">
            {[1,2,3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#020203] bg-zinc-800" />
            ))}
          </div>
          <span>Trusted by 5,000+ vibe coders</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotateY: 20, rotateX: 10 }}
        animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative perspective-[2000px]"
      >
        <div className="relative group">
          {/* Main Mockup Card */}
          <div className="relative z-10 p-[1px] rounded-[32px] bg-gradient-to-br from-white/20 via-white/5 to-transparent shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
            <div className="bg-[#09090b] rounded-[31px] overflow-hidden aspect-[4/3.5] flex flex-col noise">
              <div className="h-12 bg-white/[0.03] border-b border-white/[0.05] flex items-center px-6 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/20" />
                  <div className="w-3 h-3 rounded-full bg-green-400/20" />
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-32 h-2 rounded-full bg-white/5" />
                   <div className="w-4 h-4 rounded bg-white/5" />
                </div>
              </div>
              
              <div className="flex-1 flex flex-col p-8 gap-8">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                         <Code2 size={20} className="text-primary" />
                      </div>
                      <div>
                         <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Workflow / engineering</div>
                         <div className="text-sm font-bold text-white">ComponentArchitect.v1</div>
                      </div>
                   </div>
                   <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5" />
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5" />
                   </div>
                </div>

                {/* Variable Section */}
                <div className="grid grid-cols-2 gap-4">
                   {[
                     { label: "tech_stack", val: "Next.js, TS" },
                     { label: "patterns", val: "Atomic Design" }
                   ].map(v => (
                     <div key={v.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-primary uppercase">{v.label}</span>
                        <span className="text-xs text-zinc-400">{v.val}</span>
                     </div>
                   ))}
                </div>

                {/* Main Instruction Area */}
                <div className="flex-1 bg-black/40 border border-white/[0.05] rounded-xl p-5 font-mono text-[11px] leading-relaxed text-zinc-500 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-2 opacity-50"><Terminal size={12} /></div>
                   <p><span className="text-white">@system:</span> Initializing grounding...</p>
                   <p className="mt-2 text-zinc-300">Generate a modular component focusing on <span className="bg-primary/20 text-primary px-1 rounded">{`{{pattern}}`}</span> using <span className="text-white">Clean Architecture</span> principles.</p>
                   <p className="mt-2">Ensure accessibility and performance hooks are integrated by default based on <span className="text-blue-400 underline italic">{`user_identity.md`}</span></p>
                   
                   <motion.div 
                     animate={{ x: [0, 5, 0] }}
                     transition={{ repeat: Infinity, duration: 2 }}
                     className="mt-4 w-1 h-3 bg-primary" 
                   />
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Element 1 - Variable */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -right-12 z-20 p-4 glass border border-white/10 rounded-2xl shadow-2xl hidden md:block"
          >
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                   <Plus size={16} className="text-blue-400" />
                </div>
                <div className="text-xs">
                   <div className="text-zinc-500 text-[10px]">Inject Context</div>
                   <div className="font-bold">Project_PRD.pdf</div>
                </div>
             </div>
          </motion.div>

          {/* Floating Element 2 - Execution */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-12 z-20 p-4 glass border border-white/10 rounded-2xl shadow-2xl hidden md:block"
          >
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                   <Zap size={16} className="text-primary animate-pulse" />
                </div>
                <div className="text-xs">
                   <div className="text-zinc-500 text-[10px]">Execution Status</div>
                   <div className="font-bold text-green-400">Context Grounded</div>
                </div>
             </div>
          </motion.div>
        </div>
      </motion.div>
    </div>

    {/* Background Decorative Circles */}
    <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
    <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
  </section>
);

const ProblemSection = () => (
  <section className="py-40 relative">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        badge="The Problem"
        title="Why Raw ChatGPT Isn't Enough"
        description="Developing with AI shouldn't feel like rolling dice. Professional engineers need architectural certainty, not lucky guesses."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {[
          { icon: History, title: "The Refresh Penalty", desc: "Every new chat window is a lobotomy. Your library preferences, code style, and PRD context are wiped clean." },
          { icon: Lock, title: "Context Fragmentation", desc: "Project knowledge is scattered across 50 tabs and 3 different LLMs. There is no source of truth for your AI identity." },
          { icon: Zap, title: "Vibe Coding Fatigue", desc: "Copy-pasting the same system instructions repeatedly kills momentum and leads to architectural drift." }
        ].map((item, i) => (
          <motion.div
            key={item.title}
            whileHover={{ y: -8 }}
            className="p-10 rounded-3xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] hover:border-white/10 transition-all group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
               <item.icon size={120} />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-8 group-hover:border-primary/40 transition-colors">
              <item.icon className="w-7 h-7 text-zinc-400 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-zinc-500 text-base leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturesGrid = () => (
  <section id="features" className="py-40 bg-zinc-950/30">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        badge="Architecture"
        title="Engineered for Consistency"
        description="PromptOS provides the structured infrastructure you need to move from experimental chatting to professional AI engineering."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Large Feature 1 */}
        <motion.div 
           whileHover={{ scale: 1.01 }}
           className="lg:col-span-2 p-12 rounded-[40px] bg-gradient-to-br from-[#0a0a0c] to-black border border-white/5 relative overflow-hidden group"
        >
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                 <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <Command className="text-primary" size={24} />
                 </div>
                 <h3 className="text-4xl font-bold mb-6">Dynamic Prompt Builder</h3>
                 <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    Stop writing static text. Build prompt templates with typed variables, conditional logic segments, and live project grounding.
                 </p>
                 <ul className="space-y-4">
                    {[
                      "Schema-validated variables",
                      "Dynamic branch logic (If/Else prompts)",
                      "Live Markdown preview & history"
                    ].map(li => (
                      <li key={li} className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                         {li}
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="relative aspect-video rounded-3xl bg-black border border-white/10 p-4 shadow-2xl overflow-hidden group-hover:border-primary/30 transition-colors">
                  <div className="flex gap-2 mb-4">
                     <div className="w-12 h-2 rounded-full bg-white/5" />
                     <div className="w-8 h-2 rounded-full bg-primary/20" />
                  </div>
                  <div className="space-y-4 font-mono text-[10px]">
                     <div className="text-zinc-600">{"{"}</div>
                     <div className="pl-4 text-primary italic">"role": "Architect",</div>
                     <div className="pl-4 text-blue-400">"context": {"{{"} project_context {"}}"},</div>
                     <div className="pl-4 text-zinc-500">"instruction": "Build component..."</div>
                     <div className="text-zinc-600">{"}"}</div>
                  </div>
                  <div className="absolute bottom-4 right-4 animate-pulse">
                     <MousePointer2 className="text-white fill-white" size={16} />
                  </div>
              </div>
           </div>
           {/* Background glow */}
           <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-colors" />
        </motion.div>

        {/* Small Feature 1 */}
        <Card className="p-10 rounded-[40px] bg-[#0a0a0c] border border-white/5 group overflow-hidden">
           <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
              <BrainCircuit className="text-blue-500" size={24} />
           </div>
           <h3 className="text-2xl font-bold mb-4">Identity Grounding</h3>
           <p className="text-zinc-500 leading-relaxed text-sm mb-6">
              Your tech stack, coding standards, and architectural style are prepended to every interaction. Never explain you use TypeScript again.
           </p>
           <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono border border-white/5">TS-v5.0</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono border border-white/5">Clean-Arch</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono border border-white/5">TDD-Focused</span>
           </div>
        </Card>

        {/* Small Feature 2 */}
        <Card className="p-10 rounded-[40px] bg-[#0a0a0c] border border-white/5 group overflow-hidden">
           <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
              <Workflow className="text-emerald-500" size={24} />
           </div>
           <h3 className="text-2xl font-bold mb-4">Project Workflows</h3>
           <p className="text-zinc-500 leading-relaxed text-sm mb-6">
              Group prompts into logical sequences. From PRD analysis to code implementation to unit testing—orchestrated as a single flow.
           </p>
           <div className="space-y-2">
              <div className="h-1 bg-white/5 rounded-full w-full" />
              <div className="h-1 bg-emerald-500/30 rounded-full w-[70%]" />
              <div className="h-1 bg-white/5 rounded-full w-[40%]" />
           </div>
        </Card>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-40 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 text-center">
       <SectionHeader 
         badge="Workflow"
         title="How PromptOS Orchestrates"
         description="A 3-step engine designed to ground every AI interaction in project-specific context."
       />
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {[
            { tag: "Build", title: "Define the Contract", desc: "Select a base workflow and define your project variables using our schema builder." },
            { tag: "Ground", title: "Inject Global Style", desc: "PromptOS automatically injects your Global Identity settings and project-specific PRD context." },
            { tag: "Ship", title: "Execute Anywhere", desc: "Export the perfectly engineered prompt for any LLM, ensuring consistent performance." }
          ].map((item, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="flex flex-col items-center group"
            >
               <div className="w-20 h-20 rounded-3xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-8 relative z-10 group-hover:border-primary/40 transition-colors shadow-2xl">
                  <span className="text-2xl font-bold font-mono text-gradient-primary leading-none">{i+1}</span>
                  <div className="absolute -inset-2 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
               </div>
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-2">{item.tag}</span>
               <h3 className="text-xl font-bold mb-4">{item.title}</h3>
               <p className="text-zinc-500 text-sm leading-relaxed max-w-[280px]">{item.desc}</p>
            </motion.div>
          ))}
          {/* Animated SVG connecting line could go here */}
       </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 border-t border-white/5 bg-black noise">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-2 space-y-6">
        <Link href="/">
           <Logo size="lg" />
        </Link>
        <p className="text-zinc-500 text-base max-w-sm leading-relaxed">
          The AI Command Center for developers and vibe coders who move at the speed of thought. Built by engineers, for engineers.
        </p>
        <div className="flex gap-4">
           {["Twitter", "GitHub", "Discord"].map(social => (
             <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/10 transition-all">
                <ArrowUpRight size={18} />
             </a>
           ))}
        </div>
      </div>
      
      <div className="space-y-6">
        <h4 className="text-white font-bold text-sm uppercase tracking-widest">Engine</h4>
        <ul className="space-y-3 text-zinc-500 text-sm font-medium">
           <li><Link href="#features" className="hover:text-primary transition-colors">Prompt Builder</Link></li>
           <li><Link href="#how-it-works" className="hover:text-primary transition-colors">Workflows</Link></li>
           <li><Link href="#" className="hover:text-primary transition-colors">Templates</Link></li>
           <li><Link href="#" className="hover:text-primary transition-colors">API Reference</Link></li>
        </ul>
      </div>

      <div className="space-y-6">
        <h4 className="text-white font-bold text-sm uppercase tracking-widest">Company</h4>
        <ul className="space-y-3 text-zinc-500 text-sm font-medium">
           <li><Link href="#" className="hover:text-primary transition-colors">About</Link></li>
           <li><Link href="#" className="hover:text-primary transition-colors">Docs</Link></li>
           <li><Link href="#" className="hover:text-primary transition-colors">Privacy</Link></li>
           <li><Link href="#" className="hover:text-primary transition-colors">Terms</Link></li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
       <div className="text-zinc-600 text-[10px] uppercase font-bold tracking-[0.3em]">
          © 2024 PromptOS INC. ALL RIGHTS RESERVED.
       </div>
       <div className="flex items-center gap-2 text-zinc-600 text-[10px] uppercase font-bold tracking-widest">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Engine Status: Operational
       </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      
      <HeroSection />
      
      <ProblemSection />
      
      <FeaturesGrid />
      
      <HowItWorks />

      {/* Final Conversion Section */}
      <section className="py-40 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="p-16 rounded-[48px] bg-[#0a0a0c] border border-white/5 relative overflow-hidden shadow-2xl"
           >
              <div className="absolute top-0 right-0 p-12 opacity-[0.05] -rotate-12 translate-x-12 -translate-y-12">
                 <Logo size={240} showText={false} />
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">Ship <span className="text-zinc-500 italic font-serif">faster</span> with <br /> better context.</h2>
              <p className="text-zinc-400 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
                 Stop guessing prompts. Join the generation of vibe coders using structured engineering.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link href="/dashboard">
                   <Button size="lg" className="rounded-full h-14 px-12 text-lg">
                      Build Your First Workflow
                   </Button>
                 </Link>
                 <Button variant="outline" size="lg" className="rounded-full h-14 px-12 text-lg border-white/10">
                    Join Discord
                 </Button>
              </div>
              <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale saturate-0">
                 {/* Placeholders for model logos */}
                 <span className="text-sm font-bold tracking-widest uppercase">OpenAI</span>
                 <span className="text-sm font-bold tracking-widest uppercase">Anthropic</span>
                 <span className="text-sm font-bold tracking-widest uppercase">Mistral AI</span>
                 <span className="text-sm font-bold tracking-widest uppercase">Gemini</span>
              </div>
           </motion.div>
        </div>
        {/* Subtle decorative glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/10 blur-[150px] -z-10" />
      </section>

      <Footer />
    </div>
  );
}
