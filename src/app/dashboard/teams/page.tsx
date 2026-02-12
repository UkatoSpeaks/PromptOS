"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  UserPlus, 
  Shield, 
  Zap, 
  Activity, 
  MoreVertical, 
  Mail, 
  Check, 
  X, 
  ChevronRight, 
  Globe, 
  Lock, 
  Settings, 
  Crown,
  Command,
  Heart,
  Share2,
  Trash2,
  UserCircle,
  Copy,
  Plus,
  RefreshCcw,
  Sparkles,
  Terminal,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// --- Types ---

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "Owner" | "Engineer" | "Viewer";
  avatar?: string;
  status: "active" | "invited" | "offline";
  lastActive: string;
}

// --- Mock Data ---

const MOCK_MEMBERS: TeamMember[] = [
  { id: "1", name: "Gabriel Thorne", email: "gabriel@promptos.ai", role: "Owner", status: "active", lastActive: "Just now" },
  { id: "2", name: "Elena Vance", email: "elena@vance.io", role: "Engineer", status: "active", lastActive: "2m ago" },
  { id: "3", name: "Marcus Wright", email: "marcus@skynet.com", role: "Engineer", status: "offline", lastActive: "1h ago" },
  { id: "4", name: "Sarah Connor", email: "sarah@resistance.org", role: "Viewer", status: "invited", lastActive: "N/A" },
];

const MOCK_ACTIVITY = [
  { id: "a1", user: "Elena Vance", action: "Synthesized Blueprint", item: "SaaS Launch Orchestrator", time: "5m ago" },
  { id: "a2", user: "Marcus Wright", action: "Updated context", item: "Neural Grounding", time: "1h ago" },
  { id: "a3", user: "Gabriel Thorne", action: "Shared library", item: "Backend Refactor Kit", time: "3h ago" },
];

// --- Main Page Component ---

