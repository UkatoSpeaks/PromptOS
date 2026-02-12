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
  LogOut
} from "lucide-react";

export default function AccountSettingsPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <p className="text-zinc-500 text-sm mt-1">Manage your profile, security, and subscription preferences.</p>
      </div>

      <div className="space-y-6">
        <Card>
           <CardHeader>
              <CardTitle className="text-lg">Profile Information</CardTitle>
              <CardDescription>How you appear to the PromptOS community.</CardDescription>
           </CardHeader>
           <CardContent className="space-y-4">
              <div className="flex items-center gap-6 mb-6">
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 relative group">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-full cursor-pointer">
                       <span className="text-[10px] font-bold uppercase">Change</span>
                    </div>
                 </div>
                 <div className="space-y-1">
                    <h3 className="font-bold">Anurag</h3>
                    <p className="text-xs text-zinc-500 font-mono">user_id: 8b3c-4d5e6f7a8b</p>
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Display Name</label>
                    <input defaultValue="Anurag" className="w-full bg-white/5 border border-white/5 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                 </div>
                 <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Location</label>
                    <input defaultValue="Tokyo, Japan" className="w-full bg-white/5 border border-white/5 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                 </div>
              </div>
           </CardContent>
        </Card>

        <Card>
           <CardHeader>
              <CardTitle className="text-lg">Security</CardTitle>
              <CardDescription>Protect your account with modern security standards.</CardDescription>
           </CardHeader>
           <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                 <div className="flex items-center gap-3">
                    <Mail className="text-zinc-500" size={20} />
                    <div>
                       <p className="text-sm font-medium">Email Address</p>
                       <p className="text-xs text-zinc-500">anurag@promptos.ai</p>
                    </div>
                 </div>
                 <Button variant="ghost" size="sm" className="text-xs text-primary">Verify</Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                 <div className="flex items-center gap-3">
                    <Shield className="text-zinc-500" size={20} />
                    <div>
                       <p className="text-sm font-medium">Two-Factor Authentication</p>
                       <p className="text-xs text-zinc-500">Currently disabled</p>
                    </div>
                 </div>
                 <Button variant="ghost" size="sm" className="text-xs text-primary">Enable</Button>
              </div>
           </CardContent>
        </Card>

        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <Button variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-red-500/10 gap-2">
               <LogOut size={18} />
               Sign Out
            </Button>
            <Button className="bg-white text-black hover:bg-white/90">Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
