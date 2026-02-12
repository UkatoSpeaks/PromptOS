"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Command, 
  LayoutDashboard, 
  Library, 
  Settings, 
  UserCircle, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
  Search,
  MessageSquare,
  Workflow,
  Users
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Logo } from "@/components/logo";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Builder", href: "/dashboard/builder", icon: Command },
    { name: "Library", href: "/dashboard/library", icon: Library },
    { name: "Workflows", href: "/dashboard/workflows", icon: Workflow },
    { name: "Teams", href: "/dashboard/teams", icon: Users },
    { name: "Context", href: "/dashboard/context", icon: Sparkles },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#020202] text-white">
      {/* Sidebar */}
      <aside 
        className={cn(
          "relative border-r border-white/5 bg-[#09090b] transition-all duration-300 flex flex-col",
          collapsed ? "w-16" : "w-64"
        )}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex items-center justify-between overflow-hidden">
          <Link href="/" className={cn("flex items-center gap-2 shrink-0", collapsed && "hidden")}>
             <Logo size="sm" />
          </Link>
          {collapsed && (
            <div className="flex-1 flex justify-center">
               <Logo size="sm" showText={false} />
            </div>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setCollapsed(!collapsed)}
            className="text-zinc-500 hover:text-white"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </Button>
        </div>

        {/* New Prompt Button */}
        {!collapsed && (
          <div className="px-4 mb-6">
            <Link href="/dashboard/builder" className="block">
              <Button className="w-full gap-2 bg-white text-black hover:bg-white/90">
                <PlusCircle size={18} />
                New Prompt
              </Button>
            </Link>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 px-2 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group",
                  isActive 
                    ? "bg-white/5 text-white" 
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02]"
                )}
              >
                <item.icon size={20} className={cn(isActive ? "text-primary" : "text-zinc-500 group-hover:text-zinc-300")} />
                {!collapsed && <span className="text-sm font-medium">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/5">
           <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
              {!collapsed && (
                <div className="flex-1 overflow-hidden">
                   <p className="text-xs font-medium truncate">Anurag</p>
                   <p className="text-[10px] text-zinc-500 truncate">Pro Developer</p>
                </div>
              )}
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
         {/* Top Header */}
         <header className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#020202]">
            <div className="flex items-center gap-4 text-sm text-zinc-400">
               <span className="font-mono text-xs opacity-50">workspace /</span>
               <span className="text-zinc-200">my-project-v3</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="relative group">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search prompts..." 
                    className="bg-white/5 border border-white/5 rounded-full py-1.5 pl-9 pr-4 text-xs focus:ring-1 focus:ring-primary focus:outline-none w-48 focus:w-64 transition-all"
                  />
               </div>
               <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-white">
                  <MessageSquare size={18} />
               </Button>
            </div>
         </header>

         {/* Screen Content */}
         <div className="flex-1 overflow-y-auto p-8">
            {children}
         </div>
      </main>
    </div>
  );
}
