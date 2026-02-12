"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  MapPin, 
  Terminal, 
  Cpu, 
  User, 
  Code2, 
  Database,
  Globe,
  Monitor
} from "lucide-react";
import { motion } from "framer-motion";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Sparkles className="text-primary" />
          Persistent User Context
        </h1>
        <p className="text-zinc-500 text-sm mt-1">Define your architectural preferences and tech stack to ground every AI interaction.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <ContextCard 
           icon={<Terminal className="text-primary" />}
           title="Development Stack"
           description="Your primary languages, frameworks, and tools."
           tags={["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "React Query"]}
         />
         <ContextCard 
           icon={<Code2 className="text-blue-500" />}
           title="Coding Style"
           description="Functional vs OOP, naming conventions, and file structure."
           tags={["Functional", "Clean Architecture", "Atomic Design", "TDD"]}
         />
         <ContextCard 
           icon={<User className="text-purple-500" />}
           title="Professional Profile"
           description="Your role, experience level, and project focus."
           tags={["Senior Frontend Engineeer", "Product Focused", "Fast-paced"]}
         />
         <ContextCard 
           icon={<Monitor className="text-emerald-500" />}
           title="Environment & Tools"
           description="Local setup, CI/CD tools, and preferred IDE features."
           tags={["VS Code", "Vercel", "GitHub Actions", "Turborepo"]}
         />
      </div>

      <Card className="bg-gradient-to-br from-primary/10 via-transparent to-transparent border-primary/20">
         <CardHeader>
            <CardTitle>Global Identity Prompt</CardTitle>
            <CardDescription>This instruction is prepended to every prompt sent via PromptOS.</CardDescription>
         </CardHeader>
         <CardContent>
            <textarea 
              className="w-full h-40 bg-black/40 border border-white/10 rounded-xl p-4 font-mono text-sm text-zinc-300 focus:outline-none focus:ring-1 focus:ring-primary"
              defaultValue={`I am a Senior Software Engineer specializing in modern web applications. 
I prioritize performance, accessibility, and type safety. 
Always use modern ESNext features and follow the "Clean Code" principles.`}
            />
            <div className="mt-4 flex justify-end">
               <Button className="bg-primary text-white hover:bg-primary/90">Save Global Context</Button>
            </div>
         </CardContent>
      </Card>
    </div>
  );
}

function ContextCard({ icon, title, description, tags }: { icon: React.ReactNode, title: string, description: string, tags: string[] }) {
  return (
    <Card className="hover:border-white/10 transition-colors group">
       <CardHeader className="flex-row items-center gap-3 space-y-0 p-4">
          <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
             {icon}
          </div>
          <div>
             <CardTitle className="text-base">{title}</CardTitle>
             <CardDescription className="text-xs">{description}</CardDescription>
          </div>
       </CardHeader>
       <CardContent className="p-4 pt-0">
          <div className="flex flex-wrap gap-2">
             {tags.map(t => (
               <span key={t} className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  {t}
               </span>
             ))}
             <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full border border-dashed border-white/10">
                <span className="text-xs">+</span>
             </Button>
          </div>
       </CardContent>
    </Card>
  )
}
