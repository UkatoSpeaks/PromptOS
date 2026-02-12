"use client";

import { Workflow } from "lucide-react";

export default function WorkflowsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
        <Workflow size={32} />
      </div>
      <h1 className="text-2xl font-bold">Workflow Hub</h1>
      <p className="text-zinc-500 max-w-xs">The visual workflow engine is currently being optimized. Check back soon for sequence orchestration.</p>
    </div>
  );
}
