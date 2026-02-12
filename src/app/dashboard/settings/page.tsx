"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Mail, 
  Shield, 
  CreditCard, 
  Bell, 
  Key,
  LogOut,
  Settings as SettingsIcon,
  ShieldCheck,
  Smartphone,
  Globe,
  Trash2,
  Camera
} from "lucide-react";
import { motion } from "framer-motion";

export default function SettingsPage() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-12 pb-24 relative overflow-hidden">
      {/* Premium Decorative Glows */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pt-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 shadow-inner">
               <SettingsIcon size={18} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">System Preferences</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gradient leading-tight">
            Account Settings
          </h1>
          <p className="text-zinc-500 text-xl max-w-2xl font-medium">
            Manage your credentials, security protocols, and system-wide configurations.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start mt-8">
        {/* Left: Main Form */}
        <div className="xl:col-span-8 space-y-10">
          
          {/* Profile Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between pl-2 border-l-2 border-indigo-500/30">
               <div>
                  <h3 className="text-xl font-bold text-zinc-200">System Identity</h3>
                  <p className="text-xs text-zinc-500">Control your primary identification within the PromptOS engine.</p>
               </div>
            </div>

            <Card className="p-8 rounded-[40px] bg-[#09090b]/80 border-white/5 backdrop-blur-xl relative overflow-hidden group">
               <div className="flex items-center gap-10 mb-10">
                  <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-500 p-1 relative overflow-hidden group/avatar">
                     <div className="w-full h-full bg-[#020203] rounded-[22px] flex items-center justify-center overflow-hidden">
                        <div className="text-3xl font-black italic text-indigo-500 group-hover/avatar:scale-110 transition-transform duration-500">GT</div>
                     </div>
                     <button className="absolute inset-0 bg-indigo-500/40 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <Camera size={24} />
                     </button>
                  </div>
                  <div className="space-y-3">
                     <h4 className="text-2xl font-bold font-mono">GabrielThorne_x7</h4>
                     <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full w-fit border border-white/5">Neural Designer</p>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest pl-1">Primary Display Name</label>
                     <input defaultValue="Gabriel Thorne" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-indigo-500/40 outline-none transition-all text-zinc-300" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest pl-1">Regional Identifier</label>
                     <input defaultValue="Tokyo Hub / TZ-9" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 px-6 text-sm focus:ring-1 focus:ring-indigo-500/40 outline-none transition-all text-zinc-300" />
                  </div>
               </div>
            </Card>
          </section>

          {/* Security Protocols */}
          <section className="space-y-6">
            <div className="flex items-center justify-between pl-2 border-l-2 border-red-500/30">
               <div>
                  <h3 className="text-xl font-bold text-zinc-200">Security Protocols</h3>
                  <p className="text-xs text-zinc-500">Manage encryption, session control, and access credentials.</p>
               </div>
            </div>

            <div className="space-y-4">
               <SecurityOption 
                 icon={<Mail className="text-zinc-500" />}
                 title="Primary Access Gateway"
                 description="gabriel@promptos.ai"
                 action="Verify"
                 active
               />
               <SecurityOption 
                 icon={<ShieldCheck className="text-zinc-500" />}
                 title="Neural Multi-Factor Auth"
                 description="Enhanced biometric and token orchestration."
                 action="Configure"
               />
               <SecurityOption 
                 icon={<Smartphone className="text-zinc-500" />}
                 title="Linked Neural Units"
                 description="4 Authorized devices currently active."
                 action="Review"
               />
            </div>
          </section>

          {/* Dangerous Zone */}
          <section className="pt-10 border-t border-white/5 flex items-center justify-between">
             <Button variant="ghost" className="text-zinc-600 hover:text-red-500 group gap-4 px-0">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] flex items-center justify-center group-hover:bg-red-500/10 transition-colors">
                   <Trash2 size={20} />
                </div>
                <div className="text-left">
                   <p className="font-bold text-sm">Decommission Account</p>
                   <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Irreversible Action</p>
                </div>
             </Button>
             <Button className="h-14 px-10 rounded-2xl bg-white text-black font-extrabold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all shadow-2xl">
                Update Security Cloud
             </Button>
          </section>
        </div>

        {/* Right: Meta Summary */}
        <div className="xl:col-span-4 space-y-8">
           <Card className="p-8 rounded-[40px] bg-gradient-to-br from-indigo-500/10 to-transparent border-white/5 relative overflow-hidden group">
              <div className="relative z-10 space-y-6">
                 <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-500">
                    <Shield size={24} />
                 </div>
                 <h4 className="text-xl font-bold">Encrypted Node</h4>
                 <p className="text-zinc-500 text-sm leading-relaxed">
                    Your account is currently protected by RSA-4096 orchestration. Local context is hashed before cloud synchronization.
                 </p>
                 <div className="pt-4 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Service Active</span>
                 </div>
              </div>
              <Globe size={180} className="absolute -bottom-10 -right-10 text-white/[0.02] -rotate-12 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
           </Card>

           <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 space-y-4">
              <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Global Status</p>
              <div className="space-y-4">
                 <StatusItem label="API Connectivity" status="Nominal" />
                 <StatusItem label="Cloud Persistence" status="Active" />
                 <StatusItem label="Version Control" status="v2.4.1" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function SecurityOption({ icon, title, description, action, active = false }: { icon: any, title: string, description: string, action: string, active?: boolean }) {
  return (
    <div className="flex items-center justify-between p-6 rounded-[32px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group cursor-pointer">
       <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-indigo-500 group-hover:border-indigo-500/20 transition-all">
             {icon}
          </div>
          <div>
             <h5 className="font-bold text-sm text-zinc-300">{title}</h5>
             <p className="text-xs text-zinc-500 font-medium">{description}</p>
          </div>
       </div>
       <Button variant="ghost" className={cn(
         "text-[10px] font-black uppercase tracking-widest px-6 h-10 rounded-xl",
         active ? "bg-emerald-500/10 text-emerald-500" : "bg-white/5 text-zinc-500 hover:text-white"
       )}>
          {active ? "Active" : action}
       </Button>
    </div>
  );
}

function StatusItem({ label, status }: { label: string, status: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.02] pb-2 last:border-none last:pb-0">
       <span className="text-xs text-zinc-500 font-medium">{label}</span>
       <span className="text-xs font-bold text-zinc-300">{status}</span>
    </div>
  );
}
