"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | number;
  showText?: boolean;
}

export function Logo({ className, size = "md", showText = true }: LogoProps) {
  const sizeMap = {
    sm: 24,
    md: 32,
    lg: 48,
  };

  const finalSize = typeof size === "number" ? size : sizeMap[size];

  return (
    <div className={cn("flex items-center gap-3 group select-none cursor-pointer", className)}>
      <div 
        className="relative" 
        style={{ width: finalSize, height: finalSize }}
      >
        {/* Glow Background */}
        <div className="absolute inset-0 bg-primary/40 blur-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Logo Icon */}
        <svg 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-full h-full drop-shadow-2xl"
        >
          {/* Main Container - Glassmorphic Base */}
          <rect 
            x="2" 
            y="2" 
            width="28" 
            height="28" 
            rx="8" 
            className="fill-[#09090b] stroke-white/10" 
            strokeWidth="1.5"
          />
          
          {/* Geometric 'P' Layer 1 */}
          <path 
            d="M10 22H14V11H18C21 11 23 12.5 23 15C23 17.5 21 19 18 19H14" 
            stroke="url(#logo-grad)" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="opacity-40"
          />
          
          {/* Terminal Cursor / Accent - The "Prompt" */}
          <path 
            d="M12 15L15 12L12 9" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          
          {/* Bottom Prompt Line */}
          <line 
            x1="12" 
            y1="20" 
            x2="18" 
            y2="20" 
            stroke="#8b5cf6" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            className="animate-pulse"
          />

          <defs>
            <linearGradient id="logo-grad" x1="10" y1="11" x2="23" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <span 
          className={cn(
            "font-bold tracking-tight text-white transition-all group-hover:text-primary",
            finalSize <= 24 ? "text-lg" : finalSize <= 32 ? "text-xl" : "text-3xl"
          )}
        >
          Prompt<span className="text-zinc-500 group-hover:text-white transition-colors">OS</span>
        </span>
      )}
    </div>
  );
}