export default function TeamsPage() {
  const [members, setMembers] = useState<TeamMember[]>(MOCK_MEMBERS);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  return (
    <div className="max-w-[1400px] mx-auto space-y-12 pb-24 relative overflow-hidden">
      {/* Decorative Atmospheric Glows */}
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[20%] right-[-100px] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* 1. Ultra Header Section */}
      <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pt-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-inner">
               <Globe size={18} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Neural Workspace</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gradient leading-tight">
            Team Hub
          </h1>
          <p className="text-zinc-500 text-xl max-w-2xl font-medium leading-relaxed">
            Manage your <span className="text-zinc-300">collaborative engine</span> and orchestrate team-wide intelligence.
          </p>
        </div>

        <div className="flex items-center gap-4">
           <Button 
             onClick={() => setIsInviteModalOpen(true)}
             className="h-14 px-8 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold uppercase tracking-widest text-xs gap-3 shadow-[0_20px_40px_-10px_rgba(59,130,246,0.3)] transition-all hover:scale-[1.02]"
           >
              <UserPlus size={18} />
              Propagate Invite
           </Button>
        </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 mt-8">
        {/* Left Column: Member Management */}
        <div className="xl:col-span-8 space-y-8">
          
          {/* Workspace Status Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <StatusBrief 
               icon={<Users size={20} />} 
               label="Active Units" 
               value={members.filter(m => m.status === 'active').length.toString()} 
               trend="+1 this week"
             />
             <StatusBrief 
               icon={<Zap size={20} />} 
               label="Total Syntheses" 
               value="1,284" 
               trend="98% Efficiency"
             />
             <StatusBrief 
               icon={<Lock size={20} />} 
               label="Security Tier" 
               value="RSA-4096" 
               trend="End-to-End"
             />
          </div>

          {/* Members List */}
          <section className="space-y-6">
            <div className="flex items-center justify-between pl-2 border-l-2 border-blue-500/30">
               <div>
                  <h3 className="text-xl font-bold text-zinc-200 tracking-tight">Access Control</h3>
                  <p className="text-xs text-zinc-500">Manage member privileges and authentication nodes.</p>
               </div>
               <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-9 rounded-xl border-white/5 bg-white/[0.02] text-[10px] font-bold uppercase tracking-wider gap-2">
                     <RefreshCcw size={12} />
                     Sync Nodes
                  </Button>
               </div>
            </div>

            <div className="space-y-3">
               {members.map((member, i) => (
                 <MemberRow key={member.id} member={member} index={i} />
               ))}
            </div>
          </section>
        </div>

        {/* Right Column: Activity & Intel */}
        <div className="xl:col-span-4 space-y-8">
          
          {/* Live Activity Feed */}
          <Card className="rounded-[40px] bg-[#09090b] border-white/5 relative overflow-hidden group shadow-2xl">
             <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shadow-inner">
                         <Activity size={20} />
                      </div>
                      <CardTitle className="text-lg">Network Activity</CardTitle>
                   </div>
                   <span className="text-[10px] font-black uppercase text-emerald-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                   </span>
                </div>
             </CardHeader>
             <CardContent className="pt-6 space-y-6">
                {MOCK_ACTIVITY.map((act, i) => (
                  <div key={act.id} className="flex gap-4 group/item">
                     <div className="w-1.5 h-auto rounded-full bg-white/[0.05] relative">
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-500/40 rounded-full blur-sm group-hover/item:h-full transition-all duration-700" />
                     </div>
                     <div className="space-y-1 py-1">
                        <p className="text-xs text-zinc-300">
                           <span className="font-bold text-blue-400">{act.user}</span> {act.action}
                        </p>
                        <p className="text-xs text-zinc-500 font-medium italic">“{act.item}”</p>
                        <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest pt-1">{act.time}</p>
                     </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full h-12 rounded-2xl border border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 hover:text-white hover:bg-white/5 transition-all">
                   View Audit Logs
                </Button>
             </CardContent>
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
          </Card>

          {/* Shared Intelligence Info */}
          <div className="p-10 rounded-[48px] bg-primary/5 border border-primary/10 space-y-6 group/intel relative overflow-hidden">
             <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm">
                      <Terminal size={24} />
                   </div>
                   <h4 className="text-xl font-bold tracking-tight">Shared Logic</h4>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">
                   Collaboration mode is enabled. Prompt blueprints saved by engineers are automatically propagated to the <span className="text-zinc-300">Global Team Registry</span>.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">Engines</p>
                      <p className="text-2xl font-black italic">14</p>
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">Orchestrations</p>
                      <p className="text-2xl font-black italic">89</p>
                   </div>
                </div>
             </div>
             <Cpu size={160} className="absolute -bottom-10 -right-10 text-white/[0.02] -rotate-12 transition-transform group-hover/intel:scale-110 duration-700" />
          </div>
        </div>
      </div>

      {/* Invite Modal Overlay */}
      <AnimatePresence>
        {isInviteModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-3xl bg-black/60">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="w-full max-w-lg bg-[#09090b] border border-white/10 rounded-[40px] p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] relative overflow-hidden"
            >
               <button 
                 onClick={() => setIsInviteModalOpen(false)}
                 className="absolute top-8 right-8 text-zinc-600 hover:text-white transition-colors"
               >
                  <X size={24} />
               </button>

               <div className="space-y-8 relative z-10">
                  <div className="flex flex-col items-center text-center space-y-4">
                     <div className="w-20 h-20 rounded-[32px] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-inner">
                        <UserPlus size={32} />
                     </div>
                     <div>
                        <h2 className="text-3xl font-black italic tracking-tighter uppercase">Initialize Invite</h2>
                        <p className="text-zinc-500 text-sm mt-2">Propagate workspace access to a new neural unit.</p>
                     </div>
                  </div>

                  <div className="space-y-4 pt-4">
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest pl-1">Email Identifier</label>
                        <input 
                          type="email" 
                          placeholder="identifier@org.domain"
                          className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 px-6 text-sm focus:ring-1 focus:ring-blue-500/40 outline-none transition-all placeholder:text-zinc-800"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest pl-1">Access Tier</label>
                        <div className="grid grid-cols-3 gap-3">
                           {["Engineer", "Viewer", "Guest"].map(role => (
                             <button key={role} className="py-3 rounded-xl border border-white/5 bg-white/[0.02] text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:border-blue-500/30 hover:text-blue-500 transition-all">
                               {role}
                             </button>
                           ))}
                        </div>
                     </div>
                  </div>

                  <Button className="w-full h-16 rounded-[32px] bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/20">
                     Propagate Wave
                  </Button>
               </div>
               
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.01] pointer-events-none" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Sub-components ---

function MemberRow({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="p-6 rounded-[32px] bg-white/[0.01] border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:bg-white/[0.03] transition-all hover:border-white/10"
    >
      <div className="flex items-center gap-6">
         <div className="relative">
            <div className="w-16 h-16 rounded-[24px] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center p-0.5 border border-white/5 shadow-2xl">
               <div className="w-full h-full bg-[#09090b] rounded-[22px] flex items-center justify-center font-black italic text-zinc-500 group-hover:text-blue-500 transition-colors">
                  {member.name.split(' ').map(n => n[0]).join('')}
               </div>
            </div>
            <div className={cn(
               "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#020203] shadow-lg",
               member.status === 'active' ? 'bg-emerald-500' : member.status === 'invited' ? 'bg-orange-500' : 'bg-zinc-700'
            )} />
         </div>
         <div>
            <h4 className="text-xl font-bold tracking-tight">{member.name}</h4>
            <p className="text-xs text-zinc-500 font-medium">{member.email}</p>
         </div>
      </div>

      <div className="flex items-center gap-8 px-4">
         <div className="flex flex-col items-end">
            <span className={cn(
              "text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-lg border",
              member.role === 'Owner' ? "bg-amber-500/10 border-amber-500/20 text-amber-500" : "bg-blue-500/10 border-blue-500/20 text-blue-500"
            )}>
               {member.role}
            </span>
            <p className="text-[9px] text-zinc-700 font-bold uppercase tracking-widest mt-2">{member.lastActive}</p>
         </div>
         <button className="w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center text-zinc-600 hover:text-white hover:bg-white/5 transition-all">
            <MoreVertical size={20} />
         </button>
      </div>
    </motion.div>
  );
}

function StatusBrief({ icon, label, value, trend }: { icon: React.ReactNode, label: string, value: string, trend: string }) {
  return (
    <Card className="p-8 rounded-[40px] bg-white/[0.01] border-white/5 group hover:bg-white/[0.02] transition-all duration-500">
       <div className="space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-blue-500 transition-all shadow-inner">
             {icon}
          </div>
          <div>
             <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-2">{label}</h5>
             <div className="flex items-end gap-3">
                <p className="text-4xl font-black italic tracking-tighter">{value}</p>
                <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest pb-1.5 opacity-0 group-hover:opacity-100 transition-opacity">{trend}</p>
             </div>
          </div>
       </div>
    </Card>
  );
}
