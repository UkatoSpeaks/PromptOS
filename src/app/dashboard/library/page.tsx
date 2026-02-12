"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Library, 
  Search, 
  Filter, 
  Clock, 
  Tag as TagIcon, 
  MoreVertical,
  Star,
  Copy,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";

export default function LibraryPage() {
  const prompts = [
    { title: "React Component Architect", tag: "Frontend", updated: "2h ago", stars: 12, category: "Engineering" },
    { title: "SQL Query Optmizer", tag: "Database", updated: "5h ago", stars: 8, category: "System" },
    { title: "Next.js 15 Migrator", tag: "Update", updated: "1d ago", stars: 24, category: "Engineering" },
    { title: "Zustand State Planner", tag: "State", updated: "3d ago", stars: 5, category: "Frontend" },
    { title: "PyTest Architect", tag: "Testing", updated: "1w ago", stars: 15, category: "Quality" },
    { title: "Docker Multi-stage", tag: "DevOps", updated: "2w ago", stars: 30, category: "System" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Prompt Library</h1>
          <p className="text-zinc-500 text-sm mt-1">Manage and organize your personal repository of structured prompts.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
             <input type="text" placeholder="Search library..." className="bg-white/5 border border-white/5 rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary focus:outline-none w-64" />
          </div>
          <Button variant="outline" className="gap-2 border-white/5 bg-white/5 hover:bg-white/10">
            <Filter size={16} />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {prompts.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="group hover:border-primary/20 transition-all cursor-pointer overflow-hidden">
               <div className="h-2 w-full bg-gradient-to-r from-primary/40 to-transparent" />
               <CardHeader className="flex-row items-start justify-between p-4 pb-2">
                  <div className="space-y-1">
                     <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{p.category}</span>
                     <CardTitle className="text-base group-hover:text-primary transition-colors">{p.title}</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-600">
                     <MoreVertical size={16} />
                  </Button>
               </CardHeader>
               <CardContent className="p-4 pt-0 space-y-4">
                  <p className="text-xs text-zinc-400 line-clamp-2">
                     Advanced template for generating robust, accessible React components with Tailwind CSS integration and unit tests included.
                  </p>
                  <div className="flex flex-wrap gap-2">
                     <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-medium border border-blue-500/20">
                        <TagIcon size={10} />
                        {p.tag}
                     </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                     <div className="flex items-center gap-4 text-zinc-500 text-[10px] font-mono">
                        <span className="flex items-center gap-1">
                           <Clock size={12} />
                           {p.updated}
                        </span>
                        <span className="flex items-center gap-1">
                           <Star size={12} className="text-yellow-600/50" />
                           {p.stars}
                        </span>
                     </div>
                     <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-zinc-500">
                           <Copy size={12} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-zinc-500">
                           <ExternalLink size={12} />
                        </Button>
                     </div>
                  </div>
               </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
